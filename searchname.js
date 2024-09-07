// data.js
fetch('https://limkemhout8989.github.io/fruit_api/fruits.json')
  .then(response => response.json())
  .then(fruits => {
    const path = window.location.pathname;
    const id = path.substring(path.lastIndexOf('/') + 1);

    const fruit = fruits.find(f => f.id == id);
    const result = fruit ? fruit : { error: "Fruit not found" };

    document.body.innerText = JSON.stringify(result, null, 2);
  })
  .catch(error => {
    document.body.innerText = JSON.stringify({ error: "Failed to load data" }, null, 2);
  });
