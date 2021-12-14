let button=document.querySelector(".btn");
let sidebar=document.querySelector(".product-menu");

// sidebar.style.visibility='hidden';

// button.addEventListener("click", function(){
//     sidebar.style.visibility='visible';
//    }) 

sidebar.style.visibility='visible';

button.addEventListener("click", function(){
   sidebar.classList.add("forvisiblity");
  }) 