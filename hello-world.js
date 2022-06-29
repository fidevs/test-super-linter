//Greeting to print in console
const greeting = 'Hello World!';

// Function to execute prints
helloWorld(greeting);

/**
 *Print some greeting in console
 *@param {string} greeting Greeting to display to user
 */
function helloWorld(greeting) {
  if(greeting === 'Hi') {
    console.log('Hi World!');
  } else console.log('Say ' + greeting);
}
