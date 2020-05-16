var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UsergameSchema = new Schema({ 
	userid: String , 
	opponentid:String ,
	status:String,
	playeddon: Date
});

UsergameSchema.methods.toJSON = function() {
	var obj = this.toObject();
	
	return obj;
}
module.exports = mongoose.model('Usergame', UsergameSchema);