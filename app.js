async function fetchFruitByName() {
    // Get the current path (e.g., /fruit_api/Apple)
    const path = window.location.pathname;
    const fruitName = path.split('/').pop(); // Get the last part of the URL (Apple)

    // Fetch the fruits.json file from the GitHub URL
    try {
        const response = await fetch('https://limkemhout8989.github.io/api/fruits.json');
        const fruits = await response.json();

        // Find the fruit by name (case-insensitive comparison)
        const fruit = fruits.find(f => f.name.toLowerCase() === fruitName.toLowerCase());

        // Display the result as JSON
        const result = fruit ? fruit : { error: "Fruit not found" };
        document.getElementById('result').innerText = JSON.stringify(result, null, 2);
    } catch (error) {
        document.getElementById('result').innerText = JSON.stringify({ error: "Failed to load data" }, null, 2);
    }
}

fetchFruitByName();
