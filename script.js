const messageForm = document.getElementById('messageForm');
const sendMessageButton = document.getElementById('sendMessage');
const searchBarInput = document.getElementById('searchTerm');
const searchButton = document.getElementById('searchButton');

// Add event listeners to the send button and search button
sendMessageButton.addEventListener('click', (e) => {
  e.preventDefault();
  const name = messageForm.name.value;
  const message = messageForm.message.value;
  
  // Ensure that name and message are not empty
  if (name && message) {
    // Send a message to the server here
    console.log(`Message from ${name}: ${message}`);
    messageForm.reset();
  } else {
    console.error("Both name and message fields are required.");
  }
});

// Event listener for Enter key on the search bar input
searchBarInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    searchAlumni(searchBarInput.value);
  }
});

// Function to search for alumni by name
function searchAlumni(name) {
  if (name) {
    // Make a request to the server here
    console.log(`Searching for ${name}...`);
  } else {
    console.error("Search term cannot be empty.");
  }
}

// Add an event listener to the connect button (ensure it exists on the page)
const connectButton = document.getElementById('connectButton');
if (connectButton) {
  connectButton.addEventListener('click', () => {
    // Redirect to alumni profile page here
    console.log("Redirecting to alumni profile...");
    // Example: window.location.href = "profile.html";
  });
} else {
  console.error("Connect button not found.");
}
