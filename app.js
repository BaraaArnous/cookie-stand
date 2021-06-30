 'use strict'

 arrofobjects = [];
 function kitten (name, interests ,isGoodwithcats,  isGoodwithDogs, isGoodwithkids){
this.name =name;
this.interests = interests;
this.isGoodwithcats =isGoodwithcats;
this.isGoodwithDogs =isGoodwithDogs;
this.isGoodwithkids =isGoodwithkids;
arrofobjects.push(this);

 }

 let losi = new kitten ('losi' , ['napping','eating tona', 'cudding'], false,false,true);

 let koki =new kitten ('koki', ['playing with puupies', 'running','eating mouses' , 'cudling'], true,true,true,false);

 
 let jojo = new kitten ('jojo' , ['eating mouse', 'running', 'playing in balls'], false,true,true);

kitten.prototybe.render=function(){
    this.getAge();

 const parentElement =document.getElementById('kittenprofile')
 const article = document.createElement ('article')
 parentElement.appendchild(article);   
}

let h2 = document.createElement('h2')
article.appendchild(h2);
h2.textxontent = this.name;

let p =document.createElement('p');
article.appendchild(p);
p.textcontent = ${this.name} is funny cat and is ${this.age} old ;
 
const ul = document.createaelement('ul');
article.appendchild(ul);

for (let i = 0; < this.interests.length; i++ )
    let li = document.createElement('li');
    ul.appendchild(li);
    li.textxontent = this.interests[i]


let td1 = docuent.createElement('td');
dataRow.appendchild(td1);
td1.textcontent = this.isGoodwithCats;

let td2 = docuent.createElement('td');
dataRow.appendchild(td2);
td2.textcontent = this.isGoodwithDogs;

let td3 = docuent.createElement('td');
dataRow.appendchild(td3);
td1.textcontent = this.isGoodwithkids;

const kittenform = document.getElementById('kittenform');
 kittenform.addEventListener('submit',handlesubmit);

 function handleSubmit(event){
event.preventDefault();
console.log(event);
const newName =event.target.namefield.value;
console.log(newName);

const newLikes = event.target.likeField.value;
console.log (newLikes)

const withcats = event.target.withcats.checked;
console.log (withcats);

const withDogs = event.target.withDogs.checked;
console.log (withDogs);

const withkids = event.target.withkids.checked;
console.log (withkids);

const newkitten =new kitten(newname,newlikes,withcats,withDogs,withkids);
console.log(newkitten);
newkitten.render()
 }

 for(let i=0 ; i < arrofobjects.length; i++){
     arrofobject[i].render();
 }