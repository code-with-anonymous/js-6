
'use strict';
function showNotification(text) {
    Toastify({
      text: text || "Please enter any text !",
      duration: 3000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  }

function clearInput(){
    document.getElementById("input-text").value=""
 }
 function clearOutput(){
    document.getElementById("result").innerHTML=""
 }

 function inputValue ()  {
    return document.getElementById("input-text").value
 }
 const ShowOutput = (output) => {
  document.getElementById("result").innerHTML = "<h3>"+output+"</h3>";
}

 function roundNumber () {
    let number= inputValue()

    if(!number){
        showNotification("Please enter ant floating number !")
        return
    }
   let  RoundNumber =Math.round(number)
   console.log(RoundNumber);
   ShowOutput(RoundNumber)
 }

 function floor () {
    let number= inputValue()

    if(!number){
        showNotification("Please enter ant floating number !")
        return
    }
   let  floorNumber =Math.floor(number)
   console.log(floorNumber);
  ShowOutput(floorNumber)
 }

 function ceil () {
    let number= inputValue()

    if(!number){
        showNotification("Please enter ant floating number !")
        return
    }
   let  ceilNumber =Math.ceil(number)
   console.log(ceilNumber);
   ShowOutput(ceilNumber)
 }
 
 function randomNumber () {
    let random=Math.random()
 ShowOutput(random)
 }

 function dice () {
   let randomDice=(Math.random()*6)+1

   console.log(randomDice)
   randomDice=Math.floor(randomDice)
   console.log(randomDice)
   document.getElementById("result").innerHTML="<h1>"+randomDice+"</h1>" + "<br>" + 
   "Gernerating a random number from 1 to 6"
 }
 function randomString () {
  let length =16
  if(!length){
     showNotification("Please enter any length")
  }
  let randomString =""
  let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';  
  let number = "0123456789"
  let symbols = '!@#$%^&*()-_=+[{]}|;:,<.>/?';
  let possibleString=lowerCaseAlphabet+upperCaseAlphabet+number+symbols
  
  let limit=document.getElementById("input-text").value;
  if(!limit){
    showNotification("Please enter any limit !")
    return
}
  for (let i = 0; i < limit; i++) {
   let randomNumber=Math.random()
   randomString+=possibleString.charAt(Math.floor(randomNumber*possibleString.length))
  }
  console.log(randomString);
  ShowOutput(randomString)
 }


function gst() {
  let cost = document.getElementById("input-text").value;
  cost = Number(cost);
  if(!cost){
    showNotification("Please enter any for tax !")
    return
}
  let taxRate = parseFloat(prompt("Please enter your tax rate"));
  if(!taxRate){
    showNotification("Please enter any for tax rate !")
    return
}
  let tax = cost * (taxRate / 100);
  let totalBill = cost + tax;

  let resultString = "Cost: $" + cost.toFixed(2) + "<br>";
  resultString += "Tax Rate: " + taxRate.toFixed(2) + "%<br>";
  resultString += "Tax: $" + tax.toFixed(2) + "<br>";
  resultString += "Total Bill: $" + totalBill.toFixed(2);

  document.getElementById("result").innerHTML = resultString;
}

function convertToString(){
  let input = document.getElementById("input-text").value;
  if(!input){
    showNotification("Please enter ant floating number !")
    return
}
let number =Number(input)
   ShowOutput(number)
}

function controlLength (){
  let input = document.getElementById("input-text").value;
  input=Number(input)
  if(!input){
    showNotification("Please enter any floating number !")
    return
}
  let length=+prompt("Please enter any length")
  length=Number(length)
if(!length){
  showNotification("Please enter ant to control !")
  return
}
let newNumber=input.toFixed(length)
 ShowOutput(newNumber);
}