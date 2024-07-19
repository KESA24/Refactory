//Practical use of Lodash 

const _ = require ("lodash");  //Adds Lodash to your js file
//Loops
//Javascript
let log = (text) =>{
    //console.log(text);

};
let i=0;
while (i<4){
    log("foo");
    i += 1;
}
//Lodash
//_.times(4,()=> console.log("foo"));

//Arrays
//Javascript
let nums=[1,2,3,4,5,6,7,8]
let num =nums[3]
console.log(num)

// Lodash.
//console.log(_.nth(nums,3))

//Numbers
//JS sum function.
const vals=[-2,0,3,7,-5,1,2]
const sum=vals[0]+vals[1]+vals[2]+vals[3]+vals[4]+vals[5]+vals[6]
console.log(sum)

//Lodash code
//Lodash sum function.--
let total = _.sum(vals)
console.log(total)


