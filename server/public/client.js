console.log('in client.js');

$(document).ready(onReady);

let comments = []

function onReady() {
    console.log('so ready');

    loadComments();

    $(document).on('click', '#loadFirstComment', loadFirstComment);
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

            // update state!
            // update state from ajax response
            comments = response;

            render();

            console.log('GET /comments', response);
        })
        .catch((err) => {
            // code goes here.....
            console.log('GET /comments err', err);
        });

    console.log('i am not waiting around');
}

function loadFirstComment() {
    console.log('in loadComments');

    $.ajax({
        url: '/comments/first', // route
        method: 'GET'
    })
        .then((response) => {
            // code goes here.....
            $('h1').append(`
                ${response}
            `);
            console.log('GET /comments/first', response);
        })
        .catch((err) => {
            console.log('GET /comments/first err', err);
        });
}

function render() {
    for(let comment of comments) {
        $('body').append(`
            <ul>
                <li>${comment}</li>
            </ul>
        `);
    }
}