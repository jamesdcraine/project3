import React, { Component } from 'react';
import { View, Text, TextField, Button, Image } from 'react';
//import seagreen from './public/images/seagreen.jpg';
class NewuserWelcomeScreen extends React.Component{
constructor(props){
  super(props);

 }
render() {
    return (
      <div>
        <div style={center}>
          <h3> Welcome donkeylips!</h3>
        </div>
        <div style={center}>
        	<img src={process.env.PUBLIC_URL +'/images/seagreen.jpg'} height="100" alt="seagreen" />
        </div>
        <div style={center}>
        In FitnessFighter you'll earn FitCoins for your daily step count below.
        </div>
        <div style={center, dFlex}>
        	<div style={center}>
          		<button style={style, bgBlack} name="btnSyncSmartwatch" > Sync with your SmartWatch</button><br />
          	</div>
          	<div>
          		<button style={style, bgWhite} name="btnEnterStepsManually" >Enter your steps manually</button><br />
          	</div>
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

const center ={
	textAlign: "center",
	justifyContent: "center",
	alignItems: "center",
};
const bgWhite ={
	backgroundColor: "#ffffffff",
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
};
export default NewuserWelcomeScreen;