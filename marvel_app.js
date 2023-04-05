let play_the_game = confirm(`Open the console before proceding:-
F12(function key)
Ctrl+Shift+I`); 

let okk = confirm(`Press "e" anytime to exit the Game`);


const userName = prompt(`What is your name? `);


console.log(`Welcome ${userName}
Let's play "Do You Know Marvel Cinematic Universe"`);

let score = 0;
let count = 0;
let userAnswer = ``;

function play(question, A, B, C, D, answer) {
     count += 1;
     console.log(`     `);
     console.log(`${count}: ${question}`);
     console.log(`Options : `);
     console.log(`A: ${A}`);
     console.log(`B: ${B}`);
     console.log(`C: ${C}`);
     console.log(`D: ${D}`);
     console.log(`     `);


     while (true) {
          userAnswer = prompt(`Answer : `);
          if(userAnswer === `e` || userAnswer === `E`){
               break;
          }
          if (userAnswer === `a` || userAnswer === `b`) {
           break;
          }
          if (userAnswer === `c` || userAnswer === `d`) {
           break;
          }
          if (userAnswer === `A` || userAnswer === `B`) {
           break;
          }
          if (userAnswer === `C` || userAnswer === `D`) {
           break;
          }
     }


     if (userAnswer.toUpperCase() === answer) {
          console.log(`---------------`);
          console.log(`|Correct Answer|`);
          console.log(`---------------`);
          score += 1;
     } else {
          console.log(`---------------`);
          console.log(`| Wrong Answer |`);
          console.log(`---------------`);
     }
     if (count === arr.length) {
          if (score < highScore - 2) {
               console.log(`YAY!!!!! || Your Score is ${(score / highScore) * 100}% || High Score is still 90% by Vashu Malik`);
          } else {
               console.log(`HURRAY!!!!! || You Beat the High Score 90% of Vashu Malik`);
          }
     }
     console.log(`     `);
     console.log(`Your score is ${score}`)
     console.log(`____________________________________________________________`)
     console.log(`     `);
}


const arr = [{
  question: `Who is the villain in Guardians of the Galaxy: Vol 1?`,
  A: `Thanos`,
  B: `Ronan The Accuser`,
  C: `Obidiah Stane`,
  D: `Yondu Udonta`,
  answer: `B`
}, {
  question: `What type of scientist is Jane Foster in Thor?`,
  A: `Astronomer`,
  B: `Biologist`,
  C: `Chemist`,
  D: `Dioptrics`,
  answer: `A`
}, {
  question: `What does S.H.I.E.L.D stand for?`,
  A: `Space Human Investigation on Energy, Light and Deities.`,
  B: `Strategic Hero Intervention, Enforcement and Logistics Division`,
  C: `Strategic Homeland Intervention, Enforcement and Logistics Division`,
  D: `Stones Hidden In Extraterrestrial Lands and Demographics`,
  answer: `C`
}, {
  question: `What type of vehicle did Thanos briefly use in the comic books and make a brief appearance in the Loki series?`,
  A: `A tank with “Infinity” written on it`,
  B: `A helicopter with “Thanos” written on the side`,
  C: `A car with “perfectly balanced” on the side`,
  D: `A motorbike with “Titan” on the side`,
  answer: `B`
}, {
  question: `Ryan Reynolds acted in two Marvel movie series, one was the Deadpool movie series, the other was:`,
  A: `Daredevil`,
  B: `Captain America: Winter Soldier`,
  C: `Blade`,
  D: `Guardians of the galaxy`,
  answer: `C`
}, {
  question: `In which order are the Infinity Stones revealed in the Marvel Cinematic Universe?`,
  A: `Time Stone, Space Stone, Power Stone, Soul Stone, Reality Stone and Mind Stone`,
  B: `Power Stone, Reality Stone, Time Stone, Space Stone, Mind Stone and Soul Stone`,
  C: `Reality Stone, Time Stone, Mind Stone, Soul Stone, Power Stone and Space Stone`,
  D: `Space Stone, Mind Stone, Reality Stone, Power Stone, Time Stone and Soul Stone`,
  answer: `D`
}, {
  question: `During which war did Captain America get his superhuman abilities?`,
  A: `Civil War`,
  B: `World War I`,
  C: `Worlds War II`,
  D: `The Cold War`,
  answer: `C`
}, {
  question: `What is the name of Peter Quill’s home planet?`,
  A: `Mordor`,
  B: `Goddricks Hollow`,
  C: `Earth`,
  D: `Morag`,
  answer: `C`
}, {
  question: `Which of the following characters did not disappear during the ”blip”?`,
  A: `Spiderman`,
  B: `Black Panther`,
  C: `Doctor Strange`,
  D: `Rocket`,
  answer: `D`
}, {
  question: `Which actor played Eddie Brock in Venom (2018)?`,
  A: `Tom Holland`,
  B: `Tom Hardy`,
  C: `Tom Hiddleston`,
  D: `Tom Hanks`,
  answer: `B`
}, {
  question: `Which of the following characters dies in Avengers (2012)?`,
  A: `Nick Fury`,
  B: `Steve Rogers`,
  C: `Phil Coulson`,
  D: `Maria Hill`,
  answer: `C`
}, {
  question: `Which of the following items of Jewelry does Ben from Fantastic 4 try to pick up from the pavement?`,
  A: `Ring`,
  B: `Necklace`,
  C: `Earring`,
  D: `Bangle`,
  answer: `A`
}, {
  question: `What is Thor’s mother’s name?`,
  A: `Frya`,
  B: `Feera`,
  C: `Fridda`,
  D: `Frigga`,
  answer: `D`
}, {
  question: `Where was Natasha Romanoff born?`,
  A: `Germany`,
  B: `Russia`,
  C: `United States of America`,
  D: `Wakanda`,
  answer: `B`
}, {
  question: `In which Marvel Phase was Ant Man introduced?`,
  A: `Phase 1`,
  B: `Phase 2`,
  C: `Phase 3`,
  D: `Phase 4`,
  answer: `B`
}, {
  question: `What is Mjölnir?`,
  A: `Loki’s Scepter`,
  B: `Captain America’s Shield`,
  C: `Winter Soldier’s Arm`,
  D: `Thor’s Hammer`,
  answer: `D`
}, {
  question: `In which of the following movies does the character Taserface appear?`,
  A: `Blade`,
  B: `X-Men`,
  C: `Guardians of the Galaxy Vol 2`,
  D: `Deadpool`,
  answer: `C`
}, {
  question: `Which movie does Nicolas Cage star in as Johnny Blaze:`,
  A: `Ghostrider`,
  B: `Daredevil`,
  C: `Iron Man 3`,
  D: `Avengers: Age of Ultron`,
  answer: `A`
}, {
  question: `In which movie does Stan Lee appear in a library with headphones on?`,
  A: `Ant Man and Wasp`,
  B: `Thor: The Dark World`,
  C: `Spiderman: Homecoming`,
  D: `The Amazing Spiderman`,
  answer: `D`
}, {
  question: `How did Steve Rogers and Sam Wilson meet for the first time?`,
  A: `While running`,
  B: `At a bar`,
  C: `In the army`,
  D: `At a museum`,
  answer: `A`
}];



const highScore = arr.length;

for (let i = 0; i < arr.length; i++) {
     if(userAnswer === `e` || userAnswer === `E`){
          break;
     }
     const asking = arr[i];
     play(asking.question, asking.A, asking.B, asking.C, asking.D, asking.answer);
}