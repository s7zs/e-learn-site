const { options } = require('../routers/root')
const allowedOrigin = require('./allowedOrigin')
const { logevents } = require('../middleware/logger') 

const corsOption = {
    origin: function (origin, callback) {
        if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
           
            callback(new Error('Not allowed by CORS'))
        }
    },
    Credentials : true,
    optionsSuccessStatus: 200

}
module.exports = corsOption