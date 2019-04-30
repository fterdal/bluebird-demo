const Bluebird = require('bluebird')

const gimmeArray = (ms, arr) =>
  new Bluebird(resolve => setTimeout(() => resolve(arr), ms))

// Huh!? We're allowed to use filter on an unresolved Promise?
function testIt() {
  const arr = gimmeArray(100, [1, 2])
  const only1 = arr.filter(el => el === 1)
  return only1
}

async function useIt() {
  const ones = await testIt()
  console.log(ones)
}

useIt()
