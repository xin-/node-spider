import 'request'
import express from 'express'
import path from 'path'
import logger from 'morgan'
import routes from './routes'
var bodyParser = require('body-parser');
console.log(logger)
const app = express()

app.set('port', process.env.PORT || 80)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));
app.use('/', routes)

app.listen(app.get('port'), ()=> {
	console.log(`server is running on port:::: ${app.get('port')}`)
})
