var house = {
    door: "",
    roof: "",
    structure: "",
    owner: "",
    noOfRooms: "",
    color: "",
    noOfwindows: "",
    name: function() {            //A function within an object is called a method. #Methods are functions belonging to an object.
        console.log("my house"); //Any line within the function in the object is called a behavior.
}
}

house.door = "glass",
house.roof = "tiled",
house.structure = "bungalow",
house.owner = "Marieh",
house.noOfRooms = 5,
house.color = "white",
house.noOfWindows = 10,

console.log(house.door);

//Any valid object has methods and behaviors

var dog = {
    breed: "",
    color: "",
    height: "",
    eyeColor: "",
    bark: function (){
        console.log("Whoof whoof");
    }
}
    dog.breed = "German Shepherd",
    dog.color ="Brown",
    dog.height ="2.5 inch",
    dog.eyeColor ="Blue",

    console.log(dog.breed);
    dog.bark();

let table = {
    color: "BlueRed",
    type: "Wooden",
    make: " Katanga",
    height: "1.5m",
    locks: "5",
    noOfDrawers: "5",
    capapcity: function(){
        console.log("Accommodates five books");
    }
}

console.log (table.color);
table.capapcity();

//The code below is an example of function being turned into an instance of an object.
function cow(color, breed, name,milkQuantity,owner,size,weight){
    //this. defines a property of an object eg. this.color = color means the value of this.color is the value passed in the instance "color".
    this.color = color;   
    this.breed = breed;
    this.name = name;
    this.milkQuantitiy = milkQuantity;
    this.owner = owner;
    this.size = size;
    this.weight = weight;
    this.cry = function(){
        console.log("Moooooooo");
    }
}

//A constructor is used to give vaule to an instatiated object.
//Therefore a constructor is used to initialise an instatiated object.
var cow1 = new cow("Black","Fresian","Bihogo","8 liters", "Kesa's Ranch", "2meters","700kgs");
console.log(cow1.name);
var cow2 = new cow("white", "Ankole", "Alex", "30liters", "Ssewanyana","4meters", "400kg");
console.log(cow2.owner);
console.log(cow2);
cow2.cry();