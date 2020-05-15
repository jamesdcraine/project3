import React, { Component } from 'react';
import { View, Text, TextField, Button, Image } from 'react';
class DefaultScreen extends React.Component{
constructor(props){
  super(props);

 }
render() {
    return (
      <div>
        <div>
          <h3> Home Page</h3>
        </div>
        <div>
        Please select ann option
        </div>
        <div>
          <button style={style} name="seekBattle" > Seek a battle</button><br />
          <button style={style} name="powerUpCreature" >Power Up</button><br />
          <button style={style} name="logout" >Logout</button> 
        </div>
      </div>
    );
  }
}
const style = {
 margin: 15,
 padding: 50,
 backgroundColor: "#ff00ccff",
};
export default DefaultScreen;