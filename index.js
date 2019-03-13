const app = require('express')();
const https = require('https');
const fs = require('fs');

const options = {
    cert: fs.readFileSync('ProjectA.crt'),
    key: fs.readFileSync('ProjectA.key')
};
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
});

https.createServer(options, app).listen(port);