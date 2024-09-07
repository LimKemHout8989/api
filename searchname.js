// JavaScript code to handle API requests and respond with fruit data
async function getFruitById(id) {
  const response = await fetch('fruits.json');
  const fruits = await response.json();
  const fruit = fruits.find(f => f.id === parseInt(id));
  return fruit ? fruit : { message: 'Fruit not found' };
}

// Example usage: log fruit with ID 1
getFruitById(1).then(fruit => console.log(fruit));
