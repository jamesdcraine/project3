var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserfitpointsSchema = new Schema({ 
    userid :String,
	points:String 
});

UserfitpointsSchema.methods.toJSON = function() {
	var obj = this.toObject();
	return obj;
}
module.exports = mongoose.model('Userfitpoints', UserfitpointsSchema);