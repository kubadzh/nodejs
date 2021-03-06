// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json()); // middleware function

app.use('/campsites', campsiteRouter); // here we priovide route path, so thats why we dont have to specify route in campsiteRouter.js
app.use('/promotions', promotionRouter); 
app.use('/partners', partnerRouter); 

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});