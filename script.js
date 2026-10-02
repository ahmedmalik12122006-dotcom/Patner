/**
 * =========================================================================
 * 💖 PARTNER'S WEBSITE MAIN CONTROLLER SCRIPT 💖
 * =========================================================================
 * Comprehensive engine powering Day/Night mode, the forbidden partner letter,
 * arcade game, tease-o-meter scanner, scratch cards, Wheel of Shenanigans,
 * floating mascot pet, and jukebox audio.
 * =========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all app modules
  initThemeEngine();
  initWelcomeScreen();
  initNavbarAndJukebox();
  initCornerMascot();
  initHero();
  initScrapbook();
  initFunnyCards();
  initForbiddenButtonAndLetter();
  initArcadeGame();
  initTeaseScanner();
  initWheelOfShenanigans();
  initAwards();
  initFateChooser();
  initFinalSection();
  initScrollObserver();
});

/* =========================================================================
   DAY & NIGHT (DARK PASTEL) THEME ENGINE ☀️🌙
   ========================================================================= */
function initThemeEngine() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const mobileThemeBtn = document.getElementById('mobile-theme-btn');

  // Load saved preference or default to Day
  const savedTheme = localStorage.getItem('partner-theme') || 'day';
  if (savedTheme === 'night') {
    document.body.classList.add('dark-mode');
    updateThemeUI(true);
  } else {
    document.body.classList.remove('dark-mode');
    updateThemeUI(false);
  }

  function toggleTheme() {
    window.sound.playSparkle();
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('partner-theme', isDark ? 'night' : 'day');
    updateThemeUI(isDark);

    // Particle burst
    window.confetti.burst(window.innerWidth - 80, 40, 20);
  }

  function updateThemeUI(isDark) {
    if (themeIcon) {
      themeIcon.textContent = isDark ? '☀️' : '🌙';
    }
    if (themeBtn) {
      themeBtn.title = isDark ? 'Switch to Day Mode (Pastel Pink)' : 'Switch to Night Mode (Starry Dark)';
    }
    if (mobileThemeBtn) {
      mobileThemeBtn.textContent = isDark ? '☀️ Switch to Day Mode' : '🌙 Switch to Night Mode';
    }
  }

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);
}

/* =========================================================================
   1. WELCOME SCREEN
   ========================================================================= */
function initWelcomeScreen() {
  const overlay = document.getElementById('welcome-overlay');
  const enterBtn = document.getElementById('welcome-enter-btn');
  const titleEl = document.getElementById('welcome-title');
  const subEl = document.getElementById('welcome-subtitle');

  if (titleEl && CONFIG.welcome) titleEl.textContent = CONFIG.welcome.heading;
  if (subEl && CONFIG.welcome) subEl.textContent = CONFIG.welcome.subheading;
  if (enterBtn && CONFIG.welcome) enterBtn.textContent = CONFIG.welcome.enterButton;

  if (enterBtn && overlay) {
    enterBtn.addEventListener('click', () => {
      window.sound.playSparkle();
      window.confetti.hearts(window.innerWidth / 2, window.innerHeight / 2, 40);

      // Auto-start music on enter
      if (!window.sound.isMusicPlaying) {
        window.sound.playMusic();
        updateJukeboxUI(true, window.sound.getCurrentTrack());
      }

      overlay.classList.add('hidden');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 800);
    });
  }
}

/* =========================================================================
   NAVBAR & JUKEBOX MUSIC CONTROLLER
   ========================================================================= */
function initNavbarAndJukebox() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const musicBtn = document.getElementById('music-toggle-btn');
  const mobileMusicBtn = document.getElementById('mobile-music-btn');
  const sfxBtn = document.getElementById('sfx-toggle-btn');
  const navLinks = document.querySelectorAll('.nav-link');

  const jukeboxPlayBtn = document.getElementById('jukebox-play-btn');
  const jukeboxNextBtn = document.getElementById('jukebox-next-btn');
  const jukeboxPrevBtn = document.getElementById('jukebox-prev-btn');

  // Mobile menu toggle
  if (hamburger && mobileDrawer) {
    hamburger.addEventListener('click', () => {
      window.sound.playPop();
      mobileDrawer.classList.toggle('open');
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // Handle music play/pause toggle
  function handleMusicToggle() {
    window.sound.toggleMusic((isPlaying, currentTrack) => {
      updateJukeboxUI(isPlaying, currentTrack);
      if (isPlaying) {
        window.confetti.burst(window.innerWidth - 60, 40, 15);
      }
    });
  }

  if (musicBtn) musicBtn.addEventListener('click', handleMusicToggle);
  if (mobileMusicBtn) mobileMusicBtn.addEventListener('click', handleMusicToggle);
  if (jukeboxPlayBtn) jukeboxPlayBtn.addEventListener('click', handleMusicToggle);

  if (jukeboxNextBtn) {
    jukeboxNextBtn.addEventListener('click', () => {
      window.sound.playPop();
      window.sound.nextTrack((track) => updateJukeboxUI(window.sound.isMusicPlaying, track));
    });
  }

  if (jukeboxPrevBtn) {
    jukeboxPrevBtn.addEventListener('click', () => {
      window.sound.playPop();
      window.sound.prevTrack((track) => updateJukeboxUI(window.sound.isMusicPlaying, track));
    });
  }

  // SFX toggle
  if (sfxBtn) {
    sfxBtn.addEventListener('click', () => {
      window.sound.isMuted = !window.sound.isMuted;
      sfxBtn.innerHTML = window.sound.isMuted ? '🔕' : '🔔';
      sfxBtn.title = window.sound.isMuted ? 'Unmute Sound Effects' : 'Mute Sound Effects';
      if (!window.sound.isMuted) window.sound.playPop();
    });
  }
}

function updateJukeboxUI(isPlaying, currentTrack) {
  const musicBtn = document.getElementById('music-toggle-btn');
  const mobileMusicBtn = document.getElementById('mobile-music-btn');
  const jukeboxPlayBtn = document.getElementById('jukebox-play-btn');
  const jukeboxTrackName = document.getElementById('jukebox-track-name');

  const icon = isPlaying ? '🎵' : '🔇';
  const label = isPlaying ? 'Playing' : 'Music';

  if (musicBtn) {
    musicBtn.classList.toggle('music-playing', isPlaying);
    musicBtn.title = isPlaying ? 'Pause Music' : 'Play Music';
  }
  if (mobileMusicBtn) {
    mobileMusicBtn.innerHTML = `${icon} ${label}`;
    mobileMusicBtn.classList.toggle('music-playing', isPlaying);
  }
  if (jukeboxPlayBtn) {
    jukeboxPlayBtn.textContent = isPlaying ? '⏸️' : '▶️';
  }
  if (jukeboxTrackName && currentTrack) {
    jukeboxTrackName.textContent = currentTrack.name;
  }
}

/* =========================================================================
   FLOATING CORNER MASCOT PET 🐱🎀
   ========================================================================= */
function initCornerMascot() {
  const mascot = document.getElementById('corner-mascot');
  const bubble = document.getElementById('corner-mascot-bubble');
  if (!mascot || !bubble) return;

  const quotes = [
    "Hey! Don't click the forbidden red button... 👀",
    "Certified cute partner detected! 🎀",
    "Why are you clicking me instead of doing work? 😂",
    "Boop! Sending 100 positive vibes! 💖",
    "Warning: 100% chance of boba cravings! 🧋",
    "Did you know you're certified 10/10 chaotic? 👑",
    "I'm keeping an eye on your button clicks! 🕵️‍♀️",
    "Spin the Wheel of Shenanigans! 🎡✨"
  ];

  let quoteIdx = 0;
  mascot.addEventListener('click', () => {
    window.sound.playBoop();
    window.confetti.burst(window.innerWidth - 60, window.innerHeight - 80, 12);

    quoteIdx = (quoteIdx + 1) % quotes.length;
    bubble.textContent = quotes[quoteIdx];
    bubble.classList.remove('anim-pop');
    void bubble.offsetWidth;
    bubble.classList.add('anim-pop');
  });
}

/* =========================================================================
   2. HERO SECTION
   ========================================================================= */
function initHero() {
  const exploreBtn = document.getElementById('hero-explore-btn');
  const heroHeading = document.getElementById('hero-heading');
  const heroDesc = document.getElementById('hero-desc');
  const mascot = document.getElementById('hero-mascot-interactive');

  if (heroHeading && CONFIG.hero) heroHeading.innerHTML = CONFIG.hero.heading;
  if (heroDesc && CONFIG.hero) heroDesc.textContent = CONFIG.hero.subheading;
  if (exploreBtn && CONFIG.hero) exploreBtn.textContent = CONFIG.hero.exploreBtn;

  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.sound.playPop();
      document.getElementById('photos').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (mascot) {
    mascot.addEventListener('click', () => {
      window.sound.playSparkle();
      const rect = mascot.getBoundingClientRect();
      window.confetti.hearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
    });
  }
}

/* =========================================================================
   3. PHOTO SCRAPBOOK 📸
   ========================================================================= */
let currentLightboxIndex = 0;

function initScrapbook() {
  const grid = document.getElementById('scrapbook-grid');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxTag = document.getElementById('lightbox-tag');
  const lightboxDate = document.getElementById('lightbox-date');
  const lightboxClose = document.getElementById('lightbox-close-btn');

  if (!grid) return;

  grid.innerHTML = CONFIG.scrapbook.map((item, index) => `
    <div class="polaroid-card reveal" style="transform: rotate(${item.rotation});" data-index="${index}">
      <div class="polaroid-tape"></div>
      <div class="polaroid-img-box">
        <img src="${item.image}" alt="${item.caption}" loading="lazy" />
        <span class="polaroid-badge">${item.tag}</span>
      </div>
      <div class="polaroid-caption">${item.caption}</div>
      <div class="polaroid-meta">
        <span>📸 Memory #${item.id}</span>
        <span>${item.date}</span>
      </div>
    </div>
  `).join('');

  const cards = grid.querySelectorAll('.polaroid-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const index = parseInt(card.dataset.index, 10);
      openLightbox(index);
    });
  });

  function openLightbox(index) {
    currentLightboxIndex = index;
    const data = CONFIG.scrapbook[index];
    if (!data) return;

    window.sound.playPop();
    lightboxImg.src = data.image;
    lightboxImg.alt = data.caption;
    lightboxCaption.textContent = data.caption;
    lightboxTag.textContent = data.tag;
    lightboxDate.textContent = `Captured: ${data.date}`;

    lightbox.classList.add('open');
    window.confetti.burst(window.innerWidth / 2, window.innerHeight / 2, 20);
  }

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove('open');
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') {
      openLightbox((currentLightboxIndex + 1) % CONFIG.scrapbook.length);
    }
    if (e.key === 'ArrowLeft') {
      openLightbox((currentLightboxIndex - 1 + CONFIG.scrapbook.length) % CONFIG.scrapbook.length);
    }
  });
}

/* =========================================================================
   4. FUNNY MOMENTS (3D Flip Cards)
   ========================================================================= */
function initFunnyCards() {
  const grid = document.getElementById('funny-cards-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.funnyThings.map((item) => `
    <div class="flip-card reveal">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="card-icon">${item.icon}</div>
          <h3 class="card-title">${item.title}</h3>
          <p style="font-size: 0.95rem; color: var(--pink-deep); font-weight: 700; margin-top: 4px;">${item.frontText}</p>
          <div class="card-hint">Tap to flip 🔄</div>
        </div>
        <div class="flip-card-back">
          <p class="back-punchline">"${item.backText}"</p>
          <span class="card-badge">Certified Accurate 🎀</span>
        </div>
      </div>
    </div>
  `).join('');

  const cards = grid.querySelectorAll('.flip-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      window.sound.playPop();
      card.classList.toggle('flipped');
      if (card.classList.contains('flipped')) {
        const rect = card.getBoundingClientRect();
        window.confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 12);
      }
    });
  });
}

/* =========================================================================
   5. FORBIDDEN BUTTON & PARTNER LETTER 🚨💌
   ========================================================================= */
function initForbiddenButtonAndLetter() {
  const forbiddenBtn = document.getElementById('forbidden-btn');
  const messageText = document.getElementById('random-message-text');
  const counterBadge = document.getElementById('click-counter-badge');
  const reopenLetterBtn = document.getElementById('reopen-letter-btn');

  const letterModal = document.getElementById('forbidden-letter-modal');
  const letterClose = document.getElementById('letter-modal-close');
  const letterForgiveBtn = document.getElementById('letter-forgive-btn');

  const alertBadge = document.getElementById('letter-alert-badge');
  const alertTitle = document.getElementById('letter-alert-title');
  const alertSubtitle = document.getElementById('letter-alert-subtitle');
  const letterTo = document.getElementById('letter-to-heading');
  const letterBody = document.getElementById('letter-body-content');
  const letterSig = document.getElementById('letter-signature');

  if (!forbiddenBtn) return;

  let clickCount = 0;
  const cfg = CONFIG.forbiddenSection;

  if (cfg && cfg.letter) {
    if (alertBadge) alertBadge.textContent = cfg.letter.alertBadge;
    if (alertTitle) alertTitle.textContent = cfg.letter.alertTitle;
    if (alertSubtitle) alertSubtitle.textContent = cfg.letter.subtitle;
    if (letterTo) letterTo.textContent = cfg.letter.toText;
    if (letterBody) letterBody.textContent = cfg.letter.body;
    if (letterSig) letterSig.textContent = cfg.letter.signature;
    if (letterForgiveBtn) letterForgiveBtn.textContent = cfg.letter.forgiveBtn;
  }

  function openLetterModal() {
    window.sound.playSiren();
    window.confetti.hearts(window.innerWidth / 2, window.innerHeight / 2, 45);
    window.confetti.celebrate(2500);

    if (letterModal) letterModal.classList.add('open');
    if (reopenLetterBtn) reopenLetterBtn.style.display = 'inline-flex';
  }

  function closeLetterModal() {
    if (letterModal) letterModal.classList.remove('open');
  }

  forbiddenBtn.addEventListener('click', () => {
    clickCount++;
    window.sound.playWobble();

    forbiddenBtn.classList.remove('anim-shake');
    void forbiddenBtn.offsetWidth;
    forbiddenBtn.classList.add('anim-shake');

    if (counterBadge) {
      counterBadge.textContent = `Warning ignored: ${clickCount} time${clickCount > 1 ? 's' : ''}! 🚨`;
    }

    const replies = cfg.teasingClickReplies || [];
    const replyIdx = Math.min(clickCount - 1, replies.length - 1);
    if (messageText && replies[replyIdx]) {
      messageText.textContent = replies[replyIdx];
      messageText.parentElement.classList.remove('anim-pop');
      void messageText.parentElement.offsetWidth;
      messageText.parentElement.classList.add('anim-pop');
    }

    if (clickCount === 1 || clickCount % 5 === 0) {
      setTimeout(() => openLetterModal(), 350);
    }
  });

  if (reopenLetterBtn) {
    reopenLetterBtn.addEventListener('click', () => {
      window.sound.playSparkle();
      openLetterModal();
    });
  }

  if (letterClose) letterClose.addEventListener('click', closeLetterModal);
  if (letterForgiveBtn) {
    letterForgiveBtn.addEventListener('click', () => {
      window.sound.playTada();
      window.confetti.hearts(window.innerWidth / 2, window.innerHeight / 2, 50);
      closeLetterModal();
    });
  }
  if (letterModal) {
    letterModal.addEventListener('click', (e) => {
      if (e.target === letterModal) closeLetterModal();
    });
  }
}

/* =========================================================================
   6. ARCADE MINI-GAME: CATCH THE BOBA & TREATS 🧋⚡
   ========================================================================= */
function initArcadeGame() {
  const startOverlay = document.getElementById('arcade-start-overlay');
  const resultOverlay = document.getElementById('arcade-result-overlay');
  const startBtn = document.getElementById('start-game-btn');
  const restartBtn = document.getElementById('restart-game-btn');
  const spawnContainer = document.getElementById('arcade-spawn-container');
  const scoreDisplay = document.getElementById('game-score-display');
  const comboDisplay = document.getElementById('game-combo-display');
  const timerDisplay = document.getElementById('game-timer-display');
  const commentaryEl = document.getElementById('arcade-commentary');

  const rankIcon = document.getElementById('arcade-result-rank-icon');
  const rankBadge = document.getElementById('arcade-result-rank-badge');
  const rankTitle = document.getElementById('arcade-result-rank-title');
  const finalScoreText = document.getElementById('arcade-final-score-text');
  const rankDesc = document.getElementById('arcade-result-rank-desc');

  if (!startBtn || !spawnContainer) return;

  const cfg = CONFIG.arcadeGame;
  let score = 0;
  let combo = 0;
  let timeLeft = cfg.gameDuration || 25;
  let gameInterval = null;
  let spawnInterval = null;
  let isPlaying = false;

  function startGame() {
    score = 0;
    combo = 0;
    timeLeft = cfg.gameDuration || 25;
    isPlaying = true;

    scoreDisplay.textContent = '0';
    comboDisplay.textContent = 'x0';
    timerDisplay.textContent = `${timeLeft}s`;
    commentaryEl.textContent = 'Game started! Tap the treats! 🧋✨';

    startOverlay.style.display = 'none';
    resultOverlay.style.display = 'none';
    spawnContainer.innerHTML = '';

    window.sound.playSparkle();

    gameInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `${timeLeft}s`;
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);

    spawnInterval = setInterval(() => {
      if (!isPlaying) return;
      spawnItem();
    }, 550);
  }

  function spawnItem() {
    const stageWidth = spawnContainer.offsetWidth || 500;
    const stageHeight = spawnContainer.offsetHeight || 320;

    const items = cfg.items;
    const itemData = items[Math.floor(Math.random() * items.length)];

    const itemEl = document.createElement('div');
    itemEl.className = 'arcade-target-item';
    itemEl.textContent = itemData.emoji;

    const posX = Math.max(15, Math.floor(Math.random() * (stageWidth - 70)));
    const posY = Math.max(15, Math.floor(Math.random() * (stageHeight - 70)));
    itemEl.style.left = `${posX}px`;
    itemEl.style.top = `${posY}px`;

    const lifetime = itemData.type === 'good' ? 1900 : 2300;
    const removeTimer = setTimeout(() => {
      if (itemEl.parentElement) {
        itemEl.remove();
        if (itemData.type === 'good') {
          combo = 0;
          comboDisplay.textContent = 'x0';
        }
      }
    }, lifetime);

    itemEl.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      clearTimeout(removeTimer);

      if (itemData.type === 'good') {
        combo++;
        score += itemData.points + combo * 2;
        window.sound.playScore();

        cfg.comboComments.forEach((c) => {
          if (combo >= c.minCombo) commentaryEl.textContent = c.text;
        });
      } else {
        combo = 0;
        score = Math.max(0, score + itemData.points);
        window.sound.playWobble();
        commentaryEl.textContent = 'Ouch! Hit drama! -25 pts 🚨';
      }

      scoreDisplay.textContent = score;
      comboDisplay.textContent = `x${combo}`;

      const popup = document.createElement('span');
      popup.className = 'arcade-points-popup';
      popup.textContent = itemData.points > 0 ? `+${itemData.points + combo * 2}` : `${itemData.points}`;
      popup.style.color = itemData.type === 'good' ? '#e11d48' : '#64748b';
      popup.style.left = `${posX + 10}px`;
      popup.style.top = `${posY - 10}px`;
      spawnContainer.appendChild(popup);
      setTimeout(() => popup.remove(), 750);

      window.confetti.burst(e.clientX, e.clientY, 8);
      itemEl.remove();
    });

    spawnContainer.appendChild(itemEl);
  }

  function endGame() {
    isPlaying = false;
    clearInterval(gameInterval);
    clearInterval(spawnInterval);
    spawnContainer.innerHTML = '';

    let playerRank = cfg.ranks[cfg.ranks.length - 1];
    for (let r of cfg.ranks) {
      if (score >= r.minScore) {
        playerRank = r;
        break;
      }
    }

    rankIcon.textContent = playerRank.emoji.split(' ')[0] || '👑';
    rankBadge.textContent = `RANK ${playerRank.rank}`;
    rankTitle.textContent = playerRank.title;
    finalScoreText.textContent = `Final Score: ${score} Points! 🏆`;
    rankDesc.textContent = playerRank.desc;

    resultOverlay.style.display = 'flex';
    window.sound.playTada();
    window.confetti.celebrate(3000);
  }

  startBtn.addEventListener('click', startGame);
  restartBtn.addEventListener('click', startGame);
}

/* =========================================================================
   7. LIE DETECTOR & TEASE-O-METER 🔍🤖
   ========================================================================= */
function initTeaseScanner() {
  const pad = document.getElementById('biometric-scanner-pad');
  const resultsBox = document.getElementById('scanner-results-box');
  const soundboardGrid = document.getElementById('soundboard-grid');
  const speechBubble = document.getElementById('soundboard-speech-bubble');
  const scratchContainer = document.getElementById('scratch-cards-container');

  const cfg = CONFIG.teaseOMeter;
  if (!pad || !cfg) return;

  // 1. Biometric Touch Scanner
  let isScanning = false;
  pad.addEventListener('click', () => {
    if (isScanning) return;
    isScanning = true;
    pad.classList.add('scanning');
    window.sound.playLaser();

    resultsBox.innerHTML = `
      <div class="scanner-placeholder-text anim-pulse">
        ⚡ SCANNING PARTNER VITALS & CHAOS OUTPUT... 🧬
      </div>
    `;

    setTimeout(() => {
      isScanning = false;
      pad.classList.remove('scanning');
      window.sound.playTada();
      const rect = pad.getBoundingClientRect();
      window.confetti.hearts(rect.left + rect.width / 2, rect.top + rect.height / 2, 30);

      resultsBox.innerHTML = cfg.scanStats.map((stat) => `
        <div class="vital-stat-row anim-pop">
          <div class="vital-stat-header">
            <span>${stat.icon} ${stat.name}</span>
            <span style="color: ${stat.barColor}; font-weight: 800;">${stat.value}% ${stat.isOverMax ? '🔥 (ILLEGAL)' : ''}</span>
          </div>
          <div class="vital-progress-bar">
            <div class="vital-progress-fill" style="width: ${Math.min(stat.value, 100)}%; background: ${stat.barColor};"></div>
          </div>
          <p class="vital-stat-desc">${stat.desc}</p>
        </div>
      `).join('');
    }, 1600);
  });

  // 2. Excuse Generator Soundboard
  if (soundboardGrid && cfg.soundboard) {
    soundboardGrid.innerHTML = cfg.soundboard.map((item, idx) => `
      <button class="soundboard-btn" data-index="${idx}">
        <span class="sb-icon">${item.icon}</span>
        <span class="sb-label">${item.label}</span>
      </button>
    `).join('');

    const btns = soundboardGrid.querySelectorAll('.soundboard-btn');
    btns.forEach((b) => {
      b.addEventListener('click', () => {
        const item = cfg.soundboard[parseInt(b.dataset.index, 10)];
        window.sound.playPop();
        if (speechBubble && item) {
          speechBubble.innerHTML = `"${item.quote}"`;
          speechBubble.classList.remove('anim-pop');
          void speechBubble.offsetWidth;
          speechBubble.classList.add('anim-pop');
        }
      });
    });
  }

  // 3. Interactive Scratch Cards
  if (scratchContainer && cfg.scratchCards) {
    scratchContainer.innerHTML = cfg.scratchCards.map((sc) => `
      <div class="scratch-card-item" id="scratch-item-${sc.id}">
        <div class="scratch-card-secret">${sc.secret}</div>
        <canvas class="scratch-canvas" id="scratch-canvas-${sc.id}"></canvas>
      </div>
    `).join('');

    cfg.scratchCards.forEach((sc) => {
      initSingleScratchCard(sc.id);
    });
  }
}

function initSingleScratchCard(id) {
  const canvas = document.getElementById(`scratch-canvas-${id}`);
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width || 340;
  canvas.height = rect.height || 85;

  ctx.fillStyle = document.body.classList.contains('dark-mode') ? '#a21caf' : '#f472b6';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('✨ Scratch With Mouse / Finger 🪙', canvas.width / 2, canvas.height / 2);

  let isDrawing = false;
  function scratch(e) {
    if (!isDrawing) return;
    const cRect = canvas.getBoundingClientRect();
    const clientX = e.clientX !== undefined ? e.clientX : (e.touches && e.touches[0].clientX);
    const clientY = e.clientY !== undefined ? e.clientY : (e.touches && e.touches[0].clientY);

    if (clientX === undefined || clientY === undefined) return;

    const x = clientX - cRect.left;
    const y = clientY - cRect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    window.sound.playPop();
  }

  canvas.addEventListener('mousedown', (e) => { isDrawing = true; scratch(e); });
  canvas.addEventListener('mousemove', scratch);
  window.addEventListener('mouseup', () => { isDrawing = false; });

  canvas.addEventListener('touchstart', (e) => { isDrawing = true; scratch(e); }, { passive: true });
  canvas.addEventListener('touchmove', (e) => { scratch(e); }, { passive: true });
  window.addEventListener('touchend', () => { isDrawing = false; });
}

/* =========================================================================
   8. WHEEL OF SHENANIGANS 🎡 (Featured Centerpiece)
   ========================================================================= */
function initWheelOfShenanigans() {
  const wheelCanvas = document.getElementById('shenanigans-wheel-canvas');
  const spinBtn = document.getElementById('spin-wheel-btn');
  const outcomeCard = document.getElementById('wheel-outcome-card');

  const cfg = CONFIG.chaosStudio;
  if (!wheelCanvas || !cfg) return;

  const ctx = wheelCanvas.getContext('2d');
  const items = cfg.wheelItems;
  const numSlices = items.length;
  const arc = (Math.PI * 2) / numSlices;
  let currentAngle = 0;
  let isSpinning = false;

  function resizeAndDraw() {
    const parent = wheelCanvas.parentElement;
    const size = Math.min(340, parent ? parent.offsetWidth : 340);
    wheelCanvas.width = size;
    wheelCanvas.height = size;
    drawWheel();
  }

  function drawWheel() {
    const cx = wheelCanvas.width / 2;
    const cy = wheelCanvas.height / 2;
    const radius = cx - 6;

    ctx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);

    for (let i = 0; i < numSlices; i++) {
      const angle = currentAngle + i * arc;

      ctx.beginPath();
      ctx.fillStyle = items[i].color;
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle, angle + arc);
      ctx.lineTo(cx, cy);
      ctx.fill();
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle + arc / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px "Fredoka", sans-serif';
      ctx.shadowColor = 'rgba(0,0,0,0.35)';
      ctx.shadowBlur = 4;
      ctx.fillText(items[i].label, radius - 16, 5);
      ctx.restore();
    }

    // Center hub
    ctx.beginPath();
    ctx.arc(cx, cy, 24, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#ff758f';
    ctx.stroke();

    ctx.fillStyle = '#e11d48';
    ctx.font = '15px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🎯', cx, cy);
  }

  window.addEventListener('resize', resizeAndDraw);
  resizeAndDraw();

  // Spin Wheel
  if (spinBtn) {
    spinBtn.addEventListener('click', () => {
      if (isSpinning) return;
      isSpinning = true;
      outcomeCard.textContent = "Spinning fate... 🎡";

      let speed = 0.38 + Math.random() * 0.25;
      const friction = 0.986;
      let lastTickAngle = currentAngle;

      function animateSpin() {
        speed *= friction;
        currentAngle += speed;
        drawWheel();

        if (Math.abs(currentAngle - lastTickAngle) > arc) {
          window.sound.playWheelTick();
          lastTickAngle = currentAngle;
        }

        if (speed > 0.002) {
          requestAnimationFrame(animateSpin);
        } else {
          isSpinning = false;

          const normalizedAngle = (Math.PI * 2 - (currentAngle % (Math.PI * 2)) - Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);
          const index = Math.floor(normalizedAngle / arc) % numSlices;
          const winning = items[index];

          outcomeCard.innerHTML = `<strong>${winning.label}</strong>: "${winning.text}"`;
          window.sound.playTada();
          window.confetti.celebrate(2000);
        }
      }

      requestAnimationFrame(animateSpin);
    });
  }
}

/* =========================================================================
   9. PARTNER AWARDS 🏆
   ========================================================================= */
function initAwards() {
  const grid = document.getElementById('awards-grid');
  if (!grid) return;

  grid.innerHTML = CONFIG.awards.map((award) => `
    <div class="award-card reveal">
      <div class="award-icon-box">${award.icon}</div>
      <span class="award-category-pill">${award.category}</span>
      <h3 class="award-title">${award.title}</h3>
      <p class="award-subtitle">${award.subtitle}</p>
    </div>
  `).join('');

  const cards = grid.querySelectorAll('.award-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      window.sound.playSparkle();
      const rect = card.getBoundingClientRect();
      window.confetti.burst(rect.left + rect.width / 2, rect.top + rect.height / 2, 25);
    });
  });
}

/* =========================================================================
   10. CHOOSE YOUR FATE 🔮
   ========================================================================= */
function initFateChooser() {
  const grid = document.getElementById('fate-options-grid');
  const modal = document.getElementById('fate-modal');
  const modalSymbol = document.getElementById('fate-modal-symbol');
  const modalFortune = document.getElementById('fate-modal-fortune');
  const modalClose = document.getElementById('fate-modal-close');

  if (!grid) return;

  grid.innerHTML = CONFIG.fateOptions.map((opt, index) => `
    <div class="fate-card reveal" data-index="${index}">
      <div class="fate-symbol">${opt.symbol}</div>
      <h3 class="fate-label">${opt.label}</h3>
      <span class="fate-action-badge">Choose Fate ✨</span>
    </div>
  `).join('');

  const cards = grid.querySelectorAll('.fate-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const index = parseInt(card.dataset.index, 10);
      const opt = CONFIG.fateOptions[index];
      if (!opt) return;

      window.sound.playSparkle();
      const fortune = opt.fortunes[Math.floor(Math.random() * opt.fortunes.length)];

      modalSymbol.textContent = opt.symbol;
      modalFortune.textContent = fortune;
      modal.classList.add('open');

      window.confetti.celebrate(1500);
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('open'));
  }
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }
}

/* =========================================================================
   11. FINAL SECTION
   ========================================================================= */
function initFinalSection() {
  const startAgainBtn = document.getElementById('start-again-btn');
  const finalHeading = document.getElementById('final-heading');
  const finalSubtext = document.getElementById('final-subtext');
  const footerText = document.getElementById('site-footer-text');

  if (finalHeading && CONFIG.final) finalHeading.textContent = CONFIG.final.heading;
  if (finalSubtext && CONFIG.final) finalSubtext.textContent = CONFIG.final.subtext;
  if (startAgainBtn && CONFIG.final) startAgainBtn.textContent = CONFIG.final.startAgainBtn;
  if (footerText && CONFIG.final) footerText.textContent = CONFIG.final.footerText;

  if (startAgainBtn) {
    startAgainBtn.addEventListener('click', () => {
      window.sound.playSparkle();
      window.confetti.hearts(window.innerWidth / 2, 100, 30);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* =========================================================================
   SCROLL REVEAL OBSERVER
   ========================================================================= */
function initScrollObserver() {
  const reveals = document.querySelectorAll('.reveal');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  const sections = document.querySelectorAll('section[id]');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.08 });

  reveals.forEach((el) => revealObserver.observe(el));

  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });
}
