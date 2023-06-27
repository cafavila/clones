import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-2c4c6-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementListDB = ref(database, "endorsementList")

const publicarBtn = document.getElementById("publicar-btn")
const endorsementEl = document.getElementById("endorsement")
const agradeceListEl = document.getElementById("agradeceList")

publicarBtn.addEventListener("click", function() {
    let endorseValue = endorsementEl.value
    cleanTextArea()
    if (endorseValue != "") {
        push(endorsementListDB, endorseValue)
    }
})

function appendItemToListEl(item) {
    const newEndorEl = document.createElement("li")
    newEndorEl.textContent = item
    agradeceListEl.append(newEndorEl)
}

function cleanTextArea() {
    endorsementEl.value = ""
}

onValue(endorsementListDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemArray = Object.values(snapshot.val())
        agradeceListEl.innerHTML = ""
        for (let i=0; i < itemArray.length; i++) {
            appendItemToListEl(itemArray[i])
        }
    } else {
        agradeceListEl.innerHTML = "No has recibido agradecimientos aun!"
    }
})