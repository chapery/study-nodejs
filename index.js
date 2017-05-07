// import foo from './lib/foo'

import fs from 'fs'
import process from 'process'


fs.exists('./src/test.text', exists => {
	console.log(exists)
})

console.log(fs.existsSync)
