//Compare dois objetos (JSON) para verificar se são idênticos ou não

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

const msg = 'They are diferent';
assert.deepStrictEqual(obj1, obj2, msg);  //compara se obj1 é igual a obj2
assert.deepStrictEqual(obj1, obj3, msg) //compara se obj1 é igual a obj3 - Se obj1 === obj2 e obj1 !== obj3 então obj2 !== obj3
