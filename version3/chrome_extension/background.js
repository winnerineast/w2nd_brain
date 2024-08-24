// background.js

// Listener for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'analyzeText') {
    const data = {
      text: message.text,
      url: message.url
      // Add other relevant context here if needed
    };

    // Send data to backend (replace with your actual backend endpoint)
    fetch('http://localhost:3000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      // Send the result back to the content script for display
      chrome.tabs.sendMessage(sender.tab.id, {
        action: 'displayResult',
        result: result
      });
    })
    .catch(error => {
      console.error('Error sending data to backend:', error);
      // Handle error (e.g., display an error message to the user)
    });
  }
  // Handle other actions (e.g., 'analyzeUrl') similarly
});