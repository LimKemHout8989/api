<script>
        async function fetchFruitById() {
            // Get the ID from the query parameters
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');

            if (!id) {
                document.getElementById('result').innerText = JSON.stringify({ error: "No ID provided" }, null, 2);
                return;
            }

            try {
                // Fetch the JSON data
                const response = await fetch('fruits.json');
                const fruits = await response.json();

                // Find the fruit by ID
                const fruit = fruits.find(f => f.id == id);
                const result = fruit ? fruit : { error: "Fruit not found" };

                // Display the result as JSON
                document.getElementById('result').innerText = JSON.stringify(result, null, 2);
            } catch (error) {
                document.getElementById('result').innerText = JSON.stringify({ error: "Failed to load data" }, null, 2);
            }
        }

        // Call the function to fetch and display data
        fetchFruitById();
    </script>
