const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question ('What is a favorite activity of yours? ', (activity) => {
    console.log(`${activity}`);
    rl.question('What do you listen to with your activity? ', (music) => {
      console.log(`${music}`);
      rl.question('Which meal is your favorite (eg: dinner brunch, etc.'), (meal) => {
        console.log(`${meal}`);
        rl.question('What do you eat for that meal? ', (food) => {
          console.log(`${food}`);
          rl.question('Which sport is your favorite? ', (sport) => {
            console.log(`${sport}`);
            rl.question('What is your desired superpower? ', (superpower) => {
              console.log(`${superpower}`);
              console.log(`${name} enjoys ${activity} and listening to ${music}. \n Can demolish ${food} when its ${meal} time. \n Plays ${sport} and desires to have ${superpower}`);
              console.log(`Thank you for all the answers, you lovely person!`);
              rl.close();
            });
          });
        });
      });
    });
  });
});