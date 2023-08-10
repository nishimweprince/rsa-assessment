const maxOccurence = (str) => {
    const charCount = {}; 
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let maxCount = 0;
    let maxChar = null;

    for (const char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxOccurence('ananagram'))