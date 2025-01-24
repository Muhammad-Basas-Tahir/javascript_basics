const fetch = require('node-fetch')

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({
        title: "Node.js Practice",
        body: "Learning how to use .finally() with promises.",
        userId: 1
      }
      )

})

    .then((response) => response.json())
    .then((data) => console.log("Response Data",data))
    .catch((error) => console.error(`Error request failed ${error}`))
    .finally(console.log("Request Completed"))




















    