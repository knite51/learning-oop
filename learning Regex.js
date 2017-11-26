var str = 'abbcdc';
var regex = /b+/g;
console.log(str.match(regex)); // ['bb']

var str = "   Hello, World!  ";
var regex = /\w{5},\s\w{5}!/;
console.log(str.match(regex).join(' '));

var huhText = "This sandwich is good.";
var fixRegex = /(\w+\s\w+\s\w+\s)\w+/; 
var replaceText = "$1okey-dokey"; 
huhText.replace(fixRegex, replaceText); //"This sandwich is okey-dokey."

//to match literal (. or  [] or ()) use the with an escape period \. or \[\] \(\)
//? regex is a mayb
// matching with a OR == (net|com) meaning match net or com
// ? makes .* not a greedy metachar
// \b is word bound
var str = "(42)-42-42";
var regex = /\(?(\d{2})\)-\d+-\d+/g;
console.log(str.match(regex));


var regex = /\d{3}[-.]\d{3}[-.]\d{4}/ //matches 3digits followed by a dash or dot charater ....

var str = "kniteayo@gmail.com"; var str = "knite.ayo@gmail.com";
var regex = /\w+\.?\w+@\w+\.\w+/g; // matches both
console.log(str.match(regex)); 