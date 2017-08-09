

var express = require('express'),
    app = express();


app.use('/css', express.static(__dirname + './js'));
app.use('/js', express.static(__dirname + './css'));
app.use('/data', express.static(__dirname + './data'));
app.use('/images', express.static(__dirname + './images'));


// app.use('/', express.static("./"));
app.use('/', express.static('./')).listen(process.env.PORT || 8080);

// app.listen(process.env.PORT || 8080);
console.log("Listen to port 8080");