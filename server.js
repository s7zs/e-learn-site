const express = require('express');
const app = express();
const port =require('portfinder');

const path = require('path');


app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log(`  server running on port ${port}`));
const rootrouter= require('./routers/root.js');
app.use('/', rootrouter);

/*
app.all('*', (req,res) => {
    res.status(404);

    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, '/views', '404.html'));
    }else if(req.accepts('json')){
        res.json({message: "404 NOT FOUND"});
    }else{
        res.type('text').send('404 NOT FOUND');
    }
    
})
    */
app.listen(port, () => console.log(`Server running on port ${port}`));