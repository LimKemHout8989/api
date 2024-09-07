const express = require('express');
const app = express();
const port = 3000;

// Your fruit data
const fruits = 'https://limkemhout8989.github.io/fruit_api/fruits.json';

// API endpoint to get fruit data by ID
app.get('/fruits/:id', (req, res) => {
  const id = parseInt(req.params.id); // Get the ID from the URL params
  const fruit = fruits.find(fruit => fruit.id === id); // Find the fruit with matching ID
  
  if (fruit) {
    res.json(fruit); // Return the fruit data as JSON
  } else {
    res.status(404).json({ error: 'Fruit not found' }); // Return 404 if fruit is not found
  }
});

// Start the server
app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
