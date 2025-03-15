const { logevents }= require('./logger')

const errorhandler =  (err, req, res, next) =>{
    logevents(`${err.name}: \t${err.message} \t${req.method} \t${req.url} \t${req.headers.origin}`, 'error.log') // Fixed template literal
    console.log(err.stack)
    
    const status = err.status || 500 //server error
    res.status(status)
    res.json({message: err.message})

}
module.exports = errorhandler // Ensure correct export