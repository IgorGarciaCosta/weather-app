const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e7156a5755c35521fce13aa751142bf7&query=37.8267,%20-122.4233'


request({ url: url, json: true }, (error, response) => {
    //console.log(response.body.current)
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.feelslike + '% change of rain.')
})

