
const zooData = {
    "lion": { name: "African Lion", info: "Pride management in Savanna sector. Health: 85%.", diet: "Carnivore" },
    "giraffe": { name: "Reticulated Giraffe", info: "Woodlands habitat. High-altitude foliage monitoring.", diet: "Herbivore" },
    "gorilla": { name: "Gorilla Trek", info: "Critically endangered. Silverback leadership tracking.", diet: "Herbivore" },
    "gemsbok": { name: "Gemsbok", info: "Desert plains adaptation. High endurance monitoring.", diet: "Herbivore" },
    "elephant": { name: "Elephant Sanctuary", info: "Intelligence markers: Superior. Social group stable.", diet: "Herbivore" },
    "panda": { name: "Panda Habitat", info: "Temperature controlled. Bamboo supply 100%.", diet: "Omnivore" },
    "dine": { name: "Dine @ The Zoo", info: "Main guest facility. Capacity: 150.", type: "Service" },
    "coffee": { name: "Wild Things Coffee", info: "Retail sector. Operational hours: 08:00 - 17:00.", type: "Service" },
    "weather": { name: "Weather Station", info: "Current: 24°C. Humidity: 45%.", type: "Telemetry" },
    "analysis": { name: "Analytics Report", info: "Statistical population analysis generated via R-Engine.", type: "Data Science" }
};

const nav = document.getElementById('nav');

// This loop builds  sidebar automatically
Object.keys(zooData).forEach(key => {
    const div = document.createElement('div');
    div.className = 'nav-item';
    div.innerText = zooData[key].name;
    
    div.onclick = () => {
        const display = document.getElementById('display-area');
        
        // Check if user clicked on 'Analytics Report' to show the visualization
        let extraContent = "";
        if(key === 'analysis') {
            extraContent = `<div style="margin-top:20px; border: 1px solid var(--gold); padding: 10px; background: #000;">
                                <p style="color:var(--gold); font-size: 0.7rem;">[ EXTERNAL R-PLOT DETECTED ]</p>
                                <img src="zoo_health_analysis.png" alt="Health Analysis Chart" style="width:100%; filter: grayscale(1) sepia(1) hue-rotate(15deg);">
                            </div>`;
        }

        display.innerHTML = `
            <div class="info-card">
                <span class="tag">${zooData[key].type || 'Species'}</span>
                <h1 class="gold-text">${zooData[key].name}</h1>
                <p style="font-size: 1.2rem; line-height: 1.6;">${zooData[key].info}</p>
                ${extraContent}
                <hr style="border: 0; border-top: 1px solid #444; margin: 20px 0;">
                <strong>Log Status:</strong> Verified by ALX Data Engine
            </div>`;
    };
    nav.appendChild(div);
});