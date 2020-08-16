const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=e7156a5755c35521fce13aa751142bf7&query=37.8267,%20-122.4233'


request({url: url}, (error, response)=>{
    const data = JSON.parse(response.body)
    console.log(data.current)
})