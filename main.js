(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Nav: solid background once scrolled, mobile toggle
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".nav__toggle");
  const links = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  // Dragonslayer fills with blood as you scroll
  const blood = document.getElementById("blood");
  const BLADE_TOP = 118, BLADE_LEN = 278;
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
    blood.setAttribute("height", (BLADE_LEN * p).toFixed(1));
    blood.setAttribute("y", BLADE_TOP);
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
  };
  let scrollQueued = false;
  window.addEventListener("scroll", () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => { scrollQueued = false; onScroll(); });
  }, { passive: true });
  onScroll();

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  document.getElementById("year").textContent = new Date().getFullYear();

  // Embers rising from the eclipse — kept cheap: pre-rendered glow sprite,
  // capped particle count, 1x resolution, ~30fps, paused when not visible.
  const canvas = document.getElementById("embers");
  const ctx = canvas.getContext("2d");
  if (reduceMotion || !ctx) return;

  const makeSprite = (hue) => {
    const c = document.createElement("canvas");
    c.width = c.height = 16;
    const g = c.getContext("2d");
    const grad = g.createRadialGradient(8, 8, 0, 8, 8, 8);
    grad.addColorStop(0, `hsla(${hue}, 100%, 70%, 1)`);
    grad.addColorStop(0.35, `hsla(${hue}, 100%, 50%, .6)`);
    grad.addColorStop(1, `hsla(${hue}, 100%, 40%, 0)`);
    g.fillStyle = grad;
    g.fillRect(0, 0, 16, 16);
    return c;
  };
  const sprites = [makeSprite(8), makeSprite(24)];

  let w = 0, h = 0, embers = [], visible = true, last = 0, rafId = 0;
  const spawn = (anywhere) => ({
    x: Math.random() * w,
    y: anywhere ? Math.random() * h : h + 10,
    s: Math.random() * 6 + 3,
    vy: Math.random() * 1.1 + 0.5,
    drift: Math.random() * Math.PI * 2,
    life: Math.random() * 0.6 + 0.4,
    sprite: sprites[Math.random() < 0.7 ? 0 : 1],
  });
  const resize = () => {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w; canvas.height = h;
    const count = Math.round(Math.min(40, (w * h) / 30000));
    embers = Array.from({ length: count }, () => spawn(true));
  };

  const tick = (t) => {
    rafId = 0;
    if (!visible || document.hidden) return;
    rafId = requestAnimationFrame(tick);
    if (t - last < 33) return; // ~30fps is plenty for drifting embers
    last = t;
    ctx.clearRect(0, 0, w, h);
    for (const e of embers) {
      e.y -= e.vy;
      e.drift += 0.03;
      e.x += Math.sin(e.drift) * 0.5;
      ctx.globalAlpha = Math.max(0, Math.min(1, e.y / h)) * e.life;
      ctx.drawImage(e.sprite, e.x, e.y, e.s, e.s);
      if (e.y < -10) Object.assign(e, spawn(false));
    }
    ctx.globalAlpha = 1;
  };
  const start = () => { if (!rafId && visible && !document.hidden) rafId = requestAnimationFrame(tick); };

  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; start(); }).observe(canvas);
  document.addEventListener("visibilitychange", start);
  let resizeTimer;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); });
  resize();
  start();
})();
