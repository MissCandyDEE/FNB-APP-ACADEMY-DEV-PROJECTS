// 🌍 Base URL for your hosted ContactBook API
let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";

// 🔑 Get stored API key from localStorage or redirect to enter-api-key page
let apiKey = checkApiKey();

function checkApiKey() {
    const key = localStorage.getItem("apiKey");

    if (!key) {
        // Redirect user to enter their API key
        window.open("enter-api-key.html", "_self");
    }

    return key;
}