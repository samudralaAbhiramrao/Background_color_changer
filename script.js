var css = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var val = document.querySelector("h3");

// color1.addEventListener("input",function(){
//  css.style.background = "linear-gradient(to right, " + color1 + ", "+ color2 + ")";
//  val.textContent=css.style.background;
// })

// color2.addEventListener("input",function(){
//  css.style.background = "linear-gradient(to right, " + color1 + ", "+ color2 + ")";
//  val.textContent=css.style.background;
// })

//  Above is not optimized , so we are going to write the major functionality in a function and call them

function setval() {
  css.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  val.textContent = css.style.background;
}

color1.addEventListener("input", setval);

color2.addEventListener("input", setval);
