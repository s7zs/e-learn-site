const express = require('express');
const app = express();
const path = require('path');
const  { logger } = require('./middleware/logger.js')
const port = process.env.PORT || 5500;

app.use(logger)


app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`  server running on port ${port}`));
const rootrouter= require('./routers/root.js');
app.use('/', rootrouter);


    
app.listen(port, () => console.log(`Server running on port ${port}`));

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