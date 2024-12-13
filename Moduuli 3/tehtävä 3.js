'use strict';
const names = ['John', 'Paul', 'Jones'];
const ul = document.getElementById('target')
let nameslist = ""
for (let i = 0; i < names.length; i++) {
    nameslist += '<li>' + names[i] + '</li>'
}
ul.innerHTML = nameslist;
