const secretLibrary = {
    wisdom: `
        <p class="tag">Ancient Sovereignty</p>
        <h3>Stoicism & The Tao</h3>
        <p><strong>Stoicism:</strong> Master your internal state. Marcus Aurelius taught that while we cannot control the storm, we can control the ship. Realize you have power over your mind, not outside events.</p>
        <p><strong>The Tao (The Way):</strong> Following 'Wu Wei' or effortless action. Like water, which is the softest substance yet can wear away the hardest rock. Alignment over struggle.</p>
    `,
    energy: `
        <p class="tag">Life Force Activation</p>
        <h3>Meditation & The Avatar State</h3>
        <p><strong>The Pineal Gaze:</strong> In deep 'Shambhavi Mahamudra' (the state you see in Avatar), the eyes naturally roll upward toward the Third Eye. This signals the brain to move into Gamma waves, clearing spiritual blockages and activating the Pineal gland.</p>
        <p><strong>Chakra Alignment:</strong> Life force energy (Kundalini) sits at the base of the spine. Through specific Mudras and breathwork, you pull this energy up through the 7 gates to achieve total clarity.</p>
    `,
    womb: `
        <p class="tag">Divine Feminine</p>
        <h3>Yoni & Womb Care</h3>
        <p><strong>The Ritual of Steaming:</strong> Known as 'Bajos' or Yoni Steaming. Using ancient herbs like Mugwort and Rosemary across Africa and Central America to detoxify the womb and release ancestral trauma.</p>
        <p><strong>Womb Breathing:</strong> Honoring the womb as the 'Second Heart'. Practices include womb-breathing and lunar alignment to restore creative power.</p>
    `,
    fitness: `
        <p class="tag">Sacred Geometry in Motion</p>
        <h3>Functional Ancestral Fitness</h3>
        <p><strong>Primal Flow:</strong> Exercise should not be mechanical. Move like the elements. Deep squats to ground with the Earth, spinal waves to move like Water. This keeps the 'meridians' (energy channels) open.</p>
    `,
    apothecary: `
        <p class="tag">African Skincare Secrets</p>
        <h3>Natural Healing & Glow</h3>
        <p><strong>Qasil (Somalia):</strong> The leaf of the Gob tree. Somali women have used this for centuries as a soap and detoxifier. It is a natural powerhouse for clear, glowing skin.</p>
        <p><strong>Shea & Baobab:</strong> The 'Tree of Life' provides oils that feed the cells. Real beauty is an inside-out process of minerals and alignment.</p>
    `,
    dreams: `
        <p class="tag">The Night Oracle</p>
        <h3>Dream Decoder</h3>
        <p>Select the tool below to interpret the symbols of your journey. Dreams are the blueprint for your physical reality.</p>
    `
};

function showContent(section) {
    const box = document.getElementById('content-box');
    const tool = document.getElementById('dream-tool');
    const title = document.getElementById('title');
    
    tool.style.display = (section === 'dreams') ? 'block' : 'none';
    box.innerHTML = secretLibrary[section];
    title.innerText = section.replace('_', ' ').toUpperCase();
}

function checkDream() {
    const input = document.getElementById('user-dream').value.toLowerCase();
    const box = document.getElementById('content-box');
    let response = "<strong>Interpretation:</strong> The symbols are veiled. Meditate on the core feeling of the vision.";
    
    if(input.includes("water")) response = "<strong>Interpretation:</strong> Ancestral flow. Clear water is a blessing; muddy water suggests a need for spiritual cleansing.";
    if(input.includes("snake")) response = "<strong>Interpretation:</strong> Transformation. The serpent signifies Kundalini rising or shedding an old version of yourself.";
    if(input.includes("fly")) response = "<strong>Interpretation:</strong> Astral travel. Your spirit is reclaiming its sovereignty and breaking free from limits.";
    
    box.innerHTML = `<div class="result-box">${response}</div>`;
}

window.onload = () => showContent('wisdom');