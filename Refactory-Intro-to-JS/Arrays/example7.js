function myNum (a,b,c){
    let k = Array (a,b,c);
   
   for(i = 0; i < k.length; i++){
        console.log(k[i]);
    }
    
    
}

myNum(11,12,5);



//An array is a pile of values in one space
//A variable having one or more values
//The size of an array is (n-1), n being the total number of values, the first value is indexed starting from 0;
//Array indexing starts from 0 to 9

for (i = 0; i <= 10; i++){
    console.log(i);
}
for (i = 0; i <= 10; ++i){
    console.log(i);
}

//i +=2 is the same as i=i+2


for (i=0; i <= 10; i+=2){
    let ab = Array();
    ab.push(i);  //Puts something inside an array, push and append does the same thing
    console.log(ab);
}

console.log(ab);

// "let" will make a variable local and "var" will the variable global*/

var myItems = [10,20,13,23,87,65,90,76,56,77,99,100,700];
console.log(myItems.length);
console.log(myItems[12]);

console.log(myItems[8]);
myItems.push(100);
console.log(myItems);
console.log(myItems[10]);
myItems.pop(); //Removes an item from an array like popocorn lol
console.log(myItems);
var subitem = myItems.slice(2, 7); // Get values from position 2 to position 7
console.log(subitem);

myItems.push(700);
console.log(myItems);
console.log(myItems[11]); 
 
for (item = 0; item <= myItems.length; item++){
    if (myItems[item]%2 == 0){
        console.log(myItems[item]);
    }
}

//i=O Initiator
//i<=10 Target
//i++ incremental/loop till the abover target