const Bluebird = require('bluebird')

// gimmeArray takes a number of milliseconds and an array.
// It returns that array after the specified number of milliseconds have passed.
// Well, really it returns a promise, and when that promise resolves (ms later),
// that promise resolves to the given array.
const gimmeArray = (ms, arr) =>
  new Bluebird(resolve => setTimeout(() => resolve(arr), ms))

// An async function, sorta?!
function testIt() {
  const arr = gimmeArray(100, [1, 2])
  const only1 = arr.filter(el => el === 1)
  return only1
}
// async function testIt() {
//     const arr = await gimmeArray(100, [1, 2])
//     const only1 = arr.filter(el => el === 1)
//     return only1
// }

async function useIt() {
  const ones = await testIt()
  console.log(ones)
}

useIt()
