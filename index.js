let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let listCard = document.querySelector('.listCard');
let quantity = document.querySelector('.quantity'); 

openShopping.addEventListener('click', function() {
body.classList.add('active');
});
closeShopping.addEventListener('click', function() {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Légumes sautés',
        image: '1.PNG',
        price: 6.5
    },
    {
        id: 2,
        name: 'Poulet brasé',
        image: '2.PNG',
        price: 8
    },
    {
        id: 3,
        name: 'Salade manela',
        image: '3.PNG',
        price: 6.5
    },
    {
        id: 4,
        name: 'Velouté Poitiron',
        image: '4.PNG',
        price: 6
    },
    {
        id: 5,
        name: 'Salade thai',
        image: '5.PNG',
        price: 5.5
    },
    {
        id: 6,
        name: 'Pizza Margereta',
        image: '6.PNG',
        price: 7
    }
];

let listCards = [];  
function appInit() {

    products.forEach(function (value , key) {
    list.innerHTML += `
    <div class="dishes"> 
        <img src="./image/${value.image}">
        <div class="diches_name "> ${value.name} </div>
        <div class='price' > ${value.price.toLocaleString('en-US')}€</div>
        <button onclick="addToCard(${key})"> Commander </button>  
    </div>
    `
    })}
    appInit();
    
function addToCard(key){
     if(listCards[key] == null){
        listCards[key] = products[key]
        listCards[key].quantity = 1 ;
     }
     reloadCard();
 }


function reloadCard(){
    let count = 0 ; 
    let totalPrice = 0  ;
  listCard.innerHTML = '' ;

listCards.forEach(function(value , key){ 
  count = count + value.quantity ;
  totalPrice =totalPrice +   value.price;
  if(value != null) {
    let newDiv = document.createElement('li');
    newDiv.innerHTML = `
    <div>

        <img src="./image/${value.image}">
        <div> ${value.name} </div>
        <div> ${value.price.toLocaleString('en-US')}</div>
        
        <button onclick="changeQuantity(${key}, ${value.quantity - 1} )"> -</button> 
        <span> ${value.quantity} </span>
        <button onclick="changeQuantity(${key}, ${value.quantity + 1} )"> +</button>  
      
        </div>
        `
    listCard.appendChild(newDiv)
  }
})
quantity.innerHTML = count 
total.innerHTML = totalPrice

}

function changeQuantity(key , quantity){
    if (quantity == 0){
        delete listCards[key]
    }else {
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
reloadCard()
}






































//  function addToCard(key) {
//     if(listCards[key] == null){
//     listCards[key] = products[key]
//     listCards[key].quantity = 1 

//     } 
//     reloadCard();
// }

// function reloadCard(){
//     listCard.innerHTML = '';
//     let count = 0;
//     let totalPrice = 0;
//     listCards.forEach((value, key)=>{
//         totalPrice = totalPrice + value.price;
//         count = count + value.quantity;
//         if(value != null){
//             let newDiv = document.createElement('li');
//             newDiv.innerHTML = `
//                 <div><img src="image/${value.image}"/></div>
//                 <div>${value.name}</div>
//                 <div>${value.price.toLocaleString('en-US')}</div>
//                 <div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
//                     <div class="count">${value.quantity}</div>
//                     <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
//                 </div>`;
//                 listCard.appendChild(newDiv);
//         }
//     })
//     total.innerText = totalPrice.toLocaleString('en-US');
//     quantity.innerText = count;
// }

// function changeQuantity(key, quantity){
//     if(quantity == 0){
//         delete listCards[key];
//     }else{
//         listCards[key].quantity = quantity;
//         listCards[key].price = quantity * products[key].price;
//     }
//     reloadCard();
// }
