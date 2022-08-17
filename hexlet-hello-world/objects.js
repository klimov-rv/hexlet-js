export default function pick(obj, arProps) {
  const result = {};

  const entries = Object.entries(obj);
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of entries) {
    for (let i = 0; i < arProps.length; i += 1) {
    //   console.log(key);
    //   console.log(value);
      if (key === arProps[i]) {
        result[key] = value;
        // console.log(arProps[i]);
      }
    }
  }

  return result;
}
