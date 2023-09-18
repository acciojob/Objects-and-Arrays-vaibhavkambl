const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
// Create a reference to the players array
 const team = players;

// Create a shallow copy of the players array
	const team1 = players.slice();

// Create a shallow copy of the person object
const cap1 = Object.assign({}, person);

 // Test by modifying players and person
players.push("Sarah"); 

person.name = "John Doe";

// Testing the variables
console.log("team:", team); 
console.log("team1:", team1);
console.log("cap1:", cap1); 
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
