/**
 * =========================================================================
 * 🎵 ADVANCED AUDIO CONTROLLER & MULTI-TRACK SYNTHESIZER 🎵
 * =========================================================================
 * Upbeat, joyful, cute procedural music synthesis + rich sound effects
 * with zero external dependencies! Also supports custom music.mp3.
 * =========================================================================
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isMusicPlaying = false;
    this.currentTrackIndex = 0;
    this.synthTimer = null;
    this.stepIndex = 0;
    
    // HTML5 Audio fallback for user's own file
    this.audioElement = new Audio();
    this.audioElement.src = 'music.mp3';
    this.audioElement.loop = true;
    this.audioElement.volume = 0.45;

    // Track playlists for procedural synthesizer
    this.tracks = [
      {
        id: 'kawaii-pop',
        name: 'Pastel Pop Bop 🎀',
        tempo: 135,
        genre: 'Upbeat Kawaii Pop'
      },
      {
        id: 'sunshine-groove',
        name: "Partner's Sunshine Groove 💖",
        tempo: 124,
        genre: 'Joyful & Playful Funk'
      },
      {
        id: 'coffee-chaos',
        name: 'Coffee & Chaos ☕',
        tempo: 140,
        genre: 'Cheerful Chiptune Beat'
      }
    ];
  }

  // Initialize Web Audio Context on first user click
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // =========================================================================
  // SOUND EFFECTS
  // =========================================================================

  playPop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(1040, now + 0.08);

      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {}
  }

  playBoop() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.exponentialRampToValueAtTime(392.00, now + 0.1); // G4

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.11);
    } catch (e) {}
  }

  playSparkle() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98];
      const now = this.ctx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.04;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.12, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.24);
      });
    } catch (e) {}
  }

  playTada() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const chords = [
        { f: [523.25, 659.25, 783.99], t: 0, d: 0.12 },
        { f: [587.33, 739.99, 880.00], t: 0.12, d: 0.12 },
        { f: [659.25, 830.61, 987.77], t: 0.24, d: 0.15 },
        { f: [783.99, 987.77, 1174.66, 1567.98], t: 0.38, d: 0.65 }
      ];
      const now = this.ctx.currentTime;

      chords.forEach((chord) => {
        chord.f.forEach((freq) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const start = now + chord.t;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.1, start);
          gain.gain.exponentialRampToValueAtTime(0.001, start + chord.d);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(start);
          osc.stop(start + chord.d + 0.05);
        });
      });
    } catch (e) {}
  }

  playSiren() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.linearRampToValueAtTime(900, now + 0.18);
      osc.frequency.linearRampToValueAtTime(450, now + 0.36);
      osc.frequency.linearRampToValueAtTime(950, now + 0.54);
      osc.frequency.linearRampToValueAtTime(400, now + 0.72);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.75);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.76);
    } catch (e) {}
  }

  playWobble() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(250, now);
      osc.frequency.linearRampToValueAtTime(650, now + 0.05);
      osc.frequency.linearRampToValueAtTime(220, now + 0.1);
      osc.frequency.linearRampToValueAtTime(550, now + 0.15);
      osc.frequency.linearRampToValueAtTime(180, now + 0.22);

      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.26);
    } catch (e) {}
  }

  playScore() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [587.33, 880.00];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + idx * 0.06;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.18, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.16);
      });
    } catch (e) {}
  }

  playLaser() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.18);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.19);
    } catch (e) {}
  }

  playWheelTick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800 + Math.random() * 200, now);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.035);
    } catch (e) {}
  }

  playStamp() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.09);

      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {}
  }

  // =========================================================================
  // MUSIC & LIVE CHIPTUNE / KAWAII SYNTHESIZER
  // =========================================================================

  toggleMusic(onStateChange) {
    this.init();
    if (this.isMusicPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
    if (onStateChange) {
      onStateChange(this.isMusicPlaying, this.getCurrentTrack());
    }
    return this.isMusicPlaying;
  }

  getCurrentTrack() {
    return this.tracks[this.currentTrackIndex] || this.tracks[0];
  }

  nextTrack(onTrackChange) {
    this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
    if (this.isMusicPlaying) {
      this.stopProceduralSynth();
      this.startProceduralSynth();
    }
    if (onTrackChange) {
      onTrackChange(this.getCurrentTrack());
    }
  }

  prevTrack(onTrackChange) {
    this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
    if (this.isMusicPlaying) {
      this.stopProceduralSynth();
      this.startProceduralSynth();
    }
    if (onTrackChange) {
      onTrackChange(this.getCurrentTrack());
    }
  }

  playMusic() {
    this.isMusicPlaying = true;

    // Check if custom audio file exists & playable
    const playPromise = this.audioElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Custom music is playing
        })
        .catch(() => {
          // Play upbeat live synthesized tunes!
          this.startProceduralSynth();
        });
    }
  }

  pauseMusic() {
    this.isMusicPlaying = false;
    this.audioElement.pause();
    this.stopProceduralSynth();
  }

  // Synthesize lively, joyful, upbeat kawaii music loops!
  startProceduralSynth() {
    this.stopProceduralSynth();
    if (!this.ctx) return;

    this.stepIndex = 0;
    const track = this.getCurrentTrack();
    const intervalMs = Math.floor(60000 / track.tempo / 2); // 8th notes

    // Track 1: Pastel Pop (C Major Pentatonic & Kawaii hooks)
    const melody1 = [
      523.25, 659.25, 783.99, 1046.50, 880.00, 783.99, 659.25, 523.25,
      587.33, 659.25, 880.00, 783.99, 659.25, 587.33, 523.25, 659.25,
      783.99, 1046.50, 1174.66, 1046.50, 880.00, 783.99, 659.25, 783.99,
      880.00, 783.99, 659.25, 587.33, 523.25, 659.25, 783.99, 1046.50
    ];
    const bass1 = [
      130.81, 130.81, 164.81, 164.81, 174.61, 174.61, 196.00, 196.00,
      146.83, 146.83, 164.81, 164.81, 174.61, 174.61, 196.00, 196.00
    ];

    // Track 2: Sunshine Groove (F Major / D Minor Funky chords)
    const melody2 = [
      698.46, 783.99, 880.00, 1046.50, 880.00, 783.99, 698.46, 587.33,
      659.25, 698.46, 783.99, 880.00, 783.99, 698.46, 659.25, 523.25,
      587.33, 698.46, 880.00, 1046.50, 1174.66, 1046.50, 880.00, 698.46,
      783.99, 880.00, 1046.50, 880.00, 783.99, 698.46, 783.99, 880.00
    ];
    const bass2 = [
      174.61, 174.61, 196.00, 196.00, 220.00, 220.00, 261.63, 261.63,
      146.83, 146.83, 174.61, 174.61, 196.00, 196.00, 220.00, 220.00
    ];

    // Track 3: Coffee & Chaos (Bouncy Pentatonic G Major)
    const melody3 = [
      783.99, 880.00, 987.77, 1174.66, 987.77, 880.00, 783.99, 659.25,
      783.99, 987.77, 1174.66, 1318.51, 1174.66, 987.77, 880.00, 783.99,
      659.25, 783.99, 880.00, 987.77, 880.00, 783.99, 659.25, 587.33,
      783.99, 880.00, 987.77, 1174.66, 1318.51, 1174.66, 987.77, 783.99
    ];
    const bass3 = [
      196.00, 196.00, 220.00, 220.00, 246.94, 246.94, 293.66, 293.66,
      164.81, 164.81, 196.00, 196.00, 220.00, 220.00, 246.94, 246.94
    ];

    const currentMelody = this.currentTrackIndex === 0 ? melody1 : (this.currentTrackIndex === 1 ? melody2 : melody3);
    const currentBass = this.currentTrackIndex === 0 ? bass1 : (this.currentTrackIndex === 1 ? bass2 : bass3);

    this.synthTimer = setInterval(() => {
      if (!this.isMusicPlaying || !this.ctx || this.isMuted) return;

      try {
        const now = this.ctx.currentTime;
        const noteIdx = this.stepIndex % currentMelody.length;
        const bassIdx = Math.floor(this.stepIndex / 2) % currentBass.length;

        // 1. Lead Melody Note (Warm sine / triangle tone)
        const leadFreq = currentMelody[noteIdx];
        if (leadFreq && Math.random() > 0.08) {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();

          osc.type = this.currentTrackIndex === 2 ? 'square' : 'triangle';
          osc.frequency.setValueAtTime(leadFreq, now);

          gain.gain.setValueAtTime(0.001, now);
          gain.gain.linearRampToValueAtTime(0.045, now + 0.03);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + (intervalMs / 1000) * 1.5);

          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.start(now);
          osc.stop(now + (intervalMs / 1000) * 1.6);
        }

        // 2. Bouncy Bass Note on quarter beats
        if (this.stepIndex % 2 === 0) {
          const bassFreq = currentBass[bassIdx];
          const bassOsc = this.ctx.createOscillator();
          const bassGain = this.ctx.createGain();

          bassOsc.type = 'sine';
          bassOsc.frequency.setValueAtTime(bassFreq, now);

          bassGain.gain.setValueAtTime(0.06, now);
          bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

          bassOsc.connect(bassGain);
          bassGain.connect(this.ctx.destination);
          bassOsc.start(now);
          bassOsc.stop(now + 0.36);
        }

        // 3. Cute percussion tick (hi-hat / woodblock)
        if (this.stepIndex % 2 === 1) {
          const tickOsc = this.ctx.createOscillator();
          const tickGain = this.ctx.createGain();

          tickOsc.type = 'triangle';
          tickOsc.frequency.setValueAtTime(1400, now);
          tickGain.gain.setValueAtTime(0.018, now);
          tickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

          tickOsc.connect(tickGain);
          tickGain.connect(this.ctx.destination);
          tickOsc.start(now);
          tickOsc.stop(now + 0.05);
        }

        this.stepIndex++;
      } catch (e) {}
    }, intervalMs);
  }

  stopProceduralSynth() {
    if (this.synthTimer) {
      clearInterval(this.synthTimer);
      this.synthTimer = null;
    }
  }
}

// Global sound instance
window.sound = new SoundEngine();
