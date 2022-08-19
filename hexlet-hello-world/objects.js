import _ from 'lodash';

export default function fill(obj1, arPropsToMerge, obj2) {
  const fullMerge = (arPropsToMerge.length === 0) ? obj2 : _.pick(obj2, arPropsToMerge);
  return Object.assign(obj1, fullMerge);
}
