import '../styles/pop-intro.css';

(() => {
  const intro = document.querySelector('[data-pop-intro]');
  const field = document.querySelector('[data-pop-intro-field]');

  if (!intro || !field) {
    return;
  }

  const assets = [
    {
      src: 'images/cdi-logo-transparent.png',
      alt: 'CDI logo',
    },
    {
      src: 'images/cdi-logo-transparent.png',
      alt: 'CDI logo',
    },
    {
      src: 'images/cdi-logo-transparent.png',
      alt: 'CDI logo',
    },
    {
      src: 'images/cdi-logo-transparent.png',
      alt: 'CDI logo',
    },
    {
      src: 'images/chip-character-dizzy.png',
      alt: 'Dizzy chip character',
    },
    {
      src: 'images/chip-character-sad.png',
      alt: 'Sad chip character',
    },
    {
      src: 'images/chip-character-angry.png',
      alt: 'Angry chip character',
    },
    {
      src: 'images/chip-character-knockout.png',
      alt: 'Knockout chip character',
    },
    {
      src: 'images/chip-character-heart-eyes.png',
      alt: 'Heart eyes chip character',
    },
    {
      src: 'images/chip-character-shades.png',
      alt: 'Shades chip character',
    },
    {
      src: 'images/chip-character-surprised.png',
      alt: 'Surprised chip character',
    },
    {
      src: 'images/chip-character-smile.png',
      alt: 'Smiling chip character',
    },
  ];

  function seededNoise(row, column, salt = 0) {
    const value = Math.sin(row * 127.1 + column * 311.7 + salt * 74.7) * 43758.5453;

    return value - Math.floor(value);
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const introDuration = prefersReducedMotion ? 900 : 2500;
  const baseSize = window.innerWidth < 640 ? 76 : 104;
  const step = Math.round(baseSize * 0.72);
  const columnCount = Math.ceil(window.innerWidth / step) + 4;
  const rowCount = Math.ceil(window.innerHeight / step) + 4;
  const startX = -step;
  const startY = -step;

  const fragment = document.createDocumentFragment();

  for (let row = 0; row < rowCount; row += 1) {
    for (let column = 0; column < columnCount; column += 1) {
      const asset = assets[Math.floor(seededNoise(row, column, 4) * assets.length)];
      const image = document.createElement('img');
      const offsetX = row % 2 === 0 ? 0 : step / 2;
      const x = startX + column * step + offsetX;
      const y = startY + row * step;
      const delay = Math.round(seededNoise(row, column, 1) * 1700);
      const rotation = Math.round(seededNoise(row, column, 2) * 34) - 17;
      const size = Math.round(baseSize * (0.88 + seededNoise(row, column, 3) * 0.2));

      image.className = 'pop-intro__image';
      image.src = asset.src;
      image.alt = '';
      image.draggable = false;
      image.style.setProperty('--pop-x', `${x}px`);
      image.style.setProperty('--pop-y', `${y}px`);
      image.style.setProperty('--pop-size', `${size}px`);
      image.style.setProperty('--pop-delay', `${prefersReducedMotion ? Math.min(delay, 180) : delay}ms`);
      image.style.setProperty('--pop-rotation', `${rotation}deg`);

      fragment.append(image);
    }
  }

  field.append(fragment);

  window.setTimeout(() => {
    intro.remove();
  }, introDuration);
})();
