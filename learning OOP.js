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

//instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor. 
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

// end of file




