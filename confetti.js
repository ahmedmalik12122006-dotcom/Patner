/**
 * =========================================================================
 * 💖 LIGHTWEIGHT CANVAS CONFETTI, HEARTS & CURSOR TRAIL ENGINE 💖
 * =========================================================================
 * High-performance 60fps particle physics engine with zero dependencies.
 * =========================================================================
 */

class ConfettiEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.cursorParticles = [];
    this.animationId = null;
    this.isInitialized = false;
    this.colors = [
      '#ff758f', '#ff4d6d', '#ff8fa3', '#ffb3c1', '#fbcfe8',
      '#f472b6', '#e0c3fc', '#c084fc', '#fde047', '#ffd166', '#ffffff'
    ];
  }

  init() {
    if (this.isInitialized) return;

    this.canvas = document.createElement('canvas');
    this.canvas.id = 'fx-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '99999';
    document.body.appendChild(this.canvas);

    this.ctx = this.canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initCursorTrail();

    this.isInitialized = true;
    this.loop();
  }

  resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth * window.devicePixelRatio;
    this.canvas.height = window.innerHeight * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  // Create an explosion burst of confetti & ribbons
  burst(originX, originY, count = 45, shape = 'mixed') {
    this.init();
    const x = originX !== undefined ? originX : window.innerWidth / 2;
    const y = originY !== undefined ? originY : window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const velocity = 4 + Math.random() * 9;
      const pShape = shape === 'mixed' ? (Math.random() > 0.4 ? 'heart' : 'rect') : shape;

      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity - 2.5,
        size: pShape === 'heart' ? 10 + Math.random() * 8 : 6 + Math.random() * 8,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
        shape: pShape,
        opacity: 1,
        life: 1,
        decay: 0.012 + Math.random() * 0.015,
        gravity: 0.22,
        friction: 0.98
      });
    }
  }

  // Heart shower specifically
  hearts(originX, originY, count = 30) {
    this.burst(originX, originY, count, 'heart');
  }

  // Massive celebration shower
  celebrate(durationMs = 2500) {
    this.init();
    const start = Date.now();
    const interval = setInterval(() => {
      if (Date.now() - start > durationMs) {
        clearInterval(interval);
        return;
      }
      this.burst(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight * 0.4,
        15,
        'mixed'
      );
    }, 200);
  }

  // Cute cursor sparkle trail
  initCursorTrail() {
    let lastTime = 0;
    const throttleMs = 25;

    window.addEventListener('pointermove', (e) => {
      const now = Date.now();
      if (now - lastTime < throttleMs) return;
      lastTime = now;

      // Small chance to create a cute sparkle or tiny heart
      if (Math.random() > 0.3) {
        const isHeart = Math.random() > 0.65;
        this.cursorParticles.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 1.5,
          vy: -1 - Math.random() * 1.5,
          size: isHeart ? 9 : 4 + Math.random() * 4,
          color: isHeart ? '#ff758f' : '#ffd166',
          shape: isHeart ? 'heart' : 'sparkle',
          opacity: 1,
          decay: 0.035 + Math.random() * 0.02
        });
      }
    });
  }

  drawHeart(ctx, x, y, size, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = Math.max(0, opacity);
    ctx.fillStyle = color;
    ctx.beginPath();
    const topCurveHeight = size * 0.3;
    ctx.moveTo(0, topCurveHeight);
    ctx.bezierCurveTo(0, 0, -size / 2, 0, -size / 2, topCurveHeight);
    ctx.bezierCurveTo(-size / 2, (size + topCurveHeight) / 2, 0, size, 0, size);
    ctx.bezierCurveTo(0, size, size / 2, (size + topCurveHeight) / 2, size / 2, topCurveHeight);
    ctx.bezierCurveTo(size / 2, 0, 0, 0, 0, topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  drawSparkle(ctx, x, y, size, color, opacity) {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = Math.max(0, opacity);
    ctx.fillStyle = color;
    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      ctx.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
      ctx.lineTo(
        Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3),
        Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3)
      );
    }
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  loop() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    // Update & render main confetti particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= p.friction;
      p.rotation += p.rotationSpeed;
      p.opacity -= p.decay;

      if (p.opacity <= 0 || p.y > window.innerHeight + 50) {
        this.particles.splice(i, 1);
        continue;
      }

      if (p.shape === 'heart') {
        this.drawHeart(this.ctx, p.x, p.y, p.size, p.color, p.opacity);
      } else {
        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.globalAlpha = Math.max(0, p.opacity);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        this.ctx.restore();
      }
    }

    // Update & render cursor sparkles
    for (let i = this.cursorParticles.length - 1; i >= 0; i--) {
      const cp = this.cursorParticles[i];
      cp.x += cp.vx;
      cp.y += cp.vy;
      cp.opacity -= cp.decay;

      if (cp.opacity <= 0) {
        this.cursorParticles.splice(i, 1);
        continue;
      }

      if (cp.shape === 'heart') {
        this.drawHeart(this.ctx, cp.x, cp.y, cp.size, cp.color, cp.opacity);
      } else {
        this.drawSparkle(this.ctx, cp.x, cp.y, cp.size, cp.color, cp.opacity);
      }
    }

    this.animationId = requestAnimationFrame(() => this.loop());
  }
}

window.confetti = new ConfettiEngine();
