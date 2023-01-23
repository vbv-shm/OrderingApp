import { menuArray } from "./data.js"
// import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
console.log(menuArray)

const pizzaList=document.getElementById("pizza-list")
const itemsInCart=[{"name":"Pizza","count":0,"totalPrice":0},{"name":"Hamburger","count":0,"totalPrice":0},{"name":"Beer","count":0,"totalPrice":0}]

document.body.addEventListener("click",(e)=>{
    if(e.target.dataset.btn){
        
        menuArray.forEach(function(itemData){
            if(itemData.id==e.target.dataset.btn){
                console.log(e.target.dataset.btn)
                addToOrderList(itemData)
            }
        })
    }
})

function addToOrderList(itemData){
    itemsInCart.forEach(function(data){
        if(data.name==itemData.name){
            data.price=itemData.price
            data.count+=1
            data.totalPrice=data.price*data.count
        }
    })
    console.log(itemsInCart)
    displayCart()
}

function displayCart(){
    const orderedItems=document.getElementById("ordered-items")
    let listDetail=""
    let totalCount=0
    let totalAllPrice=0
    itemsInCart.forEach(function(data){
        if(data.count>0){
            listDetail+=`
                <div class="order-list-cart">
                    <div class="order-item">${data.name}</div>
                    <div class="order-item">${data.count}</div>
                    <div class="order-item">$${data.totalPrice}</div>
                    <div></div>
                </div>
            `
        totalCount+=data.totalPrice
        totalAllPrice+=Number(data.totalPrice)
        }  
    })
    orderedItems.innerHTML=listDetail
    if(totalCount>0){
        document.getElementById("order-cart").style.display="block"
        document.getElementById("total-price").innerText=`$${totalAllPrice}`
    }
    else{
        document.getElementById("order-cart").style.display="none"
    }
}




function render(){
    let listHtml=""
    menuArray.forEach(function (item){
        // let unique_uuid=uuidv4();
        listHtml+=`
        <div class="parent-list" id="list-item-${item.id}">
            <div class="items item-image">${item.emoji}</div>
            <div class="items text-list item-text">
                <div class="items item1">${item.name}</div>
                <div class="items item2">${item.ingredients}</div>
                <div class="items item3">$${item.price}</div>
            </div>
            <button class="items list-add-btn item-gap" data-btn=${item.id}>+</button>
        </div>
    `})
        pizzaList.innerHTML=listHtml

}

render()