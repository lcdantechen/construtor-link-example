var inquirer = require('inquirer');
var teamScore = 0;
var sumOffensive = 0;
var sumDeffensive = 0;
var count = 0;
var playerArray = [];

function Player(options) {
	this.name = options.name;
	this.position = options.position;
	this.offense = options.offense;
	this.defense = options.defense;
	this.goodGame = function () {	

   flipThatCoin1(1);
   console.log("Good Game");


	};
	this.badGame = function () {

		flipThatCoin2(1);
		console.log("Bad Game");

	};
	this.printStatus =  function () {
		 console.log("Name: " + this.name + "\nPosition: " + this.position + "\nOffensePoint: " + this.offense + "\nDffensePoint: " + this.defense);
     console.log("---------------");

	};

}

var createPlays = function() {
	if (count<3) {
		console.log("new player");
		inquirer.prompt([{
       name : "name",
       message: "Name for your player"
    }, {
    	 name : "position",
    	 message : "Player position"
    }, {
    	
    	 message : "Offense Value Set between 1 to 10",
    	 name: "offense",
    	 default: "1"

    	 
    }, {
    
    	 message : "Deffense Value Set betweeen 1 to 10",
    	 name : "defense",
    	 default: "1"
    	
    }]).then(function(answers){
    	  var newPlayer = new Player({
    	  	 name : answers.name,
    	  	 position : answers.position,
    	  	 offense : answers.offense,
    	  	 defense : answers.defense
    	  })
    	  playerArray.push(newPlayer);

    	  count++;
    	  createPlays();
		})

	} else {
		 for (var x = 0; x < playerArray.length; x++) {
		 	  playerArray[x].printStatus();
		 	  /*console.log(playerArray);*/
		 	  
		 }
	sumOffensive = sumOffensive + playerArray[x].offense;
  sumDeffensive = sumDeffensive + playerArray[x].defense;
	playGame(); 
	}
}

createPlays();

var playGame = function() {

	if (count<10) {
		var randomNumber1 = Math.floor(Math.random() * 50);
	  var randomNumber2 = Math.floor(Math.random() * 50);
    if (randomNumber1 < sumOffensive) {
    	teamScore = teamScore + 1;
    };
    if (randomNumber2 > sumDeffensive) {
    	teamScore = teamScore - 1;
    };
		count++;
	}

	if (teamScore > 0) {
    playerArray[x].goodGame();
	} else if (teamScore < 0) {
		playerArray[x].badGame();
	} else (
		console("Tie game!")
 
	)

};

function flipThatCoin1(result) {
	 var randomNumber = Math.floor(Math.random() * 2);
	 if (result === randomNumber) {
	 	playerArray[x].offense++,
    console.log(playerArray[x].offense) 
  } else {  
  	playerArray[x].deffense++
  }

};

function flipThatCoin2(result) {
	 var randomNumber = Math.floor(Math.random() * 2);
	 if (result === randomNumber) {
	 	playerArray[x].offense--
    console.log(playerArray[x].offense) 
  } else { 
    	playerArray[x].deffense--
  }

};

















