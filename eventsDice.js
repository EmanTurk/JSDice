//First after the user has entered a score target in the input, the window "container moda" will close and now the user will get the play screen.
function closeWindow() {
  var ageInput = document.getElementById("btn1");
  var ageValue = ageInput.value;

  if (ageValue) {
    document.querySelector(".modal-content").style.display = "none";
  } else {
    alert("Please enter a value before starting the game!");
  }
}
//Here to enter a valid value between 80 and 100!
function closeWindow() {
  const ageInput = document.getElementById("btn1");
  const ageValue = parseInt(ageInput.value, 10);

  if (ageValue >= 80 && ageValue <= 100) {
    document.querySelector(".modal-content").style.display = "none";
  } else {
    alert(
      "Please enter a valid value between 80 and 100 before starting the game!"
    );
    ageInput.value = "";
  }
}

// Wrap every letter in a span
const textWrapper = document.querySelector('.welcome .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.welcome .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }).add({
    targets: '.welcome',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
