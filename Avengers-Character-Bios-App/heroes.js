const heroes = [
    { name: "Iron Man", power: 95, intel: 100, skill: "Engineering", bio: "Genius billionaire who built the Mark series armor." },
    { name: "Captain America", power: 85, intel: 90, skill: "Strategy", bio: "Super-soldier and tactical lead of the Avengers." },
    { name: "Thor", power: 100, intel: 80, skill: "Combat", bio: "God of Thunder with unmatched physical strength." },
    { name: "Black Widow", power: 70, intel: 95, skill: "Espionage", bio: "Master spy specializing in high-risk infiltration." },
    { name: "Hulk", power: 100, intel: 65, skill: "Strength", bio: "Gamma-irradiated scientist with infinite physical power." },
    { name: "Hawkeye", power: 75, intel: 85, skill: "Precision", bio: "World-class marksman with unparalleled accuracy." }
];

function renderDossiers() {
    const grid = document.getElementById('hero-grid');
    grid.innerHTML = heroes.map(h => `
        <div class="hero-card">
            <h2 class="gold-text">${h.name.toUpperCase()}</h2>
            <p class="specialty">${h.skill}</p>
            <div class="bio-text">${h.bio}</div>
            <div class="stat-container">
                <label>POWER LEVEL</label>
                <div class="stat-bar"><div class="stat-fill" style="width: ${h.power}%"></div></div>
                <label>INTELLIGENCE</label>
                <div class="stat-bar"><div class="stat-fill" style="width: ${h.intel}%"></div></div>
            </div>
        </div>
    `).join('');
}

window.onload = renderDossiers;