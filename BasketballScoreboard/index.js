let scoreLocal = 0
let scoreVisita = 0

let scoreLocalEl = document.getElementById("scoreLocal")
let scoreVisitaEl = document.getElementById("scoreVisita")

function add(team, points) {
    if (team == "local") {
        scoreLocal += points
        if (scoreLocal < 10) {
            scoreLocalEl.textContent = "0" + scoreLocal
        } else {
            scoreLocalEl.textContent = scoreLocal
        }
        return
    }
    if (team == "visita") {
        scoreVisita += points
        if (scoreVisita < 10) {
            scoreVisitaEl.textContent = "0" + scoreVisita
        } else {
            scoreVisitaEl.textContent = scoreVisita
        }
        return
    } else {
        console.log("ERROR: Se ingresaron mal los datos")
    }
}

function restart() {
    scoreLocal = 0
    scoreVisita = 0

    scoreLocalEl.textContent = "00"
    scoreVisitaEl.textContent = "00"
}