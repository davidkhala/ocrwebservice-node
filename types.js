/**
 *
 * @enum {string}
 */
const OutputFormat = {
	PDF_text: 'pdf',            // Adobe PDF text document
	PDF_text_image: 'pdfimg',   //Adobe PDF with image and text
	DOC: 'doc',                 // Microsoft Word 2003
	DOCX: 'docx',               // Microsoft Word 2007
	XLS: 'xls',                 // Microsoft Excel 2003
	xls: 'xlsx',                // Microsoft Excel 2007
	RTF: 'rtf',
	text: 'txt',                // Plain Text
}
/**
 * @enum {string}
 */
const RecognitionLanguage = {
	English: 'english',
	Indonesian: 'indonesian',
	Afrikaans: 'afrikaans',
	Italian: 'italian',
	Albanian: 'albanian',
	Japanese: 'japanese',
	Basque: 'basque',
	Korean: 'korean',
	Brazilian: 'brazilian',
	Latin: 'latin',
	Bulgarian: 'bulgarian',
	Latvian: 'latvian',
	Byelorussian: 'byelorussian',
	Lithuanian: 'lithuanian',
	Catalan: 'catalan',
	Macedonian: 'macedonian',
	'zh-Hans': 'chinesesimplified', // Chinese Simplified
	'zh-Hant': 'chinesetraditional',// Chinese Traditional
	Malay: 'malay',
	Moldavian: 'moldavian',
	Croatian: 'croatian',
	Norwegian: 'norwegian',
	Czech: 'czech',
	Polish: 'polish',
	Danish: 'danish',
	Portuguese: 'portuguese',
	Dutch: 'dutch',
	Romanian: 'romanian',
	Esperanto: 'esperanto',
	Russian: 'russian',
	Estonian: 'estonian',
	Serbian: 'serbian',
	Finnish: 'finnish',
	Slovak: 'slovak',
	French: 'french',
	Slovenian: 'slovenian',
	Galician: 'galician',
	Spanish: 'spanish',
	German: 'german',
	Swedish: 'swedish',
	Greek: 'greek',
	Tagalog: 'tagalog',
	Hungarian: 'hungarian',
	Turkish: 'turkish',
	Icelandic: 'icelandic',
	Ukrainian: 'Ukrainian'
}


module.exports = {
	RecognitionLanguage,
	OutputFormat,
}
/**
 * @typedef {Object} ProcessDocumentResponse
 * @property {number} AvailablePages - Available pages for the current subscription plan
 * @property {number} ProcessedPages - The number of pages processed for the last task
 * @property {Array<Array>} OCRText - Two dimension array that contains extracted text from each zone and page. OCRedText[z][p]: z-zone, p-pages
 * @property {string} OutputFileUrl - The URL for the converted output file
 * @property {string} OutputFileUrl2
 * @property {string} OutputFileUrl3
 * @property {Array<string>} OCRWords
 * @property {null} TaskDescription - This custom field will contain the same value as specified in the input 'description' parameter
 * @property {Array} Reserved - Reserved fields
 * @property {string} ErrorMessage - If error occurred during processing this field will contain error message
 * @property {null} OutputInformation
 */

