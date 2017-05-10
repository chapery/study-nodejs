/**
 * 仅开发环境使用
 * 生成index.html列表索引文件
 */

import fs from 'fs'
import path from 'path'

// dev
const devDir = './src'
const indexPath = './index.html'
let devFiles = []
let devList = ''

if (fs.existsSync(indexPath)) {
	fs.unlinkSync(indexPath)
}

devFiles = fs.readdirSync(devDir).filter(item => /\.html$/.test(item))

devFiles.forEach((item) => {
	devList += `<li><a href="${
		path.join(devDir, item)
	}" title="${
		path.resolve(devDir, item)
	}">${
		item.replace(/\.html$/, '')
	}</a></li>\n`
})

// dist
const distDir = './dist'
let distList = ''

// html 模板字符串
let temp = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title>index</title>
	<style>
		*{
		  margin: 0;
		  padding: 0;
		  -webkit-tap-highlight-color: transparent;
		}
		html{
		  font-size:10px;
		}
		body{
		  font-family:'Helvetica Neue',Helvetica,Roboto,STHeiTi,Arial,sans-serif;
		  font-size: 2rem;
		}
		h1{
			padding: 1rem 0;
			text-align: center;
			background-color: lightseagreen;
			font-size: 3rem;
			color: white;
		}
		h2{
			padding: 0.8rem 0;
			font-size: 2.5rem;
			color: LightSeaGreen;
			border-bottom: 1px solid LightSeaGreen;
		}
		ul{
		  list-style: none;
		}
		a{
		padding-left: 1rem;
		  text-decoration: none;
		  color: black;
		}
		.container{
			padding-bottom: 2rem;
		}
		.wrapper{
			display: table;
			table-layout: fixed;
			margin-top: 1rem;
		}
		.column{
			display: table-cell;
			padding: 0 2rem;
			width: 1%;
		}
		.list{
			margin-top: 1rem;
		}
		.list > li > a{
			display: block;
			line-height: 2;
		}
		.list > li > a:hover{
			color: #5cb85c;
			background-color: ghostwhite;
		}
		@media screen and (max-width:480px) {
			.wrapper{
				display: block;
			}
			.column{
				display: block;
				width: auto;
				margin-top: 1rem;
			}
		}
	</style>
</head>
<body>
<div class="container">
	<h1>教学助手-学科工具</h1>
	<div class="wrapper">
		<div class="column">
			<h2>开发版</h2>
			<ul class="list">${ devList }</ul>
		</div>
		<div class="column">
			<h2>正式版</h2>
			<ul class="list">${ distList }</ul>
		</div>
	</div>
</div>
</body>
</html>
`

// 生成 index.html 文件
fs.writeFile(indexPath, temp, (err) => {
	if (err) throw err;
	console.log('create index.html success');
})