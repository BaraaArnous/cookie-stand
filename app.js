 'use strict'
 



 const workingHours = ['6am','7am','8am','9am','10am','11am','12am','1am','2am','3am','4am','5am','6am','7am',];

function random (min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}
let shopsArray = [];
function shop (locationName, minCustomers,maxCustomer,avgcookies){
this.locationName = locationName;
this.minCustomers = minCustomers;
this.maxCustomer  = maxCustomer;
this.avgcookies   = avgcookies;

this.customersEachHour = [];

this.cookiesEachHours = [];

this.totalcookiesperday = 0;
shopsArray.push(this);
}

shops.prototype.calcuCustomersEachHour = function (){

    for (let i = 0; i < workingHours.length; i++) (

      this.CustomersEachHour.push(random(this.mincustomers,this.maxCustomers));
    )
}

shops.prototype.calcCookiesEachHours = function() {
for (let i = 0; i < workingHour.length i++ ){
    this.cookieEachHours.push(Math.floor(this.avgCookies * this.
        customersEachHour[i]));
        this.total += this.cookiesEachHours[i];   
}
this.totalcookiesperDay+=this.cookiesEachHours[i];

}

let seattle= new shops('seattle',23,65,6.3);
let tokyo= new shops('tokyo',3,24,1.2);
let dubai = new shops('Dubai' 11, 38, 3.7);
let lima = new shops ('Lima' 2, 16, 4.6);

console.log(shopsArray);



}
let parent =document.getElementById('results');
console.log(parent);
let tableElement = document.createElement('table');
parent.appendchild(tableElement);

function makeheader(){

let headerRow=document.createElement('tr');
tableElement.appendChild(headerRow);

let firsTh = document.createElement('th');

headerRow.appendChild(firsTh);
firsTh.textcontent = 'Name';

for (let i = 0; i < workingHours.length; i++){

   let thElement = document.createElement('th');
   headerRow.appendChild(theElement); 
   thElement.textcontent = workingHours[i];
}

let lastTh = document.createElement('th');

headerRow.appendChild(lastTh);
lastTh.textcontent = 'Daily location Total';

makeheader();

shops.prototype.render = function(){
let dataRow=document.createElement('tr');
tableElement.appendchild(dataRow);

let nameData = document.createElement('td');
dataRow.appendchild(nameData);
nameData.textContent= this.locathionname;

for (let i = 0; i < workingHours.length; i++) {
let tdElement=document.createElement('td');
dataRaw.appendChild(tdElement);
tdElement.textContent=this.cookiesEachHour[i];


   }
let totalDailyforEachshop = document.createElement('td');
dataRow.appendchild(totalDailyforEachshop);
totalDailyforEachshop.textxontent =this.total
}

for (let i = 0; i <shopsArray.length; i++) {
    shopsArray[i].calcCustomersEachHours();
    shopsArray[i].calcCookiesEachHours();
    shopsArray[i].render();

}

function makeFooter(){
    let footerrow = document.createElement('tr');
    tableElement.appendChild(footerRow);

    let footerTh=document.createElement('th');
    footerRow.appendchild(footerTh);
    footerTh.textcontent = 'Totals';

    let megaTotal=0;
    for (let i = 0; i < workingHours.length; i++) {
        for (let j = 0; j < shopsArray.length; j++) {
            

               totalEachHour += shopsArray[j].cookiesEachHour[i];
        }   magaTotal += totalEachHour;  
            
            let   footerData = document.createElement('td');
            footerRow.appendchild(footerData);
            footerData.textcontent = totalEachHour;
       
    }
    console.log(megaTotal);

    let finalTd=document.createElement('td');
}   footerRow.appendchild(finalTd);
    finalTd.textcontent = megaTotal;

makeFooter();