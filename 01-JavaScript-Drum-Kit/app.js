const keys = document.querySelectorAll(".key");

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; // stop the function from running
	audio.currentTime = 0; // Rewind to the start
	audio.play();
	key.classList.add("playing");
}

function playSoundClick(e) {
    const currentElem = e.target.parentElement; 
    const key = currentElem.dataset.key;
    const keyElem = e.target.parentElement; 
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    audio.currentTime = 0; // Rewind to the start
	audio.play();
	keyElem.classList.add("playing");
}

function removeTransition(e) {
	if (e.propertyName !== "transform") return; // skip if its not a transform
	this.classList.remove("playing");
}

// Event Listeners
window.addEventListener("keydown", playSound);
window.addEventListener("click", playSoundClick);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Update copyright year automatically
const date = new Date().getFullYear();
document.getElementById('year').textContent = date; 
