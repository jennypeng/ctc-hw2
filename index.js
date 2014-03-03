$(document).ready(function(){ 
 //INSERT CODE HERE
 
 //QUESTION 1
 // define a Dog class
 function Dog() {

 };
 // add a bark method
 Dog.prototype.bark = function() {
 	return 'woof';
 };
 // define a shibainu class which calls the Dog consructor
 function ShibaInu() {
 	Dog.call(this);
 };
 // inherit Dog
 ShibaInu.prototype = new Dog();
 // correct the constructor pointer
 ShibaInu.prototype.constructor = ShibaInu;
 // make a bark for shibaInu
 ShibaInu.prototype.bark = function() {
 	return 'much wow very javascript'
 };
 //var shiba = new ShibaInu();
 //console.log(shiba.bark());


 //QUESTION 3
 $("span.secondbutton").click(function() {
 	$("h1.secondheading").html("Dogs are the best!"); 
 	$("h1.secondheading").css('color', 'turquoise');
 });

 //QUESTION 4
 $("#task4").click(function() {
 	$("#hipcat").find("img").css("-webkit-filter", "blur(5px) sepia(1)");
 });


 //QUESTION 5
  $("span.button:contains('Spin')").click(function() {
  	$(".wheel").css("-webkit-animation-name", "spin");
  
  });

 //QUESTION 6

 $(".nyancat").css("left", "0");
 $("#nyan").css("position", "relative");
 $(".nyancat").click(function() {
  $(".nyancat").animate({ "left": "+=1000px"}, "500000");
  $(".rainbows").animate({ "width": "100%"}, "5000000");
});
});