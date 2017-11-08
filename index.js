const express = require('express')
const app = express()
var request = require('request');

app.get('/addressBalance/:address', (req, res) => {
    request('https://vtc.xchan.gr/addressBalance/' + req.params.address, function (error, response, body) {
        res.send((parseInt(body) / 100000000).toString());
    });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))