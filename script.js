let left=document.querySelector('.left');
let right=document.querySelector('.right');
let leftright=document.querySelector('.leftright');
let text=document.querySelector('p');
let dbclick=document.querySelector('.dblclick');
let tunnel=document.querySelector('.tunnel');
tunnel.style.display="none";
let Win=document.querySelector('.Win');
Win.style.display="none";
let zombie=document.querySelector('.zombie');
zombie.style.display="none";
let WareHouse=document.querySelector('.WareHouse');
WareHouse.style.display="none";
let Food=document.querySelector('.Food');
Food.style.display="none";
let car=document.querySelector('.car');
car.style.display="none";
// Choice A

left.addEventListener('click',function() {
    leftright.style.display="none";
    left.style.display="none";
    right.style.display="none";
    zombie.style.display="block";
    tunnel.style.display="none";
    text.innerHTML="To fight double click"
});

zombie.addEventListener('dblclick', function(){
    leftright.style.display="none";
    left.style.display="none";
    right.style.display="none";
    zombie.style.display="none";
    tunnel.style.display="block";
    text.innerHTML="That was easy, Double click to keep moving"
});

tunnel.addEventListener('dblclick', function(){
    leftright.style.display="none";
    left.style.display="none";
    right.style.display="none";
    zombie.style.display="none";
    tunnel.style.display="none";
    Win.style.display="block";
    text.innerHTML="Congrats"
});

// choice B

right.addEventListener('click',function() {
    leftright.style.display="none";
    left.style.display="none";
    right.style.display="none";
    WareHouse.style.display="block";
    zombie.style.display="none";
    tunnel.style.display="none";
    Win.style.display="none";
    Food.style.display="none";
    text.innerHTML="Double Click to go left for food"
});

WareHouse.addEventListener('dblclick',function() {
    leftright.style.display="none";
    left.style.display="none";
    right.style.display="none";
    WareHouse.style.display="none";
    zombie.style.display="none";
    tunnel.style.display="none";
    Win.style.display="none";
    Food.style.display="block";
    text.innerHTML="Mouse enter to continue"
});

car.addEventListener('mouseenter',function() {
    leftright.style.display="none";
    left.style.display="none";
    right.style.display="none";
    WareHouse.style.display="none";
    Food.style.display="none";
    Win.style.display="none";
    zombie.style.display="none";
    tunnel.style.display="none";
    car.style.display="block";
   text.innerHTML="double click to leave"

});