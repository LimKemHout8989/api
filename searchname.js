const express = require('express');
const fruitsData = require('./fruits.json'); // Assuming fruits.json is in the same directory

const app = express();
const port = 3000;

// Endpoint to search fruit by name
app.get('/fruits.json/:name', (req, res) => {
    const fruitName = req.params.name.toLowerCase();
    const fruit = fruitsData.find(fruit => fruit.name.toLowerCase() === fruitName);

    if (!fruit) {
        res.status(404).json({ error: 'Fruit not found' });
    } else {
        res.json(fruit);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
