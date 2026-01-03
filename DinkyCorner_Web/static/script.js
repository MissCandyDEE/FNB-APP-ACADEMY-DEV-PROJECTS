// This script connects your HTML to your Python (Flask) backend
async function addToCart(serviceId) {
    try {
        // 1. Sends the request to the Python 'app.py'
        const response = await fetch('/add_to_cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ service_id: serviceId })
        });

        // 2. Receives the updated cart data from Python
        const data = await response.json();
        
        // 3. Updates the 'Total' and 'Count' on your webpage instantly
        document.getElementById('cart-count').innerText = data.cart_count;
        document.getElementById('total-price').innerText = data.total;
        
        // 4. Feedback for a classy user experience
        console.log("Cart updated via Python session.");
    } catch (error) {
        console.error("Connection to Python server failed:", error);
    }
}

function confirmBooking() {
    const total = document.getElementById('total-price').innerText;
    if (total === "0") {
        alert("Please select a service first.");
    } else {
        alert(`Request sent! Total: R${total}. I'll contact you for your Strand/Somerset West/GB booking.`);
    }
}