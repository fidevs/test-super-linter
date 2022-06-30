// Greeting to print in console
const greeting = "Hello World!";
const array_Names = ["Juan", "Antonio", "Marcos"];
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
  array_Names.map(name => console.log(name));
  for (let i = 0; i < array_Names.length; i++) {
    const name = array_Names[i];
    console.log(name);
  }
  if(greeting === "Hi") {
    console.log("Hi World!");
  } else console.log("Say " + greeting);
}
