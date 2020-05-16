let UtilityService = {
	checkForErrors: function(body){

		var hasErrors = false;
		var errors = []

		if(!body.hasOwnProperty('name')){
			errors.push('No name provided');
		}
		if(!body.hasOwnProperty('email')){
			errors.push('No email provided');
		}
		if(!body.hasOwnProperty('password')){
			errors.push('No password provided');
		}
		
		return {hasErrors: hasErrors, errors: errors}
	}
}
module.exports = UtilityService;