/* Express router
use multiple routers to manage routing for different path
each router works likle a mini Express application that's focused on routing only
routers can use other middleware through router.use() method  
each router also behaves like a middleware itself, can be used as callback argument for app.use() */

// -------This module will contain the code for handling REST API end points for cmapsites and campsites/campsiteId------//

const express = require('express'); //  we need to require express in this module
const campsiteRouter = express.Router(); // to create a new express router, we will setup variable named 'expressRouter' and assign to it a call to the express.Router() method with no arguments
// this gives us expressRouter object that we can use with express methods

campsiteRouter.route('/')



// we are going to chain these methods since they share same path /campsites.
// Since path is defined above, we will delte '/campsites' below, so that we have callback only
// Below now we have a single statement that handles all the end points for routing

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get((req, res) => {
    res.end('Will send all the campsites to you');
})

.post((req, res) => {
    res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`); // Use backtiks 
})

.put((req, res) => { 
    res.statusCode = 403;   // when operation not supported
    res.end('PUT operation not supported on /campsites');
})

.delete((req, res) => {   // delete operation 
    res.end('Deleting all campsites');
});



module.exports = campsiteRouter;                                          // we exporting expressRouter so it can be used elsewhere