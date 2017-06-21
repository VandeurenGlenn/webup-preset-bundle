var chai = require('chai');
var assert = chai.assert;
var bundle = require('./../dist/bundle-node');
var normalize = require('path').normalize;

var preset = bundle({dest: 'build', entry: '', prefix: 'build/bundled'});
var keys = ['dest', 'entry', 'inlineJs',
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

  it('returns the expected path', () => {
    assert.equal(preset[0].dest, normalize('build/bundled/build'));
  });

});
