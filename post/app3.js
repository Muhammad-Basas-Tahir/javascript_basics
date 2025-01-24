const fetch = require('node-fetch');
const readline = require('readline');

// Create a readline interface to prompt the user for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for user input and validate
function promptUser() {
  rl.question("Enter the post title: ", (title) => {
    rl.question("Enter the post body: ", (body) => {

      // Validate input
      if (!title || !body) {
        console.log("Both title and body are required.");
        rl.close();
        return;
      }

      // Send POST request to JSONPlaceholder API
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 10
        })
      })
      .then(response => response.json())
      .then(data => console.log("New post created:", data))
      .catch(error => console.error("Error:", error))
      .finally(() => rl.close());  // Close the readline interface after the request
    });
  });
}

// Start the input prompt
promptUser();


//a app that prompts for age input and outputs a message
// const { stdin, stdout } = require("process")
// const readline = require("readline")

// const rl = readline.createInterface({
//   input: stdin,
//   output: stdout,
  
// })
// rl.question("plz enter your age", (age) => {console.log(`you are ${age} years old.`);})
