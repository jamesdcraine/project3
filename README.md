# FitnessFighter

## Overview of full intended application
FitnessFighter seamlessly syncs with the users smartwatch's stepcounter to earn the user "fitcoins" that can be used to purchase battle powerups, creature appearance modifications, and custom user-determined application customizations. Users can battle other users to win coins. Advanced versions hope to feature user chat, the capability of forming fighter dojos, sponsored tournaments, and links to extensive merchandise.

## minimum viable product
we intend to have an app that you log into, the user is authenticated, and then taken to a screen with their creature and current fitcoin coin count. If they've accummulated any coins since last log in, it will briefly appear as a red "+999" (or whatever the number of steps accumlated is) and then add to their total. In this screen there will be 3 options. **Option One** is to seek a battle, clicking on it will match you with someone looking for a battle, take you to a title screen for the battle (Evee vs Charmander99!) and show that X number of coins have been taken from each participant to initate the battle and then the battle happens (a set of fixed graphics, bang! zap! plod!) and the result of the battle is based off 40% player attributes and 60% randomization and then it shows who has earned the coins and then takes you back to the main screen. **Option Two** is to use your coins to powerup your creature, click on a screen, see a bar graph respresentation of your creatures current attributes and choose which you would like to boost, click on it, your bar graph ticks up and coins are subtracted, back to the main screen. **Option Three** is to log out.

## why is it valuable
Gamification and promotion of fitness, incentive for daily engagement and 'tangible' rewards.


----------------------

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Install
Run  : `npm install` 
This would install all the dependenices listed in `package.json`


### Run
Make sure you install yarn locally or globally.
`npm install -g yarn` 

Once in the project directory, you can use yarn to run the project with yarn: 
`yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.


### Install and Run the API Server 
This app works with an API + Authentication Server which can be found here: [https://github.com/mitni455/nodejs-jwt-authentication.git](https://github.com/mitni455/nodejs-jwt-authentication.git)

To get this running, please follow these steps:

`git clone https://github.com/mitni455/nodejs-jwt-authentication.git && cd $_`
`npm install`
`nodemon server.js`

The API server uses Mongo DB, so you will need to [install mongo](https://docs.mongodb.com/manual/installation/) then open another terminal tab and run:
`mongod`


