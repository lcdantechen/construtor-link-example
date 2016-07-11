function Programmer(options) {
	this.name = options.name;
	this.position = options.position;
	this.old = options.old;
	this.favorite = options.favorite;
	this.print = function () {
		console.log(this.name + "\n" + this.postion + "\n" + this.old + "\n" + this.favorite);
	}
}

var hotProgram = new Programmer({
   name:"JS",
   postion:"Developer",
   old:"many years",
   favorite:"node",

})

hotProgram.print();