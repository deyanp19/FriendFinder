const path = require('path');
const watchesFriendsData = require('../data/friends.js');

//app refers to the express instance made in server.js
module.exports = (app) => { 
  app.get("/api/friends", (req, res) => {
    res.json(watchesFriendsArray );
  });
          
  app.post("/api/friends", (req, res) => {
    // Assign a variable receives the user's form results
    let newPerson = (req.body.scores).map((x) => parseInt(x));
    console.log(newPerson);

    // Get the sum of the array of scores from the user after it has been submitted
    let newPersonScore = newPerson.reduce((acc, current) => acc + current, 0);
    console.log(newPersonScore);

    let totalDifference;
    let lowestTotalDifference;
    let potentialBaller;
    let potentialBallerScore;
    let arrayOfTotalDifferences = [];
    let match = 0;

    for (let i = 0; i < ballersArray.length; i++){
      // Get the sum of the array of the baller being compared to the user
      potentialBaller = (ballersArray[i].scores).map((x) => parseInt(x));
      potentialBallerScore = ballersArray[i].scores.reduce((acc, current) => acc + current, 0);
  
      // Get the positive total difference between the user and baller
      totalDifference = Math.abs(newPersonScore - potentialBallerScore);
      arrayOfTotalDifferences.push(totalDifference);

   /*    if (totalDifference < lowestTotalDifference) {
        lowestTotalDifference = () => { return totalDifference};
        indexOfMatch
      } */

   /*    console.log(lowestTotalDifference);
      console.log(indexOfMatch); */
    }
    console.log(arrayOfTotalDifferences);
    
    
    for (let i = 0; i < arrayOfTotalDifferences.length; i++) {
      if (arrayOfTotalDifferences[i] <= arrayOfTotalDifferences[match]) {
        match = i;
      }
    }
    console.log(match);
    console.log("Your Best Baller Friend Match is: ", ballersArray[match]);

    ballersArray.push(req.body);
    res.json(ballersArray[match]);
  });
  
};