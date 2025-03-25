// Content script for the extension
// This script runs on web pages that match the patterns specified in the manifest

console.log("Content script loaded");

// Example: Listen for messages from the background script or popup
// eslint-disable-next-line @typescript-eslint/no-unused-vars
chrome.runtime.onMessage.addListener((message, _sender, _sendResponse) => {
  console.log("Message received:", message);
  // Add your message handling logic here
});
