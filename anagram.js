const isAnagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }

  str1 = str1.trim().toLowerCase();
  str2 = str2.trim().toLowerCase();

  // const set1 = Array.from(new Set(str1.split('')))
  // const set2 = Array.from(new Set(str2.split('')))

  // if (set1.length !== set2.length) return false;

  const charCount1 = {},
    charCount2 = {};

  for (const char of str1) {
    if (charCount1[char]) {
      charCount1[char]++;
    } else {
      charCount1[char] = 1;
    }
  }

  for (const char of str2) {
    if (charCount2[char]) {
      charCount2[char]++;
    } else {
      charCount2[char] = 1;
    }
  }

  for (const char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
};

console.log(isAnagram('sileent', 'listeen'));
