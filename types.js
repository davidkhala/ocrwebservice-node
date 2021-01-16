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
module.exports = {
	OutputFormat,
}
/**
 * @typedef {Object} ProcessDocumentResponse
 * @property AvailablePages
 * @property ProcessedPages
 * @property OCRText
 * @property OutputFileUrl
 * @property [TaskDescription]
 * @property Reserved
 * @property ErrorMessage
 */

