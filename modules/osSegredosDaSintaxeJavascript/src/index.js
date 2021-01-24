const assert = require('assert')
const Employee = require('./employee')
const Util = require('./util')

const GENDER = {
   male: 'male',
   female: 'female'
}

{
   const employee = new Employee({
      name:'TESTE',
      gender: GENDER.female
   })

   assert.throws(() => employee.birthYear, {
      message: 'you must define age first!!!'})
}

{
   const employee = new Employee({
      name: 'Joazão',
      age: 22,
      gender: GENDER.male
   })

   
   assert.deepStrictEqual(employee.name, 'Mr. Joazão')
   assert.deepStrictEqual(employee.age, undefined)
   assert.deepStrictEqual(employee.gender, undefined)
   assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40))

  
}