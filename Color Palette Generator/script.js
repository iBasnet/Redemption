const refreshBtn = document.querySelector(".btn");
const container = document.querySelector(".container");

const maxPaletteBoxes = 12;

// function to generate a random palette
const generatePalette = () => {
    // clear previous colors
    container.innerHTML = "";

    for (let i = 0; i < maxPaletteBoxes; i++) {
        // generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}" onclick="copyHex(this, '${randomHex}')"></div>      
                           <span class="hex-value">${randomHex}</span>`;
        container.appendChild(color);
    }
}

// generate a random palette when the page loads
window.addEventListener('load', generatePalette);

refreshBtn.addEventListener("click", generatePalette);

function copyHex(colorBox, hex) {
    const hexValue = colorBox.parentElement.querySelector('.hex-value');
    navigator.clipboard.writeText(hex);
    hexValue.innerText = 'COPIED!';
    setTimeout(() => {
        hexValue.innerText = hex;
    }, 1000);
}