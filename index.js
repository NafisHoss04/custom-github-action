import core from '@actions/core';
import github from '@actions/github';

const name = core.getInput('name');
const output = `Hello ${name}`;

core.setOutput('greeting', output);
