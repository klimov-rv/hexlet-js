export default function is(comp1, comp2) {
  let eql = true;
  if (comp1.name === comp2.name && comp1.state === comp2.state && comp1.website === comp2.website) {
    eql = true;
  } else {
    eql = false;
  }
  return eql;
}
