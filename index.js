const core = require('@actions/core');

const name = core.getInput('name');
const output = `Hello ${name}`;

core.setOutput('greeting', output);
