import tap from 'tap';
import exampleFunction from './example';

void tap.test('example test', (t) => {
  const answer = 42;

  const result = exampleFunction();

  t.equal(result, answer);
  t.end();
});
