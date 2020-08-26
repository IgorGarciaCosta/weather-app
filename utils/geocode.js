const request = require("request")


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaWdvcmdjY3MiLCJhIjoiY2tkenhkczFqMXdyaDJybnNrZzV5ZWl3eCJ9.nuXzbRPhZ7Q2aPU2p6qsug&limit=1'

    request({url:url, json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect to location Services!', undefined)    
        }
        else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })

}

//exporta a função geocode
module.exports = geocode