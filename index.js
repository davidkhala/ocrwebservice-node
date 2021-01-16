const {axiosPromise} = require('khala-axios')
const {OutputFormat} = require('./types')
/**
 *
 * @param language
 * @param pagerange
 * @param {OutputFormat} outputformat
 * @return {Promise<void>}
 */
const processDocument = async ({language = 'english', pagerange = 'allpages', outputformat}) => {
	const url = 'https://www.ocrwebservice.com/restservices/processDocument';
	let _pagerange
	if (Array.isArray(pagerange)) {
		_pagerange = pagerange.join(',')
	} else if (typeof pagerange === 'string') {
		_pagerange = pagerange
	}

	const body = {
		language,
		pagerange: _pagerange,
		outputformat: Array.isArray(outputformat) ? outputformat.join(',') : outputformat,
		gettext: outputformat === OutputFormat.text,
		newline: 1
	}
	const result = await axiosPromise({url, body})
	console.log(result)
}
module.exports = {
	processDocument,

}

