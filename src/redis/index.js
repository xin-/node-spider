import redis from 'redis'
const client = redis.createClient(6379, 'localhost')

client.on('connect', () => {
	client.set('author', 'XinHonglin', (a,b) => {
		console.log(a,b)
	})
	client.get('author',)
	console.log('connect:::::')
})

client.on('error', error => {
	console.error(error)
})

client.on('ready', () => {
	console.log('🌍  🌍  Redis  🌍  🌍  Ready  🌍  🌍')
})

export default client