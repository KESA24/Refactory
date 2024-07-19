//Javascrpt code is loaded better when it's in the body or below the body.
//JS in the head tag takes long or does not load in the pages.
const demo = document.getElementById("demo");
demo.style.border = "3px solid purple";

const classDemo = document.getElementsByClassName("demo");
//We have two elements with the same class name, so we have an array and below we access them individually but we can also loop through.
//classDemo[0].style.border = "2px solid orange";
//classDemo[1].style.border = "3px solid orange";

//The loop
for (item = 0; item < classDemo.length; item++) {
  classDemo[item].style.border = "3px solid blue";
}

const demoTag = document.getElementsByTagName("article");
for (item = 0; item < demoTag.length; item++) {
  demoTag[item].style.border = "2px solid red";
}

//Do not forget the dot(.) and hashtag(#) to identif the classes and id
const demoQuery = document.querySelector(".demo-query");
demoQuery.style.border = "2px solid yellow";

//Using For each to access elements.  Do not forget the (.)dot to access a class.
const demoQueryAll = document.querySelectorAll(".demo-query-all");
demoQueryAll.forEach((item) => {
  item.style.border = "2px solid green";
});
