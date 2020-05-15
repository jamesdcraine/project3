import React, { Component } from 'react';
import { View, Text, TextField, Button, Image } from 'react';
//import seagreen from './public/images/seagreen.jpg';
class Youlose extends React.Component{
constructor(props){
  super(props);
  this.state = {addedordeducted:'deducted', toorfrom:'from', fitcoins:50};
 }
render() {
    return (
      <div>
        <div style={center}>
          <h2><bold> YOU LOSE!!!</bold></h2>
        </div>
        <div style={dFlex}>
          <div>
            <div style={center}>
              <img src={process.env.PUBLIC_URL +'/images/seagreen.jpg'} height="100" alt="seagreen" />
            </div>
          </div>
          <div style={dBlock}>
            <div style={center}>
            	<img src={process.env.PUBLIC_URL +'/images/gc.jpg'} height="100" alt="gc" />
            </div>
            <div style={center}>
            <bold>{this.state.fitcoins} FitCoins have been {this.state.addedordeducted} {this.state.toorfrom} your account</bold>
            </div>
            <div style={center, dFlex}>
            	<div style={center}>
              		<button style={style, bgBlue} name="btnOk" >OK</button><br />
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
	width: "100%",
	display: "flex",
};
export default Youlose;