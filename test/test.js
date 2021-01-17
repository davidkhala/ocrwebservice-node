const {processDocument} = require('../index')
const {OutputFormat} = require('../types')
const path = require('path')

describe('processDocument', () => {
	it('green case: Q37', async () => {
		const file = path.resolve(__dirname, 'question37.png')
		const username = 'davidkhala'
		const license = process.env.LICENSE;
		await processDocument(file, username, license, OutputFormat.text)
	})
})
