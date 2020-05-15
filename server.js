// =================================================================
// get the packages we need ========================================
// =================================================================
var express 	= require('express');
var cors 		= require('cors')
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var ObjectID   = require('mongodb').ObjectID;

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var config = require('./config'); // get our config file
var User   = require('./app/models/user'); // get our mongoose model

var Util = require('./app/services/UtilityService');
var Userfitpoints   = require('./app/models/userfitpoints'); // get our mongoose model


// =================================================================
// configuration ===================================================
// =================================================================
var port = process.env.PORT || 3333; // used to create, sign, and verify tokens
mongoose.connect(config.database, {
	useMongoClient: true
}); 
app.set('superSecret', config.secret); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));



/**
*
*
* CORS support 
*
**/
app.use(cors())



// =================================================================
// routes ==========================================================
// =================================================================
app.get('/', function(req, res) {
	res.send('Hello! The API is at http://localhost:' + port + '/api');
});


app.get('/seed', function(req, res) {

	var nick = new User({ 
		name: 'james', 
		email: 'jamesdcraine@gmail.com',
		password: 'password1',
		admin: true 
	});
	nick.save(function(err) {
		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
	});
});

app.post('/syncfitcoins', function(req, res) {
	
	Userfitpoints.findOne({
		// name: req.body.name,
		userid: 		req.body.userid
		
	}, function(err, puser) {
		
		
		if (!puser) {
			var points = new Userfitpoints({ 
							userid: req.body.userid, 
							points: req.body.points
						});
			points.save(function(err) {
				if (err) throw err;

				console.log('points saved successfully');
				res.json({ success: true ,points:req.body.points});
			});
		} else if (puser) {
			console.log('points updated successfully');
			var tpoints =  Number(puser.points) +  Number(req.body.points);
			console.log(tpoints);console.log(req.body.userid);
			
			 Userfitpoints.updateOne({ userid: puser.userid }, 
			                         { $set: {points: tpoints, userid: puser.userid  } }, 
									 function(err, res) {
															if (err) throw err;
															console.log("1 document updated");
														
														  });
			
			res.json({ success: true ,points:tpoints});
			//var res2 = Userfitpoints.updateOne({ userid: puser.userid}, { points: tpoints});
			//console.log(res2.n+"matched"); // Number of documents matched
            //console.log(res2.nModified+"modified"); // Number of documents modified
			//res.json({ success: true });
			
		}
	
	}
	);
});	
/**
*
* Register
* Create a user 
*
*/
app.post('/register', function(req, res) {

	var errorCheck = Util.checkForErrors(req.body);
	if(errorCheck.hasErrors){
		console.log('There were errors...');
		res.json(errorCheck.errors);
		return;
	}


	// create a sample user
	var user = new User({ 
		name: req.body.name, 
		email: req.body.email,
		password: req.body.password,
		admin: req.body.admin
	});
	user.save(function(err) {

		if (err) throw err;

		console.log('User saved successfully');
		res.json({ success: true });
	});
});







// ---------------------------------------------------------
// get an instance of the router for api routes
// ---------------------------------------------------------
var apiRoutes = express.Router(); 

// ---------------------------------------------------------
// authentication (no middleware necessary since this isnt authenticated)
// ---------------------------------------------------------
// http://URL/api/authenticate
var login = function(req, res) {

	// find the user
	User.findOne({
		// name: req.body.name,
		email: 		req.body.email,
		password: 	req.body.password
	}, function(err, user) {

		if (err) throw err;

		if (!user) {
			res.json({ success: false, message: 'Authentication failed. User not found.' });
		} else if (user) {

			// check if password matches
			if (user.password != req.body.password) {
				res.json({ success: false, message: 'Authentication failed. Wrong password.' });
			} else {

				// if user is found and password is right
				// create a token
				var payload = {
					admin: user.admin	
				}
				var token = jwt.sign(payload, app.get('superSecret'), {
					expiresIn: 86400 // expires in 24 hours
				});
                console.log(user.email);
				res.json({
					success: true,
					message: 'Enjoy your token!',
					token: token,
					name:user.name,
					email:user.email
				});
			}		

		}

	});
}
apiRoutes.post('/authenticate', login);
apiRoutes.post('/login', login);

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
apiRoutes.use(function(req, res, next) {

	// check header or url parameters or post parameters for token
	var token = req.body.token || req.param('token') || req.headers['x-access-token'];

	// decode token
	if (token) {

		// verifies secret and checks exp
		jwt.verify(token, app.get('superSecret'), function(err, decoded) {			
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.' });		
			} else {
				// if everything is good, save to request for use in other routes
				req.decoded = decoded;	
				next();
			}
		});

	} else {

		// if there is no token
		// return an error
		return res.status(403).send({ 
			success: false, 
			message: 'No token provided.'
		});
		
	}
	
});

// ---------------------------------------------------------
// authenticated routes
// ---------------------------------------------------------
apiRoutes.get('/', function(req, res) {
	res.json({ message: 'Welcome to the coolest API on earth!' });
});

apiRoutes.get('/users', function(req, res) {
	User.find({}, function(err, users) {
		res.json(users);
	});
});

apiRoutes.get('/check', function(req, res) {
	res.json(req.decoded);
});

app.use('/api', apiRoutes);

// =================================================================
// start the server ================================================
// =================================================================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);
