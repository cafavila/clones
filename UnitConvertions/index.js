const convertirBtn = document.getElementById("convertir-btn")
const piesPorMetro = 3.281
const galonesPorLitro = 0.219969
const librasPorKilogramos = 2.20462

let longitud = document.getElementById("longitud")
let volumen = document.getElementById("volumen")
let masa = document.getElementById("masa")
let magnitud = document.getElementById("magnitud").value

getConvertion()
convertirBtn.addEventListener("click", function() {
    console.log("Te llamo")
    magnitud = document.getElementById("magnitud").value
    getConvertion()
})

function getConvertion() {
    console.log("Me llamaron")
    longitud.textContent = `${magnitud} metros = ${(magnitud * piesPorMetro).toFixed(3)} pies | ${magnitud} pies = ${(magnitud / piesPorMetro).toFixed(3)} metros`
    volumen.textContent = `${magnitud} litros = ${(magnitud * galonesPorLitro).toFixed(3)} galones | ${magnitud} galones = ${(magnitud / galonesPorLitro).toFixed(3)} litros`
    masa.textContent = `${magnitud} kilogramos = ${(magnitud * librasPorKilogramos).toFixed(3)} libras | ${magnitud} libras = ${(magnitud / librasPorKilogramos).toFixed(3)} Kilogramos`
}

