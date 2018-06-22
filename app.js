const express = require('express')
const app = express()

var path = __dirname;
console.log(path);
var port = 8080;

app.use(express.static(path));
app.get('*', function(req, res) {
    res.sendFile(path + '/index.html');
});
app.listen(port, () => console.log('Please go to http://localhost:8080'))