// CommonJS syntax
const koffi = require('koffi');

// Load the shared library
const lib = koffi.load('./ConsoleApp2-x64.dll');

const Add = lib.func('__stdcall', 'Add', 'int', ['int', 'int']);

console.log(Add(20, 2));