const {axiosPromise} = require('khala-axios')
const {OutputFormat, RecognitionLanguage} = require('./types')
const fs = require('fs')
/**
 *
 * @param sourceImage image file path, which will be processed
 * @param username
 * @param license license code
 * @param {OutputFormat} outputformat
 * @param {RecognitionLanguage} [language]
 * @param {Array|string} [pagerange]
 * @return {Promise<ProcessDocumentResponse>}
 */
const processDocument = async (sourceImage, username, license, outputformat, {language = RecognitionLanguage.English, pagerange = 'allpages'} = {}) => {
	const url = 'https://www.ocrwebservice.com/restservices/processDocument';
	let _pagerange
	if (Array.isArray(pagerange)) {
		_pagerange = pagerange.join(',')
	} else if (typeof pagerange === 'string') {
		_pagerange = pagerange
	}

	const params = {
		language,
		pagerange: _pagerange,
		outputformat: Array.isArray(outputformat) ? outputformat.join(',') : outputformat,
		gettext: outputformat === OutputFormat.text,
		newline: 1
	}

	const body = fs.createReadStream(sourceImage);
	const auth = {username, password: license};
	const result = await axiosPromise({url, body}, {auth, params})
	return result
}
module.exports = {
	processDocument,

}

