console.log("\nTesting inheritance 👪");
Function.prototype.inherits = function(SuperClass) {
  function Surrogate() {};
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

function MovingObject () {}
MovingObject.prototype.shootingStar = function() { console.log("🌠🚀☄️") }

function Ship () {}
Ship.inherits(MovingObject);
Ship.prototype.blastOff = function() { console.log("🥂🤠🧑‍🚀") }

function Asteroid () {}
Asteroid.inherits(MovingObject);
Asteroid.prototype.flame = function() { console.log("🪨🔥😱") }

let kelsang = new MovingObject();
let apollo = new Ship();
let charles = new Asteroid();

kelsang.shootingStar();
// kelsang.blastOff();      // should not work
// kelsang.flame();         // should not work

apollo.shootingStar();
apollo.blastOff();    
// apollo.flame();         // should not work

charles.shootingStar();
// charles.blastOff();      // should not work
charles.flame();        