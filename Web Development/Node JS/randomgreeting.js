const greeting = [
    'good morning', 'good day', 'how do you do', 'whats up', 
];

let randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];

// exports.randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];
// console.log(randomGreeting);

exports.websiteGreeting = () => randomGreeting;

