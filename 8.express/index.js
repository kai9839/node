const express = require('express')

// 2.创建应用对象
const app = express()

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/index.html')
})
app.post('/login', (req, res) => {
  res.send('获取用户数据')
})

app.listen(9000, () => {
  console.log('服务已经启动...')
})