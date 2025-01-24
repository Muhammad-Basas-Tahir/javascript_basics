// Exercise 3: Handle Errors Gracefully
// Objective: Handle errors during the POST request.
// Instructions:
// Make a POST request to https://jsonplaceholder.typicode.com/posts.
// Introduce an intentional mistake (e.g., misspell the URL) to simulate an error.
// Use .catch() to log a custom error message like Error: Could not create the post.

const fetch = require('node-fetch')


fetch('https://json=placeholder.typicode.com/posts',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        name:'ahmed',
        rollNum:55,
        class:'10B',
    }),
})

    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("you have done an error", error))

