// import foo from './lib/foo'

import fs from 'fs'
import process from 'process'
import path from 'path'

const src = './src/'

let test = path.relative('E:\\wamp\\www\\github\\study-nodejs\\src\\test.txt', 'E:\\wamp\\www\\github\\study-nodejs\\lib\\foo.js')

console.log(test)