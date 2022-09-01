import tap from 'tap';
import Api from './api';

let api: Api;

void tap.beforeEach(() => {
  api = new Api();
});

void tap.test('example test', (t) => {
  api.exampleApi();
  t.end();
});
