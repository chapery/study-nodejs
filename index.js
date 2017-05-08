// import foo from './lib/foo'


let bytes = new Buffer('hello')

let str = JSON.stringify(bytes)

let copy = new Buffer(JSON.parse(str))

let json = `{
	"type":"Buffer",
	"data":[65,66,67]
}`

console.log(new Buffer(JSON.parse(json)))