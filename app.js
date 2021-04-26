//console.log(fetch('https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=0580dd34c41f5bf35df84fbe5d9a7a38&units=metric'))

fetch('https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=0580dd34c41f5bf35df84fbe5d9a7a38&units=metric')

    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        const city = document.getElementById('city')
        const weather = document.createElement('div')
        weather_div.innerHTML = '<image src="' + data.message + '">'
        weather_div.classList.add('dog')
        container.append(weather_div)

/*const city = document.getElementById('city').innerText
const main = document.getElementById('main').innerText
const windSpeed = document.getElementById('wind-speed').innerText
const humidity = document.getElementById('humidity').innerText
const pressure = document.getElementById('pressure').innerText
const tempMin = document.getElementById('temp-min').innerText
const feelsLike = document.getElementById('feels-like').innerText

var fileName = './cache_' . toString(city) //. '.json'
var cacheTime = 20

function file_exists() {

}

function file_get_contents() {

}

function fwrite() {

}

function fclose() {

}*/

//if ()
