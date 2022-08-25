export default (arrWithPairs) => {
    const result = {}
    for (let i = 0; i < arrWithPairs.length; i++) {
        const element = arrWithPairs[i];
        if (Array.isArray(element)) { 
            result[element[0]] = element[1];   
        } else {
            result[element] = null;
        }
    }
    return result
}