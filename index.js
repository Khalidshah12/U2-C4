// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("form").addEventListener("submit", formFun)

var arrdata = JSON.parse(localStorage.getItem("schedule")) || []

function formFun() {
    event.preventDefault()

    var objdata = {
        matchNum: masaiForm.matchNum.value,
        teamA: masaiForm.teamA.value,
        teamB: masaiForm.teamB.value,
        date: masaiForm.date.value,
        venue: masaiForm.venue.value
    }
    var match = document.querySelector("#matchNum").value
    var teamA = document.querySelector("#teamA").value
    var teamB = document.querySelector("#teamB").value
    var date = document.querySelector("#date").value
    var venue = document.querySelector("#venue").value

    if (match == "" || teamA == "" || teamB == "" || date == "" || venue == "none") {
        alert("PLease Fill All the Details")
    }
    else {
        arrdata.push(objdata)
        localStorage.setItem("schedule", JSON.stringify(arrdata))
    }

    document.querySelector("#matchNum").value = ""
    document.querySelector("#teamA").value = "none"
    document.querySelector("#teamB").value = "none"
    document.querySelector("#date").value = ""
    document.querySelector("#venue").value = "none"
}