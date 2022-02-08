// API Requires
const express = require('express');
const morgan = require('morgan');

const app = express();
const path = require('path');

const ejs = require('ejs');

// settings 
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// routes
app.use(require('./routes/index'));

// static files 
app.use(express.static(path.join(__dirname, 'public')))

// server
app.listen(app.get('port'), () => {
    console.log('listening on port ' + app.get('port'));
})
