const kmpPatternSearch = (target, pattern) => {
  const table = createTable(pattern);

  let i = 0,
    p = 0;
  while (i < target.length && p < pattern.length) {
    if (target[i] === pattern[p]) {
      i++;
      p++;
    } else if (p === 0) {
      i++;
    } else {
      p = table[p];
    }
  }
  if (p === pattern.length) {
    return i - p;
  }
  return -1;
}
const createTable = (pattern) => {
  const table = [0];
  let j = 0;
  for (let i = 1; i < pattern.length; i++) {
    if (pattern[i] === pattern[j]) {
      table[i] = j++;
    } else {
      table[i] = j;
      j = 0;
    }
  }
  return table;
}
module.exports = kmpPatternSearch;
