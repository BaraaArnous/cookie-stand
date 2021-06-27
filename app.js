
   'use strict'

   console.log(document);

    let parent = document.getElementById('parent');
console.log(parent);


let child-one = document.createElement('p');
    console.log(child-one);


parent.appendChild(child);


child.textContent = 'Hello to my website';


let unOrderedList = document.createElement('ul');
parent.appendChild(unOrderedList);

let location = {

    seattle:0,
    Tokyo:0,
    Dubai:0,
    paris:0,
    Lima:0,

getseattle: function () {
    this.seattle = randomnumber(23,65)+1

   
    }
       

}






console.log (location);
console.log (location.seattle());

function randomnumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min);
}

 getTokyo: function () {
    this.Tokyo = randomnumber(3,24)+1

}


console.log (location);
console.log (location.Tokyo());

function randomnumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min);
}

getDubai: function () {
    this.Dubai = randomnumber(11,38)+1
}

console.log (location);
console.log (location.Dubai());

function randomnumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min);
}


getparis: function () {
    this.paris = randomnumber(20,38)+1
}

console.log (location);
console.log (location.paris());

function randomnumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min);
}

getLima: function () {
    this.Lima = randomnumber(2,16)+1


console.log (location);
console.log (location.Lima());

function randomnumber(min, max){
    return Math.floor(Math.random()*(max - min + 1)+ min);
}

// why the get function is not active is because thw this word not inside the main div let of location i i try but 
// is still desapear ?