const greeting = [
    'good morning', 'good day', 'how do you do', 'whats wiggly up', 'good friggin morning', 'is it good day', 'how do you are do', 'whats the up up', 
];

let randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];

// exports.randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];
// console.log(randomGreeting);

exports.websiteGreeting = () => randomGreeting;

