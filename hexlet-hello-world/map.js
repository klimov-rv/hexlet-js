import _ from 'lodash';
import crc32 from 'crc-32';

export default function make(usersObjs)  {  
    const data = 'Hello, world!'; // Любые данные, которые мы хотим хешировать
    const hash = crc32.str(data);
    return hash;
}
export function get(usersObjs)  { 
    const data = 'Hello, Roma!'; // Любые данные, которые мы хотим хешировать
    const hash = crc32.str(data);
    return hash;
}
export function set(usersObjs)  { 
    const data = 'Hello, Yaroslava!'; // Любые данные, которые мы хотим хешировать
    const hash = crc32.str(data);
    return hash;
}