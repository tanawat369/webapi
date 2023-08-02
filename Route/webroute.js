// Manage web route
const express = require('express')
const path = require('path')
//const indexPage = path.join(__dirname,'template/index.html')
const router = express.Router()

router.get("/",(req,res)=>{
    res.status(200)
    res.type("text/html")
    //res.sendFile(indexPage)
    res.sendFile(path.join(__dirname,'../template/index.html'))
  })
  router.get("/page1",(req,res)=>{
    res.sendFile(path.join(__dirname,'../template/config.html'))
  })
  router.get("/page2",(req,res)=>{
    res.sendFile(path.join(__dirname,'../template/product.html'))
  })

///// router parameter
  router.get("/page/:id",(req,res)=>{
    const pageid = req.params.id
    if(pageid ==="1"){
      res.sendFile(path.join(__dirname,'../template/config.html'))
    }
    else if (pageid ==="2"){
      res.sendFile(path.join(__dirname,'../template/product.html'))
    }
    else{
      //res.send(`<h1>ไม่พบหน้า ${pageid}</h1>`)
      res.redirect("/")
    }
    

  })

//// modeul.export ต้องตรงกับ const router = express.Router()
module.exports = router