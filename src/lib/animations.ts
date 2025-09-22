// Simple entrance animations for sections and buttons
export async function initSiteAnimations() {
  if (typeof window === 'undefined') return;

  // Dynamically import anime so we can handle both named/default exports depending on bundler
  const animeModule = await import('animejs');
  // animejs may export as default or named; normalize
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const anime: any = (animeModule && (animeModule.default || animeModule)) as any;

  // Fade/slide in sections when they enter viewport
  const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const el = entry.target as HTMLElement;
      if (entry.isIntersecting) {
        anime.remove(el);
        anime({
          targets: el,
          translateY: [30, 0],
          opacity: [0, 1],
          easing: 'easeOutQuad',
          duration: 700,
          delay: 60,
        });
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.12 });

  sections.forEach((s) => observer.observe(s));

  // Smooth hover for buttons
  const buttons = Array.from(document.querySelectorAll('a, button')) as HTMLElement[];
  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      anime.remove(btn);
      anime({ targets: btn, scale: 1.03, duration: 250, easing: 'easeOutQuad' });
    });
    btn.addEventListener('mouseleave', () => {
      anime.remove(btn);
      anime({ targets: btn, scale: 1, duration: 250, easing: 'easeOutQuad' });
    });
  });

  // Vertical parallax between sections on wheel / touch — lightweight
  let ticking = false;
  const parallaxFactor = 0.08;
  // Respect reduced motion preference (declare early so handlers can use it)
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Rocket scroll-follow behavior: rockets translate based on scroll delta and reverse when scrolling up
  let lastScroll = window.scrollY;
  const rocketSpeedFactor = 0.5; // multiplier - tweak to increase responsiveness
  const rockets = Array.from(document.querySelectorAll('.bg-rocket')) as HTMLElement[];

  // initialize rocket state: record each rocket's document-level initial top so we can wrap/respawn
  rockets.forEach((r) => {
    // store initial inline transform so we can compose with scroll-driven translate
    r.dataset.initTransform = r.style.transform || '';
    r.dataset.rocketOffset = '0';
    // compute initial absolute top (relative to document)
    const rect = r.getBoundingClientRect();
    const initTop = rect.top + window.scrollY;
    r.dataset.initTop = String(initTop);
    r.style.willChange = 'transform, opacity';
  });

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrolled = window.scrollY;
      const delta = scrolled - lastScroll;

      // apply parallax to sections
      sections.forEach((s, i) => {
        const rect = s.getBoundingClientRect();
        const offset = (rect.top + window.scrollY) - scrolled;
        const translateY = Math.round((offset) * parallaxFactor);
        s.style.transform = `translateY(${translateY}px)`;
      });

      // update rockets based on scroll delta (negative delta -> move down, positive -> move up)
      if (!prefersReduced && rockets.length) {
        rockets.forEach((r) => {
          const prev = Number(r.dataset.rocketOffset || 0);
          // scroll down (delta>0) should move rockets upward => subtract
          let next = prev - delta * rocketSpeedFactor;

          // compute absolute position based on stored initTop + offset
          const initTop = Number(r.dataset.initTop || 0);
          const absoluteY = initTop + next; // document-space Y

          // If rocket moved far above the viewport, respawn it below; if moved far below, respawn above
          const buffer = 160; // extra px before respawn
          const aboveLimit = scrolled - buffer;
          const belowLimit = scrolled + window.innerHeight + buffer;

          if (absoluteY < aboveLimit) {
            // respawn below viewport at a random offset
            const spawnY = scrolled + window.innerHeight + Math.random() * 300 + 80;
            next = spawnY - initTop;
          } else if (absoluteY > belowLimit) {
            // respawn above viewport
            const spawnY = scrolled - Math.random() * 300 - 80;
            next = spawnY - initTop;
          }

          r.dataset.rocketOffset = String(next);
          // compose with initial transform
          const base = r.dataset.initTransform || '';
          r.style.transform = `${base} translateY(${next}px)`;
        });
      }

      lastScroll = scrolled;
      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Initialize small entrance for hero children
  // (reuse prefersReduced declared earlier)
  if (!prefersReduced) {
    const hero = document.getElementById('hero');
    if (hero) {
      // blobs
      const blobs = Array.from(hero.querySelectorAll('.blob')) as HTMLElement[];
      const heroImage = hero.querySelector('img') as HTMLElement | null;
      const title = hero.querySelector('[data-animate="hero-title"]') as HTMLElement | null;
      const sub = hero.querySelector('[data-animate="hero-sub"]') as HTMLElement | null;
      const buttons = Array.from(hero.querySelectorAll('[data-animate="hero-buttons"] *')) as HTMLElement[];

      // dramatic entrance for hero: blobs swoop, image scale, title split reveal, buttons fade
      const tl = anime.timeline({ easing: 'easeOutExpo' });

      tl.add({
        targets: blobs,
        translateX: (el, i) => [ (i % 2 === 0 ? -120 : 120), 0],
        translateY: (el, i) => [ (i % 2 === 0 ? -40 : 40), 0],
        opacity: [0, 0.55],
        scale: [0.7, 1],
        duration: 900,
        delay: anime.stagger(80)
      }, 0);

      if (heroImage) {
        tl.add({
          targets: heroImage,
          scale: [0.85, 1],
          rotate: ['-6deg', '0deg'],
          opacity: [0, 1],
          duration: 900
        }, 120);
      }

      if (title) {
        tl.add({
          targets: title,
          translateY: [40, 0],
          opacity: [0, 1],
          duration: 700
        }, 240);
      }

      if (sub) {
        tl.add({
          targets: sub,
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 700
        }, 320);
      }

      if (buttons && buttons.length) {
        tl.add({
          targets: buttons,
          translateY: [12, 0],
          opacity: [0, 1],
          delay: anime.stagger(80),
          duration: 600
        }, 420);
      }
    }
  }
}
