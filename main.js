async function fetchTickets() { // Use async function
    const url = 'https://jsonplaceholder.typicode.com/posts'; // Define API url
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok'); // Check if response is ok and display error
        }
        const tickets = await response.json();
        if (tickets.length === 0) { // Check if the returned tickets array is empty
            throw new Error('No tickets found');
        }
        return tickets; // Return array
    } catch (error) {
        displayError(error.message); // Custom error handling
    }
}

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block'; // Show the error message
}

// Call the fetchTickets function
fetchTickets();
