const express = require('express')
const app = express()
const chefData = require('./chefData.json');


const port = process.env.PORT || 5000
const cors = require('cors')

app.use(cors());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chef-data', (req, res) =>{
  res.send(chefData);
})

app.get("/chef-data/:id", (req, res) =>{
  const id = req.params.id;
  
  const data = chefData.find(d => d.id == id);
  console.log(id)

  res.send(data);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})