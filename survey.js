const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('My name and/or nickame is: ', (name) => {
  rl.question('I [ DO ] / [ DO NOT ] enjoy activities (enter one) ', (doEnjoyActivities) => {
    rl.question('I enjoy listening to the sound of: ', (sound) => {
      rl.question('I prefer to obtain nutrients from: ', (nutrients) => {
        rl.question('For recreation, I enjoy: ', (recreation) => {
          rl.question('My preferred Earth mammal is: ', (animal) => {
            console.log("Use the following profile text for optimal success.");
            console.log("-----");
            console.log(`Hello! I am ${name} and I am a normal person. I ${doEnjoyActivities} enjoy activities such as: listening to ${sound}, obtaining nutrients from ${nutrients}, ${recreation}, and so forth. I admire the ${animal} greatly for its acid blood.`);
            rl.close();
          });
        });
      });
    });
  });
});



// THIS IS ALLEGEDLY A MUCH BETTER WAY TO DO THIS
// const question1 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('q1 What do you think of Node.js? ', (answer) => {
//       console.log(`Thank you for your valuable feedback: ${answer}`)
//       resolve()
//     })
//   })
// }

// const question2 = () => {
//   return new Promise((resolve, reject) => {
//     rl.question('q2 What do you think of Node.js? ', (answer) => {
//       console.log(`Thank you for your valuable feedback: ${answer}`)
//       resolve()
//     })
//   })
// }

// const main = async () => {
//   await question1()
//   await question2()
//   rl.close()
// }

// main()