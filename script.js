// script.js

const displayArea = document.getElementById("display-area");

const code = `
I Love D.H.R
24 hours open

Tourist attraction
27Q7+88M, Limbugaon, Darjeeling, West Bengal 734101, India
Darjeeling West Bengal

Access granted till 30th june. Enjoy GAURAV_KARBON_BLACK_CREATOR_7
`;

let currentIndex = 0;

function typeNextCharacter() {
  if (currentIndex < code.length) {
    displayArea.textContent += code[currentIndex];
    currentIndex++;
    displayArea.scrollTop = displayArea.scrollHeight; // Auto-scroll
    setTimeout(typeNextCharacter, 50); // Adjust typing speed here (milliseconds)
  }
}

// Start typing when the page loads
window.addEventListener("load", () => {
  typeNextCharacter();
});
