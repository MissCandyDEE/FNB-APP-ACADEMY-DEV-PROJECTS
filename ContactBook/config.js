const rootPath = "https://mysite.itvarsity.org/api/ContactBook/";

// Logic to check if the user is already "Logged In"
function getStoredKey() {
    return localStorage.getItem("apiKey");
}

function persistKey(key) {
    localStorage.setItem("apiKey", key);
}

function clearKey() {
    localStorage.removeItem("apiKey");
    location.reload(); // Force refresh to Auth screen
}