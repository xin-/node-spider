import 'request'
import express from 'express'
import path from 'path'
import logger from 'morgan'
import routes from './routes'

const app = express()

app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', routes)

app.listen(app.get('port'), ()=> {
	console.log(`server is running on port:::: ${app.get('port')}`)
})