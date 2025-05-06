// expose.js

window.addEventListener('DOMContentLoaded', init);

function init(){
  // TODO
  const audio = document.querySelector('audio');
  const image = document.querySelector('img');
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const confetti = new JSConfetti(); // 🎉 Initialize confetti engine

  // Console log check
  console.log({ audio, image, hornSelect, volumeSlider, volumeIcon, playButton });

  // Dropdown selection
  hornSelect.addEventListener('change', () => {
    const selected = hornSelect.value;
    image.src = `assets/images/${selected}.svg`;
    audio.src = `assets/audio/${selected}.mp3`;
  });

  // Volume slider behavior
  volumeSlider.addEventListener('input', () => {
    const volume = Number(volumeSlider.value);
    audio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  // Play button behavior
  playButton.addEventListener('click', () => {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      confetti.addConfetti();
    }
  });
}
