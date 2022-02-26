
/*
console.log('Hello World')

const http = require('http');

const handler = (request, response) => {
    console.log('sample message');
    response.end('Hello World');
}

const server = http.createServer(handler);
const port = 3000;
server.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`)
})

*/ 

const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const path = require('path')
const functions = require('./functions')

app.set('view engine','hbs')

app.use('/assets', express.static(path.join(__dirname,'./assets')));
app.use('/js', express.static(path.join(__dirname,'./js')));


app.get('/', function (req, res) {
    res.render('index', {
        title: 'Tytuł strony',
        subtitle: 'Podtytuł strony',
    });

});

app.get('/about', function(req,res){
    res.render('about')
})

app.listen(port, (err) => {
    if (err) {
        return console.log(`Błąd ${err}`);
    }
})