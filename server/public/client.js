console.log('in client.js');

$(document).ready(onReady);

function onReady() {
    console.log('so ready');

    loadComments();
}

// get comments (state)
// from the server
function loadComments() {
    console.log('in loadComments');
    // "asynchronous javascript and XML = ajax"
    // can make network requests!
    // (ie. make the modem go "beep beep")
    $.ajax({
        // aka http://localhost:3000/comments
        url: '/comments', // route
        method: 'GET'
    })
        .then((response) => {
            // code goes here.....
            console.log('GET /comments', response);
        })
        .catch((err) => {
            // code goes here.....
            console.log('GET /comments err', err);
        });

    console.log('i am not waiting around');
}
