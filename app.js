const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



// function readFromUser() {
//     console.log('Enter the location: ');
//     process.stdin.on('readable', () => {
//         let typed = process.stdin.read();//read what is typed

//         //trying to read
//         typed = typed.toString().replace(/\n/, "");
//         typed = typed.replace(/\r/, "");

//         return typed;
//     });
// }

const typedAddress = process.argv[2]

if (!typedAddress) {
    console.log('Please, provide some address')
} else {
    geocode(typedAddress, (error, data) => {

        if (error) {
            //uso o return pra parar a execução da função se der erro
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
}





