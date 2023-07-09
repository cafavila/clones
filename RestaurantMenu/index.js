import { menuArray } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const menu = document.getElementById('menu')
let totalPrice = 0

document.addEventListener('click', function(e) {
    if (e.target.id === 'order-btn') {
        document.getElementById('modal').classList.toggle('hidden')
    } else if (e.target.id && e.target.tagName === "BUTTON") {
        if (totalPrice === 0) {
            document.getElementById('order').classList.toggle('hidden')
        }
        if (e.target.id != 'pay-btn') {
            handlerClickButton(e.target.id)
        }
    }
    if (e.target.tagName === 'A') {
        totalPrice -= e.target.dataset.price
        document.getElementById('total-price').textContent = "$ " + totalPrice + ".-"
        e.target.parentNode.parentNode.remove()
        if (totalPrice === 0) {
            document.getElementById('order').classList.toggle('hidden')
        }
    }
})

document.addEventListener('submit', function(e) {
    e.preventDefault()
    handlerPayButton()
})

function handlerPayButton() {
    totalPrice = 0
    document.getElementById('modal').classList.toggle('hidden')
    document.getElementById('order-list').textContent = ""
    document.getElementById('total-price').textContent = "$ " + totalPrice + ".-"
    document.getElementById('order').classList.toggle('hidden')
    document.getElementById('message').classList.toggle('hidden')
    setTimeout(function() {
        document.getElementById('message').classList.toggle('hidden')
    }, 2000)
    cleanPay()
}

function cleanPay() {
    document.getElementById('card-name').value = ''
    document.getElementById('card-number').value = ''
    document.getElementById('card-cvv').value = ''
}

function handlerClickButton(idItem) {
    let index = idItem.lastIndexOf('-') + 1
    index = idItem.substring(index)
    let itemOrder = menuArray.filter(function(item) {
        if (index == item.id) {
            return item
        }
    })[0]
    let liElement = `<li class="li-item" id="${itemOrder.id}">
        <p>
            ${itemOrder.name}
            <a href="#" id="${uuidv4()}" data-price="${itemOrder.price}">remove</a>
        </p>
        <p>${itemOrder.price}</p>
    </li>`
    document.getElementById('order-list').innerHTML += liElement
    totalPrice += itemOrder.price
    document.getElementById('total-price').innerText = "$ " + totalPrice + ".-"
}

function getMenuElementHtml() {
    let menuElement = ''

    menuArray.forEach(function (option) {
        let ingredientsElement = ''
        option.ingredients.forEach(function(ingredient) {
            ingredientsElement += ingredient
            if (ingredient !== option.ingredients[option.ingredients.length - 1]) {
                ingredientsElement += ', '
            }
        })
        menuElement += 
        `<section class="option-element">
            <p class='emoji'>${option.emoji}</p>
            <div class='item-data'>
                <h3 class='item-name'>${option.name}</h3>
                <p class="item-ingredient">${ingredientsElement}</p>
                <p class='item-price'>$${option.price}</p>
            </div>
            <button class="add-btn" id="add-btn-${option.id}">+</button>
        </section>`
    })
    return menuElement
}

function render() {
    menu.innerHTML = getMenuElementHtml()
}

render()