fetch('https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=0580dd34c41f5bf35df84fbe5d9a7a38&units=metric').then(res => {
    return res.json()
})
    .then(data => {
        console.log(data)
        console.log(data.weather)
        for (let item of data.weather) {
            console.log(item.description)
        }

        const container = document.getElementById('container')
        console.log(container.innerText += ' ' + data.wind.speed)

        const humidity = document.getElementById('humidity')
        console.log(humidity.innerText += ' ' + data.main.humidity)

        const pressure = document.getElementById('pressure')
        console.log(pressure.innerText += ' ' + data.main.pressure)

        const temp_min = document.getElementById('temp_min')
        console.log(temp_min.innerText += ' ' + data.main.temp_min)

        const feels_like = document.getElementById('feels_like')
        console.log(feels_like.innerText += ' ' + data.main.feels_like)
        //console.log(data.wind.speed)
        //console.log(data.main.humidity)

    })

    //executed->jooksutab,
    //evaluated->jooksutab,
    //expression->lause,koodijupp, Koodijupp, millel on mingi väärtus
    //optional->valikuline
    //omitted->ärajäetud
    //execution
    //increment->? + 1 pluss üks
    //Generally->üldiselt
    //Statement->(Koodijupp)
    //resolve->Lahendamine, otsustamine, see lahendub
    //counter->Lugemine: Numbrite lugemine
