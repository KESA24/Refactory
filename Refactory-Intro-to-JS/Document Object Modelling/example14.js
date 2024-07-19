//JavaScript is an interpreted language. it is a scripting language
//A javascript engine in a webbrowser interpretes js
//JS is hosted by html on the front end hence js is a front end language
//Node JS is a backend hosting language for js

var block;
var container;
block = document.createElement("div");
block.innerHTML = "This div was created/inserted using javascript";
container = document.getElementById("container");
container.appendChild(block);

block.style.color = "red";
block.style.border = "1px solid yellow"
block.style.height = "40px"

//Make the above code a function

function creatediv(){
    var block;
    var container;
    block = document.createElement("div");
    block.innerHTML = "This div was created/inserted using  a javascript function";
    container = document.getElementById("container");
    container.appendChild(block);
    
    block.style.color = "red";
    block.style.border = "1px solid blue";
    block.style.height = "40px";
    block.style.marginTop = "20px";
    
}

creatediv();

//Another way of creating/defining functions is ES - Europeaan Standard
//European Computer Manufacturing Association Standard (ECSMAS)  
//ECMAS created the European Standad of Javascript


//This is ES-6 standard for writing functions in JS
// => is an arrow function 
var div1 = () => {    
    var block;
    var container;
    block = document.createElement("div");
    block.innerHTML = "This div was created/inserted using  a javascript using ES6 standards";
    container = document.getElementById("container");
    container.appendChild(block);
    
    
    block.style.color = "red";
    block.style.border = "1px solid purple";
    block.style.height = "40px";
    block.style.marginTop = "20PX";
}

div1();