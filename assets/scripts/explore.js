// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const smileImage = document.querySelector('img');
    const textToSpeak = document.getElementById('text-to-speak');
    const voiceSelect = document.getElementById('voice-select');
    const speakButton = document.querySelector('button');
    const synth = window.speechSynthesis;

    // Load available voices
    function loadVoices() {
        const voices = synth.getVoices();
        voiceSelect.innerHTML = ''; // Clear the current options

        voices.forEach(voice => {
            const option = document.createElement('option');
            option.value = voice.name;
            option.textContent = `${voice.name} (${voice.lang})`;
            voiceSelect.appendChild(option);
        });
    }

    // Load voices initially
    loadVoices();

    // Refresh the voices list when they change (sometimes required on some browsers)
    synth.addEventListener('voiceschanged', loadVoices);

    // Handle speech synthesis
    speakButton.addEventListener('click', () => {
        const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
        const selectedVoiceName = voiceSelect.value;

        // Set the voice based on the selected option
        const selectedVoice = synth.getVoices().find(voice => voice.name === selectedVoiceName);
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }

        // Swap to open mouth image while speaking
        smileImage.src = 'assets/images/smiling-open.png';
        synth.speak(utterance);

        // Swap back to closed mouth image once speech is done
        utterance.addEventListener('end', () => {
            smileImage.src = 'assets/images/smiling.png';
        });
    });
}