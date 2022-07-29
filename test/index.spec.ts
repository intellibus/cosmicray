import { suite } from 'uvu';
import * as assert from 'uvu/assert';
import { project } from '../src';

const test = suite('Cosmicray Initial Setup');

test('Project Name is Correct', async () => {
  assert.equal(project, 'cosmicray');
});

export const { run } = test;
