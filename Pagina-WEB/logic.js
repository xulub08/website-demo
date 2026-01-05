// reproductor de música
const musicPlayer = {
  currentTrack: null,
  isPlaying: false,
  play(track) {
    this.currentTrack = track;
    this.isPlaying = true;
    console.log(`Reproduciendo: ${track}`);
  },
  pause() {
    this.isPlaying = false;
    console.log(`Pausado: ${this.currentTrack}`);
  },
  stop() {
    this.currentTrack = null;
    this.isPlaying = false;
    console.log(`Detenido`);
  }
};
// NO UTILICE NADA DE ESTO AÚN, NO LE SE AL JAVASCRIPT AUN