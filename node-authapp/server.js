const express = require('express');
const cors = require('cors');

const APP_PORT = 4000;

const app = express();
app.use(cors());

app.get('/sayHello', function (req, res) {
    res.send('Hello from the back-end.');
});
app.get('/', function (req, res) {
    res.send();
});

app.listen(APP_PORT);
console.log('Webserver listening to port', APP_PORT);