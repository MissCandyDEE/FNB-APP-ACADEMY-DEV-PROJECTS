// This handles my Pedicure Business Logic
let cart = [];
let total = 0;

function addToCart(serviceName, price) {
    cart.push({ name: serviceName, price: price });
    total += price;
    
    // Update the UI
    document.getElementById('cart-count').innerText = cart.length;
    renderCart();
    
    // Show a classy notification
    console.log(`${serviceName} added to your selection.`);
}

function renderCart() {
    const cartContainer = document.getElementById('items');
    if (!cartContainer) return; // Prevent errors if not on the spa page

    cartContainer.innerHTML = cart.map(item => `
        <div class="cart-item" style="display:flex; justify-content:space-between; padding: 10px 0;">
            <span>${item.name}</span>
            <span>R ${item.price}</span>
        </div>
    `).join('');
    
    document.getElementById('total').innerText = total;
}

function confirmBooking() {
    if (cart.length === 0) {
        alert("Please select a service first.");
        return;
    }
    alert(`Thank you! Your total is R${total}. I will contact you to confirm your appointment in Strand/Somerset West/Gordon's Bay.`);
}