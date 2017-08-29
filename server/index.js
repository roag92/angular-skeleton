const express = require('express');
const path = require('path');
const helmet = require('helmet');
const logger = require('morgan');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let app = express();

const PORT = process.env.PORT || 8080;
const ENV = app.get('env');

app.use(helmet());
app.use(logger(ENV === 'development' ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.disable('x-powered-by');

// My recommendation is add a prefix before to call a routenpm
// to prevent problems with Karma:
// For example:
// app.get('/api/test', (req, res) => {
//     res.json({
//         'result': 'My json result'
//     });
// });

app.get('*', (req, res) => { // Main page
    //Default get request (Angular or React Application)
    res.sendFile(path.resolve(__dirname, '../', 'client/dist', 'index.html'));
});

app.listen(PORT, () => { //Add domain to listen by ip
    console.log(`Server in mode ${ENV} starting in PORT: ${PORT}`);
});

process.on('uncaughtException', (err) => {
    console.log(`Caught exception: ${err}\n${err.stack}`);
});