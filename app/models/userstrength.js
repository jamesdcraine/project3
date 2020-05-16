var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserstrengthSchema = new Schema({ 
	userid: String, 
	strength: String, 
	endurance: String, 
	guile: String ,
	frenzy:String
});

UserstrengthSchema.methods.toJSON = function() {
	var obj = this.toObject();
	delete obj.password;
	return obj;
}
module.exports = mongoose.model('Userstrength', UserstrengthSchema);