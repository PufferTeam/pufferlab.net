// Set the document title to indicate redirection
let title = "PufferLab - Redirecting...";
document.title = title;

// Retrieve the saved mode (e.g., dark mode or light mode) from localStorage
var mode = localStorage.getItem("savedMode");

// Get the element with the ID "redirect"
let e = document.getElementById("redirect");

// Apply background color based on the saved mode
if (mode == "mode.dark") {
    e.style.backgroundColor = "#0d0d0d"; // Dark mode background
} else {
    e.style.backgroundColor = "#ffffff"; // Light mode background
}

// Extract the base URL (protocol + host) from the current URL
let mainURL = window.location.href.split("/").slice(0, 3).join("/");

// Get the full current URL
let url = window.location.href;

// Extract the page name or path after the base URL
let pageName = url.slice(mainURL.length + 1);

// Construct the new URL with the page name as a query parameter
let pageLink = mainURL + "/?" + pageName;

// Redirect the browser to the constructed URL
window.location.href = pageLink;
