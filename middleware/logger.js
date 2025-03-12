const { format }= require('date-fns')
const { v4: uuid }= require('uuid')
const fs = require('fs')
const fspromises = require('fs').promises
const path = require('path')

const logevents= async (message, logFileName) =>{
    const datetime =  format(currentDateTime, 'yyyy-MM-dd HH:mm:ss');
    const logitem = `${datetime}\t${uuid()}\t$(message)\n`
    try{
        if(!fs.existsSync(path.join(__dirname, '..', 'logs')))
            {
                await fspromises.mkdir(path.join(__dirname, '..', 'logs'))
            }
                await fspromises.appendFile(path.join(__dirname, '..', 'logs', logfilename), logitem)
    }catch(err){
        console.log(err)
    }
}
const logger = (req, res, next) =>{
    logevents(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqlog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}

module.exports = {logevents, logger}
