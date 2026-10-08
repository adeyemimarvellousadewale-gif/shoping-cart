// alert('working')
let cart = [];
function addItem(){
// let userData = document.getElementById('userInput').value
if (userInput.value.trim() == '') {
alert('input should not be empty')
}else{
cart.push(userInput.value)
console.log(cart);
document.getElementById('userInput').value = ''
displayItems()
}
}
function deleteLastItem(){
  if (cart.length < 1) {
    alert("There's no item to delete")
  } else {
    let sure = confirm("Are you sure you want to delete the last item?")
    if (sure){
       cart.pop()
    displayItems()
    }
  }
}
function deleteAllItem(){
if (cart.length < 1) {
alert("There's no item to delete")
}else{
let check = confirm('Are yopu sure you want to delete')
if (check) {
cart.splice(0, cart.length,)
displayItems()
}
}

}

function displayItems(){
document.getElementById('display').innerHTML = ''
for (let index = 0; index < cart.length; index++) {
const element = cart[index];
document.getElementById("display").innerHTML += `<p >${index + 1}. ${element}</p>`

;
}
}