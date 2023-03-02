//document.querySelector("button").addEventListener("click",function(){
//  alert("i got clicked");
//});

var numberOfTheDrum = document.querySelectorAll(".drum").length;

var audio0 = new Audio('sounds/crash.mp3');
var audio1 = new Audio('sounds/kick-bass.mp3');
var audio2 = new Audio('sounds/snare.mp3');
var audio3 = new Audio('sounds/tom-1.mp3');
var audio4 = new Audio('sounds/tom-2.mp3');
var audio5 = new Audio('sounds/tom-3.mp3');
var audio6 = new Audio('sounds/tom-4.mp3');

var i = 0;
while(i < numberOfTheDrum){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;

      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
      break;

      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
      break;


      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      break;

      case "j":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;

      case "k":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      break;

      case "l":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
      break;

      default:

    }
  })
  i++;
}

for(var j=0; j < numberOfTheDrum ; j++ ){
  document.querySelectorAll("button")[j].addEventListener("keydown",function(){

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
        break;
      default:

    }

  })
}
