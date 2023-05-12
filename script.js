const frogAnimation = document.querySelector(".frog-animation-img");
const timeOut = 200;
const framesCount = 6;
const buttonStop = document.querySelector(".button-stop");
const buttonStart = document.querySelector(".button-start");

let counter = 0;
let myInterval;

//console.log(frogAnimation);

buttonStart.addEventListener("click", function () {
  myInterval = setInterval(function () {
    //console.log(counter++);
    const frame = (counter++ % framesCount) + 1;
    //console.log(frame);
    frogAnimation.className = "frog-animation-img k" + frame;
    //frogEl.className = `frog frame-${frame}`; вариант через строковые шаблоны
  }, timeOut);
});

buttonStop.addEventListener("click", function () {
  clearInterval(myInterval);
});
