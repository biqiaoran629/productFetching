const { removeCommas } = require('./utils');

describe('utils', () => {
  it('should be able to remove commas from an integer string', () => {
    expect(removeCommas('1,234,567.33')).toEqual('1234567.33');
  });

  it('should not change the integer string if there is no comma', () => {
    expect(removeCommas('567.33')).toEqual('567.33');
  });
});