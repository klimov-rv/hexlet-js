import _ from 'lodash';

export default function cloneDeep(obj1) {
  const clonedObj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj1)) {
    console.log(`${key}: ${value}`);
    if (_.isObject(value)) {
      clonedObj[key] = cloneDeep(value);
    } else {
      clonedObj[key] = value;
    }
  }
  return clonedObj;
}
