import React, { Component } from 'react';
import { View, Text, TextField, Button, Image } from 'react';
//import seagreen from './public/images/seagreen.jpg';
class Battleanimation extends React.Component{
constructor(props){
  super(props);
  this.state = {addedordeducted:'deducted', toorfrom:'from', fitcoins:50};
 }
render() {
    return (
      <div style={h100}>
        <div style={dFlex}>
          <div>
            <div style={center}>
              <img src={process.env.PUBLIC_URL +'/images/seagreen.jpg'} height="100" alt="seagreen" />
            </div>
          </div>
          <div style={h100}>
            <div style={centerImage}>
              <img src={process.env.PUBLIC_URL +'/images/fightcloud.jpg'} height="100" alt="fightcloud" />
            </div>
          </div>
          <div style={h100}>
            <div style={bottomImage}>
              <img src={process.env.PUBLIC_URL +'/images/fightcloud.jpg'} height="100" alt="fightcloud" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const h100={
  height:"100%",
  minHeight: "100%",
};
const centerImage={
  height:"100%",
  paddingTop: "50%",
  alignItems: "center",

};

const center={
  height:"100%",
  paddingTop: "0%",
  alignItems: "center",

};
const bottomImage={
  height:"100%",
  paddingTop: "100%",
  alignItems: "center",

};
const style = {
 margin: 15,
 padding: 50,
 backgroundColor: "#ff00ccff",
};




const dFlex={
	marginTop:"20px",
	position: "center",
	width: "100%",
	display: "flex",
  height: "100%",
};
export default Battleanimation;