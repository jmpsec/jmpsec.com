let sentenceIndex = 0;
let charIndex = 0;

const typewriter = document.getElementById("typewriter");

function type() {
  if (charIndex < sentences[sentenceIndex].length) {
    typewriter.textContent += sentences[sentenceIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust speed here
  } else {
    setTimeout(erase, 2000); // Pause before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.textContent = sentences[sentenceIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, 100); // Adjust erase speed here
  } else {
    sentenceIndex = (sentenceIndex + 1) % sentences.length; // Move to the next sentence
    setTimeout(type, 1000); // Pause before typing next sentence
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
