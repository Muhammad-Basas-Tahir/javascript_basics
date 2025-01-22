const fetch = require('node-fetch');


fetch("https://jsonplaceholder.typicode.com/posts",{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
    },
    body:JSON.stringify({
        "title": "Learning POST requests",
        "body": "This is an exercise to practice API calls.",
        "userId": 10 })
})
    .then(response => response.json())
    .then(data => console.log('new post', data))
    .catch(error => console.error("Error", error))