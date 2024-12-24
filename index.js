/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById("inputEl");
const btnEl = document.getElementById("convert-btn");
const lengthEl = document.getElementById("unitLength");
const volumeEl = document.getElementById("unitVolume");
const massEl = document.getElementById("unitMass");

btnEl.addEventListener("click", function(){
  let lengthM = 0;
  let volumeL = 0;
  let massK = 0;
  let lengthF = 0;
  let volumeG =0;
  let massP=0;
  lengthM+= (inputEl.value*3.281);
  volumeL+=(inputEl.value*0.264);
  massK+=(inputEl.value*2.204);
  lengthF+= (inputEl.value/3.281);
  volumeG+=(inputEl.value/0.264);
  massP+=(inputEl.value/2.204);
  lengthEl.innerText=`${inputEl.value} meters = ${lengthM.toFixed(3)} feet | ${inputEl.value} feet = ${lengthF.toFixed(3)} meters`;

  volumeEl.innerText=`${inputEl.value} liters = ${volumeL.toFixed(3)} gallons | ${inputEl.value} gallons = ${volumeG.toFixed(3)} liters`;

  massEl.innerText=`${inputEl.value} kilos = ${massK.toFixed(3)} pounds | ${inputEl.value} pounds = ${massP.toFixed(3)} kilos`;
  inputEl.value="";
})

