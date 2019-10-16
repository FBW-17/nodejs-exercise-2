// Load external resources
const { formatString } = require('./formatting');
const { showHelp } = require('./messaging');

// Handle input
let result = '';
const args = process.argv.slice(2); // extract arguments 
                                    // given to our script

// no arguments? get out of here
// (=> this was not required by the task, just added for elegance)
if(args.length === 0) {
    showHelp();
    process.exit();
}

// help requested? for sure...
let helpParam = '--help';
if (args.includes(helpParam)) {
    showHelp();
    // remove the argument from args 
    // (= so it will never be used as the string for formatting)
    args.splice(args.indexOf(helpParam), 1);
}

// our input string will be handled by our function from formatting.js
let strToFormat = args[0];
result = formatString(strToFormat);

console.log(result);