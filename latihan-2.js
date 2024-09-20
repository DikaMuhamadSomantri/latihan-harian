function getCount(str) {
  const vowels = str.match(/[aeiou]/g);

  return vowels ? vowels.length : 0;
}

console.log(getCount("dddd"));
