var chalk = require("chalk");

var message = "Hello " + chalk.blue("World") + chalk.bgRed(" :)");
console.log(message);