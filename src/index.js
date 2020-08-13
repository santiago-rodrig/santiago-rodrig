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

typeWriter
  .typeString('Hi, my name is Santiago Rodriguez')
  .pauseFor(2500)
  .deleteAll(50)
  .typeString('I\'m a full-stack web developer that loves to create things')
  .pauseFor(2500)
  .deleteAll(50)
  .typeString('I am a creator, an innovator, and a great team player')
  .pauseFor(2500)
  .deleteAll(50)
  .start()

