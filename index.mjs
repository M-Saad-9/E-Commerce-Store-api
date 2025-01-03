import express from 'express'
import cors from 'cors'
import { products } from './productData.mjs'

const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, response) => {
    response.send('Hello World from FashionCart!')
  })

app.get('/products', (req, response) => {

    response.send(products)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})