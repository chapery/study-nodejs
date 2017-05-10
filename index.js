// import fileindex from './lib/fileindex'

const buf1 = Buffer.from('A')
const buf2 = Buffer.from('a')

const result = Buffer.compare(buf1, buf2)

const arr = [buf1, buf2]

console.log(arr.sort(Buffer.compare))
