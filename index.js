
const arr = new Uint8Array(2)

arr[0] = 10

const buf1 = Buffer.from(arr)

console.log(buf1)