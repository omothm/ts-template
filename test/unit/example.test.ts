import assert from 'assert';
import { TestCase, TestSuite } from 'ts-nanotest';
import { exampleFunction } from '../../src';

export default class ExampleTest extends TestSuite {

  tests(): TestCase[] {
    return [

      this.test('example test', () => {
        const answer = 42;

        const result = exampleFunction();

        assert.equal(result, answer);
      }),
    ];
  }
}
