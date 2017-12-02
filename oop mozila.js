// A defined object ewith  content is called an object literal
// Process of creating an object instance from a class is called instantiation
// inheritance is when a child class adpots functionality from its parent counterpart

// contructor function
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender.toLowerCase();
  this.interests = interests;
  this.bio = function () {
    var g = "";
    if (this.gender === 'male') {
      g = 'He';
    } else { g = 'She'; }
    var ans = "";

    for (var i = 0; i < this.interests.length; i++) {
      if (i === 0) {
        ans = this.interests[0];
      } else if (i < interests.length - 1) {
        ans += ', ' + this.interests[i]
      } else {
        ans += ' and ' + this.interests[i] + '.'
      }
    }

    console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + g + ' likes ' + ans);
  };
}

//var person1 = new Person('Bob', 'Smith', 32, 'MALE', ['music', 'skiing']);
Person.prototype.greeting = function () {
  console.log('Hi! I\'m ' + this.name.first + '.');
};


function Teacher(first, last, age, gender, interests, subjects){
  Person.call(this, first, last, age, gender, interests);
  this.subjects = subjects
};

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

// Teacher.prototype.greeting = function () {
//   var prefix;

//   if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
//     prefix = 'Mr.';
//   } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
//     prefix = 'Mrs.';
//   } else {
//     prefix = 'Mx.';
//   }

//   console.log('Hello. My name is ' + prefix + ' ' + this.name.last + ', and I teach ' + this.subjects + '.');
// }

var teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subjects;
teacher1.greeting();






//      CLASSES







