/**
 * Mood Based Message generator
 * Input mood -> get message
 * 
 * for example Sad - Eat Chocalate
 *           Happy - Go Party
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const messages = {
    happy: "Go party",
    sad: "Eat chocolate",
    anger: "Take a deep breath",
    tired: "take a nap"
};

rl.question("what's your mood?", function(mood){
    const result = messages[mood.toLowerCase()];

    console.log(result || "Mood not recognized");

    rl.close();
});