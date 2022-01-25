const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiY2FsYmFuZXNlMTEiLCJhIjoiY2t5bjdlcnEwMnRycDJycWhteHNiczV3eiJ9.gw8f2nXbqQ3W3eOQmYl1ZQ&limit=1'

    request({ url, json: true }, (error, {body}) => {
        // request returns response which has body. We only ever use body so we destructure response and only select body.
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode