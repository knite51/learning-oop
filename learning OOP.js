// 1. Accessing the a nested property using a for loop

let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function countOnline(obj) {
    var count = 0;
    for (let user in obj) {
        if (obj[user].online === true) {
            count++; //note here the a variable passed into
            //a bracket notation is only followed by a dot notation
        }
    }
    return count;
}

console.log(countOnline(users));


//2. set function argument friend to friends property and return array of friend
let user = {
    name: 'Kenneth',
    age: 28,
    data: {
        username: 'kennethCodesAllDay',
        joinDate: 'March 26, 2016',
        organization: 'freeCodeCamp',
        friends: [
            'Sam',
            'Kira',
            'Tomo'
        ],
        location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
        }
    }
};

function addFriend(userObj, friend) {
    var friend = friend;
    userObj.data.friends.push(friend);
    var arrayF = userObj.data.friends;
    return arrayF;
}

console.log(addFriend(user, 'Pete'));

            //OOP PROGRAMING

//1. Constructors are functions that create new objects. 
//They define properties and behaviors that will belong to the new object. example

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

var dodger = new Dog('doger', 'brown');

//instanceof allows you to compare an object to a constructor, returning true or false 
// based on whether or not that object was created with the constructor. 
dodger instanceof Dog //returns true;
//OR
dodger.constructor === Dog; 


class Bird {
    constructor(name) {
        this.name = name;
        this.numLegs = 2;
    }
}

let canary = new Bird("Tweety");
let ownProps = [];

for (let p in canary) {
    if (canary.hasOwnProperty(p)) {
        ownProps.push(p);
    }
}
ownProps //['name','numLegs']

// Use Prototype Properties to Reduce Duplicate Code
//A better way is to use Bird’s prototype.The prototype is an object that is shared among ALL instances of Bird.
// Here's how to add flightCapacity to the Bird prototype:
Bird.prototype.flightCapacity = "300feet";
//Now all instances of Bird have the flightCapacity property.
// Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects.

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];
for (var p in beagle) {
    if (beagle.hasOwnProperty(p)) {
        ownProps.push(p); //['name'] 
        //The output is as a result of the Dog construtor function contains only
        // the name property on declaration and the numLegs was added through the 
        // prototype update which den updates all Dog instances. But the property belongs to the constructor function
    } else {
        prototypeProps.push(p);
    }
}

// To add more property to a constructor create an object element
// Remember to add the constructor property 

function Dog(name) {
    this.name = name;
}
Dog.prototype = {
    constructor: Dog, //*//
    numLegs: 2,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

Dog.prototype.isPrototypeOf(beagle); // return true shows Dog is the prototype of beagle

class Cat {
    constructor(name) {
        this.name = name;
    }
}
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

Cat.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype); //all Dog instances inherits this as well
Cat.prototype.constructor = Cat; //this is done to reset the inherited constructor 
// property back to the original constructor. if not done, Cats instances inherits
// constructor from Animal supertype.
let dodger = new Cat('hate') 
dodger.eat(); // Should print "nom nom nom" 



//adding methods after inheritance
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() {
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
    console.log("woof");
};

let beagle = new Dog();

beagle.eat(); // Should print "nom nom nom"
beagle.bark(); // Should print "Woof!"

//to overwrite an inherited method, create a method for the childobject and
// name it as parentObject method
Dog.prototype.eat =function(){
    console.log("no not hungry");
}
//how JS sees it
//If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on duck’s prototype chain:
//1. beagle => Is eat() defined here ? No.
//2. Dog => Is eat() defined here ? => Yes.Execute it and stop searching.
//3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
//4. Object => JavaScript stopped searching before reaching this level.



// When properties are shared by unrelated Objects, a Mixin is used.

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Add your code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("am gliding");
    };
};

glideMixin(bird);
glideMixin(boat);

bird.glide(); // am gliding
boat.glide();


//Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    };

}

let hen = new Bird();
hen.getWeight(); //15

// immediately invoked function expression or IIFE.
// allow a function to be executed immediately its declared.

(function () {
    console.log("A cozy nest is ready");
})();


//Use an IIFE to Create a Module

let funModule = (function () {
    return {
        isCuteMixin(obj) {
            obj.cute = function () {
                return true;
            };
        },
        singMixin(obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    };
})();
funModule.singMixin(dog); //dog is an instance of a constructor function
dog.sing(); //Singing to an awesome tune

//or i could just create an object
let tryout = {
    isCuteMixin(obj) {
        obj.cute = function () {
            return true;
        };
    },
    singMixin(obj) {
        obj.sing = function () {
            console.log("Singing to an awesome tune");
        };
    }
};
tryout.isCuteMixin(dog);
dog.sing(); //Singing to an awesome tune

//object created with it contents is called an object .literal





class ShoppingCart {
  constructor(){
    this.total = 0;
    this.items = {};
  }
  addItem(itemName, quantity, price){
    this.total += price * quantity;
      if (this.items[itemName] !== undefined){
        this.items[itemName] += quantity;
      }else{
        this.items[itemName] = quantity;
      }
      
    }
  removeItem(itemName,quantity,price){
        this.total -= price * quantity;
         if(this.items.hasOwnProperty(itemName)){
            this.items[itemName] -= quantity;
          }else{
            delete this.items[itemName];
          }
      }
  checkout(cashPaid){
   let balance =  cashPaid - this.total; 
    if(balance >= 0){
      return balance;
    }else{
      balance = "Cash paid not enough";
      return balance;
    }
  }
}

class Shop extends ShoppingCart {
  constructor(){
    super();
    this.quantity = 100;
  }
  removeItem(){
    this.quantity--;
  }
}
    
  