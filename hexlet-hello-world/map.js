// import _ from 'lodash';
import { bstr, buf, str } from "crc-32";

export function make() { 
    return new Map();
}
export function set(map, key, value) {
    let notCollision = true;
    const hash = bstr(key); 
    if (map.has(hash)) {
        notCollision = false;
    } else {
        map.set(hash, [key, value]);
    } 
    return notCollision;
}
export function get(map, key, defaultValue = null)  {
    let result;
    const hash = bstr(key); 
    if (map.has(hash)) {
        result = map.get(hash);
        result = result[1];
    } else { 
        result = defaultValue;
    }
    return result;
}