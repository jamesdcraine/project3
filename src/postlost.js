import React, { Component } from 'react';
import { View, Text, TextField, Button, Image } from 'react';
//import seagreen from './public/images/seagreen.jpg';
class Postlost extends React.Component{
constructor(props){
  super(props);
  this.state = {allfitcoins:'945', record:"0-1-0"};
 }
render() {
    return (
      <div>
        <div style={dFlex}>
          <div style={dBlock}>
          	<div>
          		<h2><bold>donkeylips</bold></h2><br />

          	</div>
          	<div style={pt100}>
            </div>
            <div style={center}>
            	<img src={process.env.PUBLIC_URL +'/images/seagreen.jpg'} height="100" alt="seagreen" />
            </div>
            <div style={dFlex}>
            	<div>FitCoin balance:     {this.state.fitcoins} </div>
            	<div> <img src={process.env.PUBLIC_URL +'/images/gc.jpg'} height="30" alt="gc" /></div>
            </div>
          </div>
          <div style={dBlock}>
            <div style={center, dBlock}>
            	<div style={pt100}>
            	</div>
	            <div>
	            	<button style={button}>Battle for FitCoins</button>
	            </div>
	            <div>
	            	<button style={button}>Upgrade your creature</button>
	            </div>
	            <div>
	            	<button style={button}>Logout</button>
	            </div>
	        </div>
          </div>
          <div style={dBlock}>
            <div style={center, dBlock}>
            	<div>
            		<h2><bold>donkeylip's stats</bold></h2>
            		<p> Battle record: {this.state.record}</p>
          		<p> Lifetime FitCoins earned: {this.state.allfitcoins}</p>
            	</div>
	            <div style={dFlex}>
	            	<div style={w100}><bold> STRENGTH</bold></div>
	            	<div><button style={buttonGreen}></button></div>
	            </div>
	            <div style={dFlex}>
	            	<div style={w100}><bold> ENDURANCE</bold></div>
	            	<button style={buttonOrange}></button>
	            </div>
	            <div style={dFlex}>
	            	<div style={w100}><bold> GUILE</bold></div>
	            	<button style={buttonRed}></button>
	            </div>
	            <div style={dFlex}>
	            	<div style={w100}><bold> FRENZY</bold></div>
	            	<button style={buttonPurple}></button>
	            </div>
	        </div>
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

const dBlock ={
  display: "block",
  justifyContent:"spaceBetween",
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

const bgBlue ={
	backgroundColor: "blue",
  color: "white",
	fontSize: "16px",
};



const dFlex={
	marginTop:"20px",
	position: "center",
	paddingLeft: "30px",
	display: "flex",
	
};

const button ={
	backgroundColor: "blue",
	color: "white",
	height: "100px",
	width: "120px",
};

const buttonGreen={
	backgroundColor:"green",
	height: "40px",
	width: "10px",
	border: "none",
};

const buttonOrange={
	backgroundColor:"orange",
	height: "40px",
	width: "10px",
	border: "none",
};
const buttonRed={
	backgroundColor:"red",
	height: "40px",
	width: "10px",
	border: "none",
};
const buttonPurple={
	backgroundColor:"purple",
	height: "40px",
	width: "10px",
	border: "none",
};
const w100 = {
	width: "100px",
};
const pt100 = {
	paddingTop:"100px",
}
export default Postlost;