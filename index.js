var n=document.querySelectorAll(".drum").length;

for(var i=0;i<n;i++)
{ document.querySelectorAll(".drum")[i].addEventListener("click",Playaudio);
  function Playaudio(){
    var HTMLbuttons=this.innerHTML;
makesound(HTMLbuttons);
animation(HTMLbuttons);

  }
}
function makesound(letter)
{
  switch (letter) {
    case "w":
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
      break;
      case "a":
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
      case "s":
      var audio=new Audio('sounds/snare.mp3');
      audio.play();
      break;
      case "d":
      var audio=new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
      case "j":
      var audio=new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
      case "k":
      var audio=new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
      case "l":
      var audio=new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:console.log(HTMLbuttons);
  }
}
document.addEventListener("keydown",words)
function words(events){
// console.log(event.key);
makesound(events.key);
animation(events.key);

}
function animation(currentkey)
{
  var cls=document.querySelector("."+currentkey);
  cls.classList.add("pressed");
  setTimeout(function(){cls.classList.remove("pressed");},200);

}
