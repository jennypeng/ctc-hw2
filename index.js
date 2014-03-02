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
  $("#task4").click(function() {
 	$("#hipcat").find("img").css("-webkit-filter", "blur(5px) sepia(1)");
 });
  $("span.button:contains('Spin')").click(function() {
  	console.log("efaef")
  	injectCSS();
  	$(".wheel").css("-webkit-animation-name", "spin");
  	$(".wheel").css("-webkit-animation-duration", "4000ms");
  	$(".wheel").css("-webkit-animation-iteration-count", "infinite");
  	$(".wheel").css("-webkit-animation-timing-function", "linear");
  	//document.write("<style type = 'text/css'>@keyframes spin {from {transform:rotate(0deg);}to {transform:rotate(360deg);}}</style>");
  	//document.write("<style type='text/css'>body {background-color:#990000;}</style>");
  });
  function injectCSS() {
  	var head = document.getElementsByTagName("head")[0].innerHTML;
  	var newCSS = head + "<style type = 'text/css'>@keyframes spin {from {transform:rotate(0deg);}to {transform:rotate(360deg);}}</style>";
  	document.getElementsByTagName("head")[0].innerHTML += newCSS;
  };

 //QUESTION 6
});