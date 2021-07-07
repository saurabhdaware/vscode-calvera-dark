const red = (message) => `\u001b[31m${message}\u001b[39m`;
const cyan = (message) => `\u001b[36m${message}\u001b[39m`;
const boldCyan = (message) => `\u001b[1m\u001b[36m${message}\u001b[39m\u001b[22m`;
const green = (message) => `\u001b[32m${message}\u001b[39m`;    
const boldGreen = (message) => `\u001b[1m\u001b[32m${message}\u001b[39m\u001b[22m`;
const boldRed = (message) => `\u001b[1m\u001b[31m${message}\u001b[39m\u001b[22m`;
const yellow = (message) => `\u001b[33m${message}\u001b[39m`;
const boldYellow = (message) => `\u001b[1m\u001b[33m${message}\u001b[39m\u001b[22m`;
const grey = (message) => `\u001b[90m${message}\u001b[39m`;
const boldGrey = (message) => `\u001b[1m\u001b[90m${message}\u001b[39m\u001b[22m`;
const bold = (message) => `\u001b[1m${message}\u001b[22m`;
const blue = (message) => `\u001b[34m${message}\u001b[39m`;
const boldBlue = (message) => `\u001b[1m\u001b[34m${message}\u001b[39m\u001b[22m`;

// TERMINAL COLORS TEST
console.log(boldGreen('green'));
console.log(boldRed('red'));
console.log(boldYellow('yellow'));
console.log(boldGrey('grey'));
console.log(boldCyan('cyan'));
console.log(boldBlue('blue'));
console.log(bold('bold'));
console.log(grey('grey'));
console.log(blue('blue'));
console.log(yellow('yellow'));
console.log(green('green'));
console.log(red('red'));
console.log(cyan('cyan'));
console.log('normal');