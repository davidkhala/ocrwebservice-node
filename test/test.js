const {processDocument} = require('../index')
const {OutputFormat, RecognitionLanguage} = require('../types')
const path = require('path')

describe('processDocument', function () {
	const username = 'davidkhala'
	const license = process.env.LICENSE;

	this.timeout(30000)
	it('single line: Q37', async () => {
		const file = path.resolve(__dirname, 'question37.png')
		const result = await processDocument(file, username, license, OutputFormat.text)
		console.info(result)
	})
	it('multi lines: node-utils', async () => {
		const file = path.resolve(__dirname, 'node-utils.png')
		const result = await processDocument(file, username, license, OutputFormat.text)
		console.info(result)
	})
})
