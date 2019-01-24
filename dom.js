
window.onload = function() {
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");

one.addEventListener('mouseover', function() {
  one.style.backgroundColor = 'blue';
  one.innerText = "Thank you";
});

one.addEventListener('mouseout', function() {
  one.style.backgroundColor = 'red';
});

two.addEventListener('click', function(){
  alert("Welcome!");
});

three.addEventListener('resize', function(){
  three.innerHTML = Math.random();
});

four.addEventListener('click', function(){
  four.innerHTML = "Nice!";
});

five.addEventListener('load', function(){
  alert("Hello");
});

}
