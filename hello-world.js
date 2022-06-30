// Greeting to print in console
const greeting = "Hello World!";
const arrayNames = ["Juan", "Antonio", "Marcos"];
const person = {
  id: 1,
  years: 20,
  printName() {
    console.log("My name is Antonio");
  }
};

// Function to execute prints
helloWorld(greeting);

/**
 * Print some greeting in console
 * @param {string} greeting Greeting to display to user
 */
function helloWorld(greeting) {
  console.log("Person", person);
  arrayNames.map(name => console.log(name));
  for (let i = 0; i < arrayNames.length; i++) {
    const name = arrayNames[i];
    console.log(name);
  }
  if(greeting === "Hi") {
    console.log("Hi Arkon World!");
  } else console.log("Say " + greeting);
}
