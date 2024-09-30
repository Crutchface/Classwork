const greeting = [
    'Elminster Aumar: "Magic is the most powerful force in the universe, but it can also be a double-edged sword."',

    'Mordenkainen: "Knowledge is power, but wisdom is knowing how to use that power."',
    
    'Drizzt DoUrden: "The world is a harsh place, but it is also filled with beauty and wonder."',
    
    'Tasha: "The mind is a canvas, and imagination is the brush."',
    
    'Vecna: "True power lies not in might, but in the manipulation of fate itself."',
    
    'Raistlin Majere: "A true mage seeks not only knowledge, but the understanding that comes with it."',
    
    'Khelben Blackstaff Arunsun: "The weave of magic connects us all; respect it or suffer the consequences."',
    
    'Tiamat: "Fear is the greatest weapon; it can bring even the strongest to their knees."',
        
    'Lareth the Beautiful: "Beauty can mask the darkest of intentions."',
    
    'Volo Geddarm: "Adventure is worth more than gold; its the stories we tell that enrich our lives."',
    
    'Bhaal: "Death is merely the beginning of a new chapter in the great cycle."',
    
    'Fizban the Fabulous: "Even the smallest creature can change the course of destiny."',
    
    'Luna (a character inspired by the game): "In darkness, we find our true selves."',
    
    'Asmodeus: "In every deal, there is a cost; be sure you can afford it."',
    
    'The Raven Queen: "Life is but a fleeting shadow; embrace the darkness that follows."',
    
    'Sylgar (an NPC from The Wild Beyond the Witchlight): "Joy can be found even in the most unexpected places."',
    
    'Kobold King: "We may be small, but our hearts are mighty!"',
    
    'Gromph Baenre: "The path to power is fraught with peril; only the bold survive."',
    
    'Eilistraee: "In the dance of life, every step is a choice that shapes our fate."'
];

let randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];

// exports.randomGreeting = greeting[Math.floor(Math.random()*greeting.length)];
// console.log(randomGreeting);

exports.websiteGreeting = () => randomGreeting;

