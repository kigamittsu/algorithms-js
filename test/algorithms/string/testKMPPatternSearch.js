/* eslint-env mocha */
const kmpPatternSearch = require('../../../src/algorithms/string/kmp_pattern_search');
const assert = require('assert');

describe('KMP Pattern Search', () => {
  it('should find KMP Pattern', () => {
    const target1 = 'THIS IS A TEST';
    const pattern1 = 'TEST';
    const target2 = 'AABABBABABCAB';
    const pattern2 = 'ABABCA';

    const index1 = kmpPatternSearch(target1, pattern1);
    assert.equal(index1, 10);
    const index2 = kmpPatternSearch(target2, pattern2);
    assert.equal(index2, 6);
  });
  it('should return -1 if not find KMP Pattern', () => {
    const target1 = 'AABAACAADAABAABA';
    const pattern1 = 'AACAAAE';
    const index1 = kmpPatternSearch(target1, pattern1);
    assert.equal(index1, -1);
  });
});
