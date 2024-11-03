// Task 2: Fetch Tickets Using Async/Await and Handle Errors

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
        displayError(error.message); } // Error handling
        finally { // Task 4: Use finally to hide any loading indicators (if present)
    } 
}

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = 'block'; // Show the error message
}

// Call the fetchTickets function
fetchTickets();

// Task 3: Display Tickets Dynamically on the Page

async function fetchAndDisplayTickets() {
    const tickets = await fetchTickets();
    if (tickets) { // Check if tickets were fetched 
        const ticketContainer = document.getElementById('ticket-container');
        tickets.forEach(ticket => {
            const ticketElement = document.createElement('div'); // Create new div for each ticket
           // Display ticket details in the HTML
            ticketElement.innerHTML = `
                <h2>Ticket ID: ${ticket.id}</h2>
                <p><strong>Customer Name:</strong> User ${ticket.userId}</p>
                <p><strong>Issue Description:</strong> ${ticket.title}</p>
                <p><strong>Details:</strong> ${ticket.body}</p> 
            `; 
            ticketContainer.appendChild(ticketElement); // Append the ticketContainer
        });
    }
}

// Call the function to fetch and display tickets
fetchAndDisplayTickets();

