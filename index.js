//document.querySelector("button").addEventListener("click", Handliclick);

for (var i = 0; i <= 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var audio = new Audio("./sounds/O Bedardeya.mp3");
    audio.play();
  });
}
