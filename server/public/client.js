console.log('in client.js');


let comments = []
let firstComment;

$(document).ready(onReady);

function onReady() {
    console.log('so ready');

    loadComments();
    loadFirstComment();

    $('#commentForm').on('submit', onAddComment)
}

function onAddComment(evt) {
    evt.preventDefault();

    let newComment = {
        message: $('#commentInput').val(),
        author: 'Jimmy'
    };

    $.ajax({
        url: '/comments',
        method: 'POST',
        // Always use an object
        // if you know what's good for ya
        //
        // 👇 this becomes req.body
        // on the server
        data: newComment
    })
        .then(response => {
            console.log('POST /comments response', response);

            // Get the latest comments from the server
            // and render them 
            // (including Jimmy's new comment)
            loadComments();
        })
        .catch(err => {
            console.log('POST /comments error', err);
        });
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
            firstComment = response;

            render();

            console.log('GET /comments/first', response);
        })
        .catch((err) => {
            console.log('GET /comments/first err', err);
        });
}

function render() {

    $('#comments').empty();
    for(let cmt of comments) {
        $('#comments').append(`
                <li>${cmt}</li>
        `);
    }

    $('#firstComment').text(firstComment);
}