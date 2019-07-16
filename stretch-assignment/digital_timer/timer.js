let totalMills = 0;
let secTens = document.getElementById('secondTens');
let secOnes= document.getElementById('secondOnes');
let msHund = document.getElementById('msHundreds');
let msTen = document.getElementById('msTens');
let allDigits = document.querySelectorAll('digit');


let timer = setInterval(function() {
  
  totalMills += 10;
  
      secTens.innerHTML = Math.floor(totalMills / 10000);
      secOnes.innerHTML = Math.floor(totalMills % 10000 / 1000);
      msHund.innerHTML = Math.floor(totalMills % 10000 % 1000 / 100);
      msTen.innerHTML = Math.floor(totalMills % 10000 % 1000 % 100 / 10);
  
  if(totalMills > 9999) {
     clearTimeout(timer);
    document.body.style.backgroundColor = "red";
     }

}, 10);
  
  
