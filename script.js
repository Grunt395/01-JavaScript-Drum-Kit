window.addEventListener("keydown", function(e) {
    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    console.log(audio);
    if (!audio) {
        return; // Stops the function from running on invalid key press
    }
    audio.currentTime = 0; // Rewinds audio to the start
    audio.play(); // Plays the audio element

    key.classList.add("playing");

});