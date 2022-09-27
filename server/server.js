const express = require('express');

const app = express();

// make files in the server/public folder
// available to anyone who wants them
app.use(express.static('./server/public'));

app.listen(3000, () => {
    console.log('we are live!');
});

console.log('in server.js');