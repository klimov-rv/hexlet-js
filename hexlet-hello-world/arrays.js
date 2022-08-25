export default (biblioteka, objToFind) => {
    let result = null;
    for (let index = 0; index < biblioteka.length; index++) {
        let sovpadaet = true;
        for (const [key, value] of Object.entries(biblioteka[index])) { 
            if (objToFind.hasOwnProperty(key)) {
                if (objToFind[key] === biblioteka[index][key]) { 
                } else {
                    sovpadaet = false; 
                }
            }
        }
        if (sovpadaet) {
            result = biblioteka[index];
            break;
        }
    }
    return result
}