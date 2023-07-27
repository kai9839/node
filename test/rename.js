const fs = require('fs')
const path = require('path')

let fires = fs.readdirSync('./code')

// fires.forEach(item => {
//   let data = item.split('-')
//   let [num, name] = data
//   if (Number(num) < 10) {
//     num = '0' + num;
//   }
//   let newName = num + '-' + name
//   fs.renameSync(`./code/${item}`,`./code/${newName}`)
// })

console.log(__filename)
console.log(path.parse(__filename))