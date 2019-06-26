'use strict';
const express = require('express');
const path = require('path');
const app = express();

const uiURL = '/Users/luodina/Desktop/HA/my-project/build';
app.use(express.static(uiURL));
app.use('/api/data', require('./api/data'));
app.use('/any', require('./api/data'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(uiURL, 'index.html'));
});
console.log("listen to port:7000")
app.listen(7000);