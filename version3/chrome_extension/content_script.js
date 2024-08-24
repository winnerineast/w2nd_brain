// content_script.js

// Function to capture selected text
function captureSelectedText() {
  const selection = window.getSelection();
  if (selection && !selection.isCollapsed) {
    const selectedText = selection.toString();
    const url = window.location.href;
    chrome.runtime.sendMessage({
      action: 'analyzeText',
      text: selectedText,
      url: url
    });
  }
}

// Event listener for mouseup (potential text selection)
document.addEventListener('mouseup', captureSelectedText);

// Function to capture URL changes (using webNavigation API)
function captureUrlChange(details) {
  if (details.frameId === 0) { // Main frame only
    chrome.runtime.sendMessage({
      action: 'analyzeUrl',
      url: details.url
    });
  }
}

// Add listener for webNavigation events (if permission is granted)
chrome.webNavigation.onHistoryStateUpdated.addListener(captureUrlChange);

// Other potential monitoring mechanisms (add as needed)
// - DOM monitoring using MutationObserver
// - Key press or scroll event listeners