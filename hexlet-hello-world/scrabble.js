export default (someLetters, word) => {
    let result = false;
    if (someLetters.length > word.length) {
        result = true;
        for (let index = 0; index < word.length; index++) {
            let testLetter = word[index].toLowerCase();
            let found = Array.from(someLetters).find(function (curLetter) {
                return curLetter === testLetter;
            });
            if (found != undefined) {
                someLetters = someLetters.replace(found, '');
            } else {
                result = false;
                break;
            }
        }
    }
    return result 
}