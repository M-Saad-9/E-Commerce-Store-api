import express from 'express'
import { products } from './productData.mjs'

const app = express()
const port = 3000

app.get('/', (req, response) => {
    response.send('Hello World from FashionCart!')
  })



app.get('/product', (req, response) => {

    response.send(products)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})