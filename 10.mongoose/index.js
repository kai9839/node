const db = require('./db/db')
const BookModel = require('./models/BookModel')

db(() => {
  console.log('连接成功');

  BookModel.create({
    title: '哈哈哈',
    author: 'hhh',
    price: 20.5
  }).then(data => {
    console.log(data)
  }).catch(err => {
    console.log(err)
  })
})

