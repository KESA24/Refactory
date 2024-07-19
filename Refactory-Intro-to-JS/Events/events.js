var changeText = () => {
  const p = document.querySelector("p"); //Use single quotes in Javascript and double quotes in html.
  p.textContent = "I changed because of an event handler";
};

var eventDemo = () => {
  const p = document.querySelector("p");
  p.textContent = "I change because because of an event listener";
};

const button = document.querySelector('button');
// "eventDemo" is a call back here: A call back is method that is passed to another method as an argument.
button.addEventListener('click' , eventDemo) 