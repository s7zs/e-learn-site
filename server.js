require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();
const path = require('path');
const { logger } = require('./middleware/logger.js'); 
const errorhandler = require('./middleware/Errorhandler.js')
const cookieparser = require('cookie-parser');
const cors = require('cors');
const corseOption = require('./config/corseOption.js'); 
const port = process.env.PORT || 3000;
console.log(process.env.TRY_ENV)
app.use(logger); 
app.use(cors(corseOption));
app.use(cookieparser());
app.use(express.json());
app.use('/', express.static(path.join(__dirname, 'public')));

const rootrouter= require('./routers/root.js');
app.use('/', rootrouter);

app.all('*', (req, res) => {
    res.status(404);

    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, '/views', '404.html'));
    }else if(req.accepts('json')){
        res.json({message: "404 NOT FOUND"});
    }else{
        res.type('text').send('404 NOT FOUND');
    }
    
})
app.use(errorhandler);
app.listen(port, () => console.log(`Server running on port ${port}`));