const express = require('express')
const app = express()
const mywebroute = require('./Route/webroute')

app.use(mywebroute)

app.listen(9000,()=>{
  console.log("server is running on port 9000")
})