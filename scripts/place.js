// select the DOM elements for output

const year = document.querySelector("#currentyear");


// use the date object
const today = new Date();



year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let oLastModif = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<span class="highlight">${oLastModif}</span>`;

//WINDCHILL
function calculateWindChill() {

    let temperature = parseFloat(document.getElementById('currentTemperature').innerHTML)
    let speed = parseFloat(document.getElementById('wind').innerHTML)
    let factor = windChill(temperature, speed)

    if (temperature <= 50 && speed > 3) {
        document.getElementById("currentWindChill").innerHTML = factor + " ºF"
    } else {
        document.getElementById("currentWindChill").innerHTML = "N/A"
    }

}

function windChill(t,s) {
    let f = 35.74 + 0.6215 * t - 35.75 * (s ** 0.16) + 0.4275 * t * (s ** 0.16)
    return Math.round(f)
}

calculateWindChill();