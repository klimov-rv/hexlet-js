import _ from 'lodash';

export default function get(obj, arProps) {
  return _.get(obj, arProps, 'null');
}
