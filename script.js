var playPause = document.getElementById("playPause");
var timeBox = document.querySelector(".time");
var eye = document.querySelector(".title .eye");
var body = document.querySelector(".body");

var min = 0,sec = 0,mili = 0;
var INTERVAL;
var audio = new Audio("click.mp3");
playPause.addEventListener("click", () => {
  audio.play();
  if (playPause.classList.contains("play")) {
    playPause.classList.remove("play");
    playPause.classList.add("pause");
    eye.classList.add("rotationAnim");
    playPause.innerHTML = "⏸️";
    play();
  } else if (playPause.classList.contains("pause")) {
    playPause.classList.remove("pause");
    playPause.classList.add("play");
    eye.classList.remove("rotationAnim");
    playPause.innerHTML = "▶️";
    pause();
  } else {
    console.warn("Something Is Very Very Wrong");
  }
});

function play() {
  INTERVAL = setInterval(() => {
    mili++;
    if (mili >= 100) {
      mili = 0;
      sec++;
    }
    if (sec >= 60) {
      sec = 0;
      min++;
    }
    timeBox.innerHTML =
      (min > 9 ? min : "0" + min) +
      ":" +
      (sec > 9 ? sec : "0" + sec) +
      ":" +
      (mili > 9 ? mili : "0" + mili);
  }, 10);
}

function pause() {
  clearInterval(INTERVAL);
}
function reset(btn) {
  timeBox.innerHTML = "00:00:00";
  audio.play();
  min = sec = mili = 0;
}
setInterval(() => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  document.documentElement.style.setProperty(
    "--primary-color",
    `rgb(${r}, ${g}, ${b})`
  );
}, 2000);

function add(){
    audio.play();
    var bookmark = document.createElement("div");
    let p = document.createElement("p");
    var delBtn = document.createElement("button");
    delBtn.addEventListener("click",function(){
        let elm =this.parentNode;
        elm.parentNode.removeChild(elm);
        audio.play()
    })
    p.innerHTML = timeBox.innerHTML;
    delBtn.innerHTML="❌"
    bookmark.classList.add("bookmark");

    bookmark.appendChild(p);
    bookmark.appendChild(delBtn);
    bookmarks.appendChild(bookmark);
}
