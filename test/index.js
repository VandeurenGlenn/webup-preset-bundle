var chai = require('chai');
var assert = chai.assert;
var bundle = require('./../dist/bundle-node');

var preset = bundle({dest: 'build', entry: ''});
var keys = ['dest', 'entry', 'fragments', 'cwd', 'inlineJs',
            'inlineCss', 'bundle', 'strategy', 'urlMapper'];

describe('description', () => {

  it('Is an array', () => {
    assert.isArray(preset, 'preset is an Array.');
  });

  it('Exports 1 objects', () => {
    assert.lengthOf(preset, 1, 'array has length of 1');
    // check if objects
    assert.isObject(preset[0], 'preset[0] is an object.');
  });

  it('preset[0] contains all keys', () => {
    assert.hasAllKeys(preset[0], keys, keys);
  });

});
