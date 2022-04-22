import express, { application } from 'express'
import path from 'path'
import { router } from './routes/index'
const port = 3333

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(router)

app.listen(port, () => { 
  console.log(`tabuada is listennig the port ${port}`)
})