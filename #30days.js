// 22-11-17
//1. Write an algorithm that takes a nested arr and elem as argument and returns
//array that doesnt contain the passed element in the nested array.
//sol

function filteredArray(arr, elem) {
  let newArr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) === -1){
        newArr.push(arr[i]);
        }
    }
    return newArr;
}

filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3);

//2. Reversing strings
function reverseString(str) {
    //var str = str.split('').reverse().join()
            //OR
    var str = str.split('');
    var newstr = [];
    for (var i in str) {
        newstr.unshift(str[i]);
    }
    return newstr.join('');
}

reverseString("hello");

//Note : using a for loop like this (for(var i in str)) in an array or strings
// returns the index no of elements of str BUT in an object, returns the keys/property of such 
// Note: difference btw for(var i in str) and for(var i = 0; i < str.length; i++)
// variable i for the former is in string format ('0','1','2') 
// in the latter in number format. (0,1,2) 


//3 factorial (5! = 5*4*3*2*1 = 120)
function factorialize(num) {
    if (num <= 1) return 1;
    return num * factorialize(num - 1);
}

factorialize(5);


//4. finding the longest word length

function findLongestWordLength(str) {
    var str = str.split(" ");
    var count = 0;
    for (var i in str) {
        if (str[i].length > count) {
            count = str[i].length;
        }
    }
    return count;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


//5. //find the largest numbwe in an arr list return an array 
function largestOfFour(arr) {
    var ar = [];
    var sorted = [];
    for (var i in arr) {
        sorted.push(arr[i].sort((a, b) => {
            return b - a;
        }));

    }
    for (var i in sorted) {
        for (var b in i) {
            if (Math.sign(sorted[i][b]) === 1) {

                ar.push(sorted[i][b]);
            } else if (Math.sign(sorted[i][b]) === -1) {
                var abs = Math.abs(sorted[i][b]);

                ar.push(sorted[i][b]);

            }
        }
    }
    return ar;
}


largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


// 6. confirm ending 
// substring (startindex, [endindex..optional)
function confirmEnding(str, target) {
    var str = str.substring(str.length - target.length);
    if (str === target) {
        return true;
    } else {
        return false;
    }

}

confirmEnding("Congratulation", "on");
function confirmEnding(str, target) {
var str = str.split(" ").pop();
  if(str.lastIndexOf(target) !== -1){
    return true;
  }else{
    return false;
  }

}


// 7 repeat strings

function repeatStringNumTimes(str, num) {
    var newstr = [];
    for (var i = 1; i <= num; i++) {
        newstr.push(str);
    }
    return newstr.join("");
}

repeatStringNumTimes("abc", 4);


// 8 Truncate
function truncateString(str, num) {
    if (str.length > num) {
        return str.substr(0, num) + '...';
    } else if (str.length === num) {
        return str.substr(0, num);
    } else {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);


// 9  first element
function findElement(arr, func) {
    var num = arr.filter(x => x % 2 === 0);
    return num[0];
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });
//OR
function findElement(arr, func) {

    for (var i in arr) {

        if (arr[i] % 2 === 0) {

            return arr[i];

            break;

        }

    }

}


findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; });


// 10. Titlecase letter

function titleCase(str) {
    var str = str.split(" ");
    var newstr = [];
    for (var i in str) {
        newstr.push(str[i][0].toUpperCase() + str[i].slice(1).toLowerCase());
    }
    return newstr.join(" ");
}

titleCase("I'm a little tea pot");


// 11 find the index position of the element in an arr

function getIndexToIns(arr, num) {
    var newa = arr.push(num);
    console.log(arr);
    var ans = arr.sort((a, b) => {
        return a - b;
    });
    return ans.indexOf(num);
}

getIndexToIns([40, 60], 50);



// 12 Return true if the string in the first element of the array 
// contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    var arrT = arr[1].toUpperCase();
    var arrY = arr[0].toUpperCase();
    for (var i = 0; i < arrT.length; i++) {
        if (arrY.indexOf(arrT[i]) === -1) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "Hello"]);


// 13. Break into arrays 
function chunkArrayInGroups(arr, size) {
    // Break it up.
    var group = [];
    while (arr.length) {
        group.push(arr.splice(0, size));
    }
    return group;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

//OR
function chunkArrayInGroups(arr, size) {

    var temp = [];
    var result = [];

    for (var a = 0; a < arr.length; a++) {
        if (a % size !== size - 1)
            temp.push(arr[a]);
        else {
            temp.push(arr[a]);
            result.push(temp);
            temp = [];
        }
    }

    if (temp.length !== 0)
        result.push(temp);
    return result;
}


//13. Count vowels in a word
function getCount(str) {
    var regex = /[aeiou]/ig;
    var ans = str.match(regex);
    var vowelsCount;
    if(ans !== null){
     vowelsCount = ans.length;
    }else{
        vowelsCount = 0; 
    }
    

    return vowelsCount;
}

// 14  sum of the two lowest positive numbers given an array
function sumTwoSmallestNumbers(numbers) {
    var sorted = numbers.sort((a, b) => {
        return a - b;
    });
    var ans = sorted[0] + sorted[1];
    return ans;
};

// 15  function that takes a string and return a new string with all vowels removed.
function disemvowel(str) {
    var regex = /[^aeiou]/ig;
    var ans = str.match(regex);
    return ans.join("");
}

// 16. An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive.  Assume the empty string is an isogram. Ignore letter case.
function isIsogram(word) {
    var newWord = word.toLowerCase().split('').sort().join('');
    for (var i = 0; i < word.length; i++) {
        if (newWord[i] === newWord[i + 1]) {
            return false;
        }
    }
    return true;
}

// 17. Returns a new list with the strings filtered out.
function filter_list(arr) {
    var ans = arr.filter(x => {
        return typeof x === 'number';
    })
    return ans;
}

//18 Write a function, persistence, that takes in a positive parameter num and 
// returns its multiplicative persistence, which is the number of times you must 
// multiply the digits in num until you reach a single digit.
persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
// and 4 has only one digit

persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
// 1*2*6 = 12, and finally 1*2 = 2

persistence(4) === 0 // because 4 is already a one-digit number
function persistence(num) {
    function mul(n) {
        return n.reduce((a, b) => { return a * b; });
    }
    var count = 0;
    while (num.toString().length > 1) {
        num = num.toString().split("");
        num = mul(num);
        count++;
    }
    return count;
}

//or
function persistence(num) {
    var i = 0;
    for (i; num.toString().length > 1; i++) {
        num = num.toString().split('').reduce(function (x, y) { return x * y });
    }
    return i;
}