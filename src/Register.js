import React, { Component } from 'react';
import { View, Text, TextField, Button, Image } from 'react';
class Register extends React.Component{
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div>
        <div>
          <h3> Enter Your Login Details</h3>
        </div>
        <div>
          <input name="username" placeholder="set username" />
          <input name="password" placeholder="set password" /><br />
          <button name="username" >Login</button>
        </div>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Register;