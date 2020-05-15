import React, { Component } from 'react';
import { View, Text, TextField, Button, Image } from 'react';
class Login extends React.Component{
constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }
render() {
    return (
      <div style={dBlock}>
        <div style={style}>
          <h3> Enter Your Login Details</h3>
        </div>
        <div style={style}>
          <div style={Object.assign(style, style1)}>
            <input style={input} name="username" placeholder="username" /><br />
            <input style={input} name="password" placeholder="password" /><br />
            <button style={button} name="username" >Login</button>
          </div>
        </div>
      </div>
    );
  }
}
const style = {
 margin: 15,
  display:"flex",
 alignItems: "center",
 justifyContent: "center",
 justifyItems :"center",

};

const style1 = {
  display :"block",

};

const dBlock = {
  display: "block",
  position: "relative",
  width: "auto",
  margin: "auto",
}
const button = {
  backgroundColor: "blue",
  color: "white",
  width:" 60px",
  height: "40px",
  margin:"6px",
}
const input = {
  border: "inbound",
  borderWidth: "4px",
  paddingTop: "10px",
  margin:"6px",
}
export default Login;