const express = require('express') //expree 모듈 가져오기
const app = express() //새로운 express app 만들기
const port = 5000 //port 5000번으로 앱서버

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://soozya:a12345@boilerplate.ztokxzh.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected..'))
  .catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World!~~안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})