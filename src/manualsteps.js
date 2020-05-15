import React, { Component } from 'react';
import { View, Text, TextField, Button, Image } from 'react';

class ManualsTeps extends React.Component{
constructor(props){
  super(props);

 }
render() {
    return (
      <div>
        <div style={center}>
          <h3> <bold>Enter your number of stpes</bold></h3>
        </div>
        <div style={center}>
          <textarea width="100"  rows="5" />
        </div>
        
        <div style={center, dFlex}>
          	<div>
          		<button style={style, bgGreen} name="btnEarnFitcoins" >Earn Fitcoins</button><br />
          	</div>
        </div>
      </div>
    );
  }
}
const style = {
 margin: 15,
 padding: 50,
 fontSize: "14px",
 minHeight: "40px",
 backgroundColor: "#ff00ccff",
};

const center ={
	textAlign: "center",
	justifyContent: "center",
	alignItems: "center",
};
const bgGreen ={
	backgroundColor: "green",
	fontSize: "16px",
};

const bgBlack ={
	color: "grey",
	fontSize: "16px",
};



const dFlex={
	marginTop:"20px",
	position: "center",
	width: "100%",
	display: "flex",
  justifyContent:"center",
};
export default ManualsTeps;