import 'particles.js';
import Typewriter from 'typewriter-effect/dist/core';

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', './particles.json', function() {
  console.log('callback - particles.js config loaded');
});

const typeWriter = new Typewriter('#typewriter', {
  wrapperClassName: 'type-wrapper',
  cursorClassName: 'type-cursor',
  loop: true,
});

typeWriter.typeString('Hello World!').start();
