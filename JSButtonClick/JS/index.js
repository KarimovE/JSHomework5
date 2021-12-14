let forRed = document.querySelector(".forRed");
let forGreen = document.querySelector(".forGreen");
let forYellow = document.querySelector(".forYellow");
let forBlue = document.querySelector(".forBlue");
let Red = document.querySelector(".red");
let Green = document.querySelector(".green");
let Yellow = document.querySelector(".yellow");
let Blue = document.querySelector(".blue");

forRed.addEventListener("click", function(){
    Red.style.background="red";
    Green.style.background="white";
    Yellow.style.background="white";
    Blue.style.background="white";
  }) 
forGreen.addEventListener("click", function(){
    Green.style.background="green";
    Red.style.background="white";
    Yellow.style.background="white";
    Blue.style.background="white";
  }) 
forYellow.addEventListener("click", function(){
    Yellow.style.background="yellow";
    Green.style.background="white";
    Red.style.background="white";
    Blue.style.background="white";
  }) 
forBlue.addEventListener("click", function(){
    Blue.style.background="blue";
    Green.style.background="white";
    Yellow.style.background="white";
    Red.style.background="white";
  }) 

 