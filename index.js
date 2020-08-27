const toTitleCase = require('to-title-case');

// console.log(toTitleCase);

const lower = 'the stormlight archive book one: the way of kings';
const title = toTitleCase(lower);

console.log(title); // === The Stormlight Archive Book One: The Way Of Kings ooh wow that actually did better than I assumed it would

