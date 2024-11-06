'use strict';

let number = Math.floor((Math.random() * 4) + 1);

let house = ""

switch (number) {
    case 1:
        house = "Gryffindor"
        break;
    case 2:
        house = "Slytherin"
        break;
    case 3:
        house = "Ravenclaw"
        break;
    case 4:
        house = "Hufflepuff"
        break;
}


const name = prompt("what is your name?: ");
document.querySelector('#target').innerHTML = 'Congratulations, ' + name +
    '! ' + 'you are a ' + house;