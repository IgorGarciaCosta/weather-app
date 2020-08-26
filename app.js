const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
    //const lat = geocode.latitude
})

forecast(-71.0596, 42.3605, (error, data)=>{
    console.log('Error', error)
    console.log('Data', data)
})