// Síncrona
import fs from 'node:fs';


const data = fs.readFileSync('archivo.txt', 'utf8');

if(!data.includes('hola')) {
    fs.writeFileSync('archivo.txt', data + '\n hola');
}
console.log(data);