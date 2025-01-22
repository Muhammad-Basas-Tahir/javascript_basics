
const fetch = require('node-fetch');

fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json',
    },
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        id:1,
    }),

})
    .then(response => response.json())
    .then(data => console.log('created',data))
    .catch(error => console.error('Error : ', error))