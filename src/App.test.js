import { React, ReactDOM, renderer, configure, shallow, Adapter, enzymeSerializer } from './test/config';
import { App } from './App';

describe('just a fake test', () => {
  test('fake test', () => {
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });
});
