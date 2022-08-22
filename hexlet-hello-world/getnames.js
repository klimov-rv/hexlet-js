import _ from 'lodash';

export default (usersObjs) => {
    let names = [];
    if (_.isArray(usersObjs)) {
        for (let i = 0; i < usersObjs.length; i += 1) {
            names[i] = usersObjs[i].name;
        }
    }
    return names.sort(function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
    });
} 