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
  delay: 40,
});

typeWriter
  .pauseFor(2000)
  .typeString('Hi, my name is Santiago Rodriguez')
  .pauseFor(2500)
  .deleteAll(40)
  .pauseFor(2000)
  .typeString('I\'m a full-stack web developer that loves to create things')
  .pauseFor(2000)
  .deleteAll(40)
  .pauseFor(2000)
  .typeString('I am a creator, an innovator, and a great team player')
  .pauseFor(2000)
  .deleteAll(40)
  .pauseFor(2000)
  .start()

