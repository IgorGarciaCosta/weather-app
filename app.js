const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=e7156a5755c35521fce13aa751142bf7&query=37.8267,%20-122.4233'


// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to Weather Service!')
//     }
//     else if (response.body.error) {
//         console.log('Unable to find location!')
//     }

//     else {
//         console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.feelslike + '% change of rain.')

//     }

// })

//geocoding
//address ->lat/long->weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaWdvcmdjY3MiLCJhIjoiY2tkenhkczFqMXdyaDJybnNrZzV5ZWl3eCJ9.nuXzbRPhZ7Q2aPU2p6qsug&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {//se não tem conexão
        console.log('Unable to connect to Geocoding Service!')
    }
    else if (response.body.features.length === 0) {//se a URL for inválida
        console.log('Unable to find location!')
    }
    else {//se der bom
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }

})