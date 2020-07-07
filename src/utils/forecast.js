const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=420773980cf5ee474b64b1630ad51600&query=${latitude},${longitude}&units=f`
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            // pass down error string
            callback('Unable to connect to weather service')
        }
    
        else if (body.error) {
            callback('Unable to find location')
        }

        else {
            callback(undefined, `It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}

module.exports = forecast