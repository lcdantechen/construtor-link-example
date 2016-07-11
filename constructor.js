//CONSTRUCTOR WHICH CAN BE USED TO CREATE OBJECTS WITH THE ".raining", ".noise", and ".makeNoise" PROPERTIES//

function Charactor(options) {
    this.name = options.name;
    this.profession = options.profession;
    this.gender = options.gender;
    this.age = options.age;
    this.strength = options.strength;
    this.hitPoints = options.hitPoints;
    this.printStatus = function () {
    	console.log(this.name + "\n" + this.profession + "\n" + this.gender + "\n" + this.age + "\n" + this.strength + "\n" + this.hitPoints)
    }
}
//SETS THE VARIABLES "dogs" AND "cats" TO BE ANIMAL OBJECTS//
var C01 = new Charactor({
	name: "superman", 
	profession: "helping people", 
	gender: 'man',
	age: 100,
	strength: 555,
	hitPoints: 444,

});

var C02 = new Charactor({
	name: "spiderman", 
	profession: "fly", 
	gender: 'man',
	age: 20,
	strength: 55,
	hitPoints: 64,

});


C01.printStatus();
C02.printStatus();

