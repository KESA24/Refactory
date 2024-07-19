const _ = require("lodash");

//Lodash
_.times(4, () => console.log("foo"));

_.times(4, () => console.log("foo"));

//Lodash methods are called using the _.(underscore, dot and method name) eg _.chunk

var array1 = ["a", "b", "c", "d"];

var array2 = _.chunk(array1, 2); //Chunk method, splits arrays into specified number of divisions
console.log(array2);
var array3 = _.chunk(["a", "b", "c", "d"], 3);
//console.log(array3);

const name = 20;
if (_.isString(name)) {
  //checking type of data, isString method in use
  //console.log(name);
} else {
  //console.log("Not a string");
}

//console.log(_.random(0,5)) //Prints randoms numbers between 0 and 5
