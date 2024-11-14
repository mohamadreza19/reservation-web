import Typewriter from 'typewriter-effect/dist/core';

export function typewriterEffect(id: string) {
  console.log('bivv');
  const writer = new Typewriter('#' + id, {
    autoStart: true,
    loop: false,
  });

  writer
    .typeString('منا محمدی')
    .pauseFor(2000) // Pause for 2 seconds after typing
    // Delete the text
    // .typeString('World')  // Type the next string

    // .deleteAll() // Delete it again
    .callFunction(() => {
      // Custom function to remove the cursor
      const element = document.querySelector(`#${id} .Typewriter__cursor `);
      if (element) {
        element.classList.add('hidden');
      }
    })
    .start();

  return writer;
}
