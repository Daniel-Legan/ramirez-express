const express = require('express');

const app = express();

let comments = [
    'servers are neat',
    'well, they are not that cool',
    'cool story bro'
];

// make files in the server/public folder
// available to anyone who wants them
app.use(express.static('./server/public'));

// app.on('get');
// like an "event handler"
// when Jimmy asks for comments
// http://localhost:3000/comments
// call this function


// "The GET /comments ENDPOINT!"
app.get('/comments', (req, res) => {
    console.log('Jimmy wants those comments!');

    res.send(comments);
});

// "The GET /comments/first ENDPOINT!"
app.get('/comments/first', (req, res) => {
    console.log('in /comments/first');

    res.send(comments[0]);
});

app.listen(3000, () => {
    console.log('we are live!');
});

console.log('in server.js');