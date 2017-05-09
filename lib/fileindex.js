
import fs from 'fs'
import path from 'path'


let sourceDir = './src/'
let ext = '.html'
let targetFiles = []
let list = ''

targetFiles = fs.readdirSync(sourceDir).filter(item => /\.html$/.test(item))

targetFiles.forEach((item) => {
	list += `<li><a href="${ path.join(sourceDir, item) }">${item}</a></li>`
})

let temp = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<title>index</title>
</head>
<body>
<ul>
${list}
</ul>
</body>
</html>
`

fs.writeFile('./index.html', temp)