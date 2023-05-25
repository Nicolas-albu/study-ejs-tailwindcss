import express from 'express'
import router from './router'
import expressLayouts from 'express-ejs-layouts'

const app = express()

app.use(express.json())
app.use(expressLayouts)
app.use(router)

app.set('view engine', 'ejs')
app.set('views', './src/views')
// app.set('layoutDir', './views/layouts')

export default app