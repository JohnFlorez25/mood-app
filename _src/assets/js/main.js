'use strict';

const updateMoodEl = document.querySelector('.mood__control--update');
const chooseMoodEl = document.querySelector('.mood__control--choose');
const modeFaceEl = document.querySelector('.mood__face');
const themeEl = document.querySelector('#mood-theme');

// TODO: figure it out this
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function isEven(n) {
  // return true if number is even
  // else return false
  return n%2 === 0;
}

function updateMoodFace() {
  // Assing select value to h1
  modeFaceEl.innerHTML = chooseMoodEl.value;
}

function updateAppTheme() {
  // Generate a randomNumber (max 100) and
  const myRandomNumber = getRandomIntInclusive(0, 100);

  /* if random Number it is even add yellow color
  * else add orange
  */
  if(isEven(myRandomNumber)) {
    themeEl.classList.remove('theme-chilli-orange');
  } else {
    themeEl.classList.add('theme-chilli-orange');
  }
}

function handleUpdateClick(event) {
  // prevent default behaviour of submit inside form
  event.preventDefault();

  // Update face
  updateMoodFace();
  // Update app theme
  updateAppTheme();
}

// listen to click on button
updateMoodEl.addEventListener('click', handleUpdateClick);

