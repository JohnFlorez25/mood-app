'use strict';

const faceElement = document.querySelector('.face');
const select = document.querySelector('#feeling');
const btn = document.querySelector('.btn');
const background = document.querySelector('.even');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

const showFace = () => {
  if(select.value === "happy") {
    faceElement.innerHTML = ':)';
  } else {
    faceElement.innerHTML = ':(';
  }
  const randomNumber = getRandomIntInclusive(0, 100);
  if(randomNumber%2 === 0) {
    background.classList.add('even');
    background.classList.remove('odd');

  } else {
    background.classList.add('odd');
    background.classList.remove('even');

  }
}

btn.addEventListener('click', showFace);