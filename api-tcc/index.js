const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const bodyParser = require('body-parser')
 
app.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/v1', (req, res) => {
    res.json({
      message: "API acadêmicos v1" 
    })
  })


const port = 3010
app.listen(port, () => { console.log(`Servidor rodando na porta ${port}`) })