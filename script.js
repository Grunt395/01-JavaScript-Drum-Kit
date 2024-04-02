function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) {
        return; // Stops the function from running on invalid key press
    }
    audio.currentTime = 0; // Rewinds audio to the start
    audio.play(); // Plays the audio element

    key.classList.add("playing"); // Adds class "playing" to a key
}

function removeTransition(e) { 
    if (e.propertyName !== "transform") {
        return; // skip if it's not a transform
    }
    this.classList.remove("playing"); // Removes playing class after alloted time, ie 0.07 seconds
}

const keys = document.querySelectorAll(".key"); // Select all keys

keys.forEach(key => key.addEventListener("transitionend", removeTransition)); 
// Each key has an event listener, transitionend, added to it, and when a transition is endeing, we will remove it.

window.addEventListener("keydown", playSound); // Event Listener to use playSound function