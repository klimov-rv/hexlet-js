// import _ from 'lodash';

export default (nameForObj, paramsForObj) => ({ ...{ name: nameForObj }, state: 'moderating', createdAt: Date(), ...paramsForObj });
