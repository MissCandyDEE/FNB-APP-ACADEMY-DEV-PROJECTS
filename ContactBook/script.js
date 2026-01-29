let contacts = JSON.parse(localStorage.getItem('localContacts')) || [
    { name: "FNB App Academy", email: "support@fnb.co.za", phone: "0800-FNB-DEV" }
];

// 1. Session Initialization
window.onload = () => {
    const savedKey = getStoredKey();
    if (savedKey) {
        renderContacts();
        switchView('view-list');
    }
};

function switchView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
    document.getElementById(viewId).classList.add('active-view');
}

function saveKey() {
    const val = document.getElementById('api-input').value;
    if (val.length > 5) {
        persistKey(val);
        renderContacts();
        switchView('view-list');
    } else {
        alert("Security Error: Key too short.");
    }
}

function resetKey() {
    clearKey();
}

function addContact() {
    const name = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const phone = document.getElementById('phone-input').value;

    if (name && email) {
        contacts.push({ name, email, phone });
        localStorage.setItem('localContacts', JSON.stringify(contacts)); // Persist data locally
        renderContacts();
        switchView('view-list');
        // Clear form
        ['name-input', 'email-input', 'phone-input'].forEach(id => document.getElementById(id).value = "");
    }
}

function renderContacts() {
    const list = document.getElementById('contact-list');
    list.innerHTML = contacts.map(c => `
        <div class="contact-item">
            <div>
                <div class="contact-name">${c.name}</div>
                <div class="contact-email">${c.email}</div>
            </div>
            <div class="contact-phone">${c.phone}</div>
        </div>
    `).join('');
}