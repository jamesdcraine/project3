import React from 'react';
import propTypes from 'prop-types';
import {Button } from 'semantic-ui-react';
import Toggle from 'react-toggle';
import "react-toggle/style.css"


 class RegistrationForm extends React.Component {
   state = {

     //Creats an object that can store the variables
     data: {
       username: '',
       email: '',
       password: '',
       admin:'false'
     },
     loading: false,
     errors: {}
   };

   //Checks for the change of state and then assigns the form data to the state.
   onChange = e => this.setState({data: {...this.state.data, [e.target.name]: e.target.value}});

   onSubmit = (e) => {
      e.preventDefault();
      //console.log(this.state.data);
      //This checks if the user wants to be an admin and changes it to false to avoid security risks. It also notifies that a specified user wants to be an admin.
      //We can replace the "alert()" function that displays the admin status of a user with a sendEmail function that notifies the platform architect.
      
      this.props.submit(this.state.data);
   };

   render() {
     const {data} = this.state;

     return(

      <div>
      <form onSubmit = {this.onSubmit} >

          <label htmlFor="username"><b>username</b></label>
          <input type="username" placeholder="Enter Username" id="username" name="username" value={data.username} onChange = {this.onChange} required/>

          <br/><br/>

          <label htmlFor="email"><b>email</b></label>
          <input type="email" placeholder="Enter Email" id="email" name="email" value={data.email} onChange = {this.onChange} required/>

          <br/><br/>

          <label htmlFor="password"><b>password</b></label>
          <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} required/>
          <br/><br/>
		   <label htmlFor="password"><b>password repeat</b></label>
          <input type="password" placeholder="Enter Password" id="password" name="password" value={data.password} onChange = {this.onChange} required/>
          <br/><br/>
          <label htmlFor="admin"><b>desired creature type</b></label>
		  <input type="radio"  name="admin" value='terrestrial'/><label htmlFor="email"><b>terrestrial</b></label>
		  <input type="radio"   name="admin" value='aquatic'/>aquatic
		  <input type="radio"  name="admin" value='magic'/>magic
          
			<br/>

          <button type="submit" className="button">Join</button>
      </form>
    </div>

     );
    }
}

 RegistrationForm.propTypes = {
   submit: propTypes.func.isRequired
 };

 export default RegistrationForm;