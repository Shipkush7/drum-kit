
// Detecting Button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click" , handleClick) ;
  function handleClick()
  {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  }
}

// Detecting Keyboard press
document.addEventListener("keypress" , function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w" :
      var tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a" :
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;

    case "s" :
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;

    case "d" :
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;

    case "j" :
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;

    case "k" :
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;

    case "l" :
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;

    default:console.log(buttonInnerHTML);

  }
}


function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
