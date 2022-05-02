// write js code here corresponding to matches.html

var arrdata = JSON.parse(localStorage.getItem("schedule"))

var favarr = JSON.parse(localStorage.getItem("favourites")) || []


display(arrdata)

document.querySelector("#filterVenue").addEventListener("change", sortbyvenue)

function sortbyvenue() {
    var selected = document.querySelector("#filterVenue").value
    if (selected == "none") {
        window.location.href = "matches.html"
    }
    else {
        var filterdata = arrdata.filter(function (elem) {
            return elem.venue == selected;
        })
        display(filterdata)
    }

}



function display(data) {
    document.querySelector("tbody").innerHTML = ""
    data.forEach(function (elem) {

        var tr = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.matchNum

        var td2 = document.createElement("td")
        td2.innerText = elem.teamA

        var td3 = document.createElement("td")
        td3.innerText = elem.teamB

        var td4 = document.createElement("td")
        td4.innerText = elem.date

        var td5 = document.createElement("td")
        td5.innerText = elem.venue

        var td6 = document.createElement("td")
        td6.innerText = "favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function () {
            favFunction(elem)
        })

        tr.append(td1, td2, td3, td4, td5, td6)
        document.querySelector("tbody").append(tr)
    })

}

function favFunction(elem) {
    favarr.push(elem)
    localStorage.setItem("favourites", JSON.stringify(favarr))
}
