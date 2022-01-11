import { TestCase, TestSuite } from 'ts-nanotest';
import Api from './api';

export default class ExampleAcceptance extends TestSuite {

  private api: Api;

  beforeEach(): void {
    this.api = new Api();
  }

  tests(): TestCase[] {
    return [
      this.skip('skipped test', () => {
        this.api.exampleApi();
      }),
    ];
  }
}
