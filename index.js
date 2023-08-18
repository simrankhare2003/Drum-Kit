//detect the mouse clicks
for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
 document.querySelectorAll(".drum")[i].addEventListener("click", Click);
 function Click()
  {
    var buttonInnerHTML=this.innerHTML;
    Sound(buttonInnerHTML);
    Animation(buttonInnerHTML);
  }
}

//detect keyboard clicks
document.addEventListener("keydown" , Event);
function Event(event)
{
  Sound(event.key);
  Animation(event.key);
}

//Making sounds
function Sound(key)
{  
  switch(key)
  {
    case "w":
     var audio = new Audio('sounds/crash.mp3');
     audio.play();
     break;
    case "a":
     var audio = new Audio('sounds/kick-bass.mp3');
     audio.play();
     break;
    case "s":
     var audio = new Audio('sounds/snare.mp3');
     audio.play();
     break;
    case "d":
     var audio = new Audio('sounds/tom-1.mp3');
     audio.play();
     break;
    case "j":
     var audio = new Audio('sounds/tom-2.mp3');
     audio.play();
     break;
    case "k":
     var audio = new Audio('sounds/tom-3.mp3');
     audio.play();
     break;
    case "l":
     var audio = new Audio('sounds/tom-4.mp3');
     audio.play();
     break;
    default: console.log(innerHTML);
  }
}

//Animation
function Animation(PressedKey)
{
  var active=document.querySelector("."+PressedKey);
  active.classList.add("pressed");
  setTimeout(PRESSED,100);
  function PRESSED()
  {
    active.classList.remove("pressed");
  }
}
