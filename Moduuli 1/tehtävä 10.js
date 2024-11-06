'use strict';
const dice = parseInt(prompt("what is your amount of dice?: "));
const eyes = parseInt(prompt("what number do you really want?: "));
let success = 0
let what = 100000
for (let what = 0; what < 100000; what++) {
    let sum = 0;

    for (let i = 1; i <= dice; i++) {
        sum += Math.floor(Math.random() * 6) + 1;
    }
    if (sum == eyes) {
        success += 1;
    }
}

let probability = success / what * 100;
let n = probability.toFixed(2)
document.getElementById('target').innerHTML = 'Probability to get sum ' + eyes +
    ' with ' + dice + ' dice is ' + n + '%';