var DigitalPal = function(hungry, sleepy, bored, age){
	this.hungry = hungry;
	this.sleepy = sleepy;
	this.bored = bored;
	this.age = age;
	this.feed = function(){
		if (this.hungry == true) {
			console.log("That was yummy!");
			this.hungry = false;
			this.sleepy = true;
		} else {
			console.log("No thanks! I'm full.")
		}
	}

	this.sleep = function() {
		if (sleepy == true) {
			console.log("Zzzzzzzz");
			this.sleepy = false;
			this.bored =  true;
			increaseAge();
		} else {
			console.log("No way! I'm not tired")
		}
	}
  
  this.play = function() {
  	if (this.bored == true) {
  		console.log("Yay! Let's go play");
  		this.bored = false;
  		this.hungry = true;
  	} else {
  		console.log("Not right now, later?")
  	}
  }

  this.increaseAge = function() {
     this.age = age + 1;
     console.log("I am" + age + "old!")
  }


}

var Dog = new DigitalPal(false, false, true, 0);
Dog.Outside = false;
Dog.Bark = function () {
	console.log("Woof! Woof!")
};
Dog.goOutside = function () {
	if (Outside == false) {
			console.log('Yay! I love the outdoors!');
		  Outside = true;
		  Dog.Bark();
  } else {
	console.log("We are already outside though...")
  }
};

Dog.goInside = function() {
	if (outside == true) {
		console.log("Do we have to? Fine...")
		outside == false;
	} else {
		console.log('I am already inside...')
	}
};

var Cat = new DigitalPal(false, false, true, 0);
Cat.HouseCondition = 100;

Cat.meow = function() {
	console.log('Meow! Meow!')
};
Cat.destroyFurniture = function() {

	if (HouseCondition !== 0) {
			HouseCondition = HouseCondition - 10;
			console.log("Muahahahahah! Take that furniture!")
			bored = false;
			sleepy = true;
	} else {
		console.log("House has been destroyed!")
	}

};

Cat.buyNewFurniture = function() {
	HouseCondition = HouseCondition + 50;
	console.log("Are you sure about that?")
}























