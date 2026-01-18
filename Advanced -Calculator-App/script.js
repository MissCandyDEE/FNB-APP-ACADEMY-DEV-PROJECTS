// 1. Calculator State Management
let cur = "";
let history = []; // This manages the "State" of previous calculations

function press(v) { 
    cur += v; 
    document.getElementById('display').innerText = cur; 
}

function clr() { 
    cur = ""; 
    document.getElementById('display').innerText = "0"; 
}

function eq() { 
    try { 
        let result = eval(cur).toString(); 
        addToHistory(cur + " = " + result); // Added Logic
        cur = result;
        document.getElementById('display').innerText = cur; 
    } catch { 
        clr(); 
    } 
}

// Enhancement: History Manager
function addToHistory(entry) {
    history.unshift(entry); // Add to start of array
    if (history.length > 5) history.pop(); // Keep only last 5
    renderHistory();
}

function renderHistory() {
    const list = document.getElementById('history-list');
    list.innerHTML = history.map(item => `<li>> ${item}</li>`).join('');
}

// 2. Integrated Module Logic
const modules = {
    scope: () => {
        let localVal = "I am Local";
        return `[VARIABLE SCOPE LOGIC]\nGlobal Scope: Accessible\nLocal Scope: ${localVal}\nStatus: Block-level scoping verified using 'let'.`;
    },
    strings: () => {
        let str = "ALX-Dossier-2024";
        return `[STRING & NUMBER ENGINE]\nInput: ${str}\nLength: ${str.length}\nUppercase: ${str.toUpperCase()}\nParsing: ${parseInt("100") + 50} (String '100' + 50 as Number)`;
    },
    auth: () => {
        let pass = "admin123";
        let valid = pass.length > 5 ? "SECURE" : "WEAK";
        return `[AUTH & PASSWORD LOGIC]\nChecking password: ${pass}\nValidation: ${valid}\nResult: Access Granted via password.html logic.`;
    },
    switch: () => {
        let role = "Analyst";
        let access;
        switch(role) {
            case "Admin": access = "Full"; break;
            case "Analyst": access = "Data Only"; break;
            default: access = "Restricted";
        }
        return `[SWITCH CASE ROUTER]\nUser Role: ${role}\nPermission Level: ${access}\nPath: Routing to ${role} dashboard...`;
    }
};

function runModule(key) {
    const out = document.getElementById('terminal-out');
    const title = document.getElementById('mod-title');
    
    // UI Update
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    // We target the current button clicked via the event
    if(event) event.target.classList.add('active');
    
    if(key === 'calc') {
        out.innerText = "> Calculator Mode Active.";
        title.innerText = "Advanced Calculator";
    } else {
        out.innerText = "> " + modules[key]();
        title.innerText = key.toUpperCase() + " LOGIC MODULE";
    }
}