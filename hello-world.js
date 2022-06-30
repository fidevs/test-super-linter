// Greeting to print in console
const greeting = "Hello World!";
const arrayNames = ["Juan", "Antonio", "Marcos"];
const person = new Object();

// Function to execute prints
helloWorld(greeting);

/**
 * Print some greeting in console
 * @param {string} greeting Greeting to display to user
 */
function helloWorld(greeting) {
  console.log("Person", person);
  for (let i = 0; i < arrayNames.length; i++) {
    const name = arrayNames[i];
    console.log(name);
  }
  if(greeting === "Hi") {
    console.log("Hi World!");
  } else console.log("Say " + greeting);
}
