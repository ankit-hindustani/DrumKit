for(var i=0;i<=6;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
      var buttonInnerHtml=this.innerHTML;
      makeSound(buttonInnerHtml);
      animation(buttonInnerHtml);



});
document.querySelectorAll(".drum")[i].addEventListener("keydown",function handlekey(event){
      var buttonInnerHtml=event.key;
      makeSound(buttonInnerHtml);
      animation(buttonInnerHtml);


});

function animation(buttonInnerHtml){
  document.querySelector("."+buttonInnerHtml).classList.add("pressed");
  setTimeout(function(){
    document.querySelector("."+buttonInnerHtml).classList.remove("pressed")},
    100
  );

}


}
function makeSound(buttonInnerHtml){
switch (buttonInnerHtml) {
  case "w":
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
  case "a":
      var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
  case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
  case "d":
          var audio=new Audio("sounds/tom-4.mp3");
          audio.play();
          break;
  case "k":
            var audio=new Audio("sounds/tom-5.mp3");
            audio.play();
            break;
  case "j":
              var audio=new Audio("sounds/tom-6.mp3");
              audio.play();
              break;
  case "l":
                var audio=new Audio("sounds/tom-7.mp3");
                audio.play();
                break;
  default:

}
}
