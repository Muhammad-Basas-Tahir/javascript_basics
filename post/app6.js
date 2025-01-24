// Create a new post using the POST method
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "My Chained Request", // Title of the new post
    body: "Practicing chained API calls.", // Content of the post
    userId: 5, // User ID associated with the post
  }),
})
  .then(response => response.json()) // Parse the response to JSON
  .then(newPost => {
    console.log("New Post Created:", newPost); // Log the newly created post

    // Now fetch all posts and check for the new post
    return fetch("https://jsonplaceholder.typicode.com/posts");
  })
  .then(response => response.json()) // Parse all posts
  .then(allPosts => {
    // Find the newly created post in the list of all posts
    const lastPost = allPosts.find(post => post.id === newPost.id);
    console.log("Last Post Fetched (from all posts):", lastPost);
  })
  .catch(error => console.error("Error:", error)); // Handle errors
