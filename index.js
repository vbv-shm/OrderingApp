import { menuArray } from "./data.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid'
console.log(menuArray)

const pizzaList=document.getElementById("pizza-list")

function render(){
    let listHtml=""
    menuArray.forEach(function (item){
        let unique_uuid=uuidv4();
        listHtml+=`
        <div class="parent-list" id="list-item-${unique_uuid}">
            <div class="items item-image">${item.emoji}</div>
            <div class="items text-list item-text">
                <div class="items individual-item">${item.name}</div>
                <div class="items individual-item">${item.price}</div>
                <div class="items individual-item">${item.ingredients}</div>
            </div>
            <button class="items list-add-btn item-gap">+</button>
        </div>
    `})
        pizzaList.innerHTML=listHtml

}

render()