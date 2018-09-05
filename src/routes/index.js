import express from 'express'
import path from 'path'
import util from 'util'
// import redis from '../redis'
import { creatNewFile } from '../utils'
import dealxlsx from '../utils/dealxlsx.js'
import { demoSpider } from '../../spider/demo'

const router  = express.Router()

router.get('/', (req, res, next) => {
	console.log(`path:::: " / "`)
	// res.end(`path:::: " / "`)
	res.sendFile(path.join(__dirname, '../public/weiindex.html'))
})

router.get('/view', (req, res, next) => {
	console.log(`path:::: " /view "`)
	res.render('index', {
		title: '高静',
		domain: '刘高静',
		message: '我爱你',
	})
})

router.post('/users/set', (req, res, next) => {
	//node 中 req对象为原生对象 无法用 JSON.stringify 来显示 只能用 util.inspect
	// creatNewFile(util.inspect(req), path.join(__dirname, '../conf.log'))
	const { name, id } = req.query
	// redis.set(name, id)
	res.json('success')
})

router.post('/spider', (req, res, next) => {
	const { addr } = req.query
	creatNewFile(util.inspect(req), path.join(__dirname, '../conf.log'))
	console.log(req.body)
	res.json({
		success: 'true'
	})
	// demoSpider(addr).then(params => {
	// 	res.status(200).json(params)
	// })
})

router.get('/dealxlsx', (req, res, next) => {
	// dealxlsx().then(v => {
	// 	res.json(v)
	// })
})

export default router