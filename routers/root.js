const express = require('express')
const router = express.Router()
const path =require('path')
// Define routes for the router
router.get('/', (req, res) => {
    res.send('Welcome to the root route!');
});

router.get('/about', (req, res) => {
    res.send('About page');
});
// Error handling middleware


router.get('^/$|/index(.html)?', (req, res) =>{
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})
module.exports= router