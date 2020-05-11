var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = new Schema({ 
	name: String, 
	email: String, 
	password: String, 
	admin: String 
});

UserSchema.methods.toJSON = function() {
	var obj = this.toObject();
	delete obj.password;
	return obj;
}
module.exports = mongoose.model('User', UserSchema);