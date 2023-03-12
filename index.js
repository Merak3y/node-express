const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/sound/:name', (req, res) => {
  const { name } = req.params
    
  console.log(name)

  if(name == 'dog'){
    res.json({'sound' : 'aa'})  
  }
  else{
    res.json({'sound' : 'bb'})  
  }
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})