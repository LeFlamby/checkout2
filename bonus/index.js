const whisky = document.querySelector('.whisky');

whisky.addEventListener('click', () => {
  // TODO : Displaying the empty whisky glass when you click on the glass.
  whisky.src = 'image/empty_whisky.png';
  whisky.alt = 'Empty whisky glass';
});

const form = document.querySelector("#form");
const inputName = document.querySelector("#inputName");
const inputToPay = document.querySelector("#toPayInput");
const toPaylist = document.querySelector("#toPaylist");
const bribes = [];
const newTotal = document.querySelector("#newTotal");

document.getElementById("toPayInput").addEventListener('click', () => {   
  form.onsubmit = function (event) {
    event.preventDefault();
 
  const newToPay = document.createElement("li");
  
  newToPay.innerHTML = inputName.value +" "+ inputToPay.value + "$";
  bribes.push(inputToPay.value);
  toPaylist.appendChild(newToPay);
  let bribe = 0 ;
  for (let i=0 ;i<bribes.length; i++){
bribe += parseInt(bribes[i]);
console.log(bribe);
  }
newTotal.innerHTML = "Total" + bribe;

  inputToPay.value = "";
  inputName.value = "";


}});



