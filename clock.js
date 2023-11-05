let clockDiv = document.getElementById("clock")

setInterval(() => {
    clockDiv.innerText = (new Date ()).toString().split(" ")[4]
}, 1000)