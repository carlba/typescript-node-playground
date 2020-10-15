import * as tempy from 'tempy';

tempy
  .write(Buffer.from("I'm a string!", 'utf-8'), {name: 'test.mp3'})
  .then(path => console.log(path));

export {};
