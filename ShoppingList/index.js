import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
//    databaseURL: "https://realtime-database-df319-default-rtdb.europe-west1.firebasedatabase.app/"
    databaseURL: "https://playground-2c4c6-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    cleanInputFieldEl()
    push(shoppingListInDB, inputValue)
})

function cleanInputFieldEl() {
    inputFieldEl.value = ""
}

function cleanShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function appendItemToListShoppingEl(item) {
//    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
    let itemID = item[0]
    let itemValue = item[1]

    const newEl = document.createElement("li")
    newEl.textContent = itemValue
    newEl.addEventListener("click", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        remove(exactLocationOfItemInDB)
    })

    shoppingListEl.append(newEl)
}

onValue(shoppingListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        cleanShoppingListEl()
    
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            // let currentItemId = currentItem[0]
            // let currentItemValue = currentItem[1]
            appendItemToListShoppingEl(currentItem)
        }    
    } else {
        shoppingListEl.innerHTML = "<p>No existen items aqui... aun</p>"
    }
})