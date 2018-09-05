import "babel-polyfill"
import XLSX from 'xlsx'
import fs from 'fs'

export default function dealxlsx() {
	return new Promise((resolve, reject) => {
		const base = '/Users/xinHonglin/Downloads'
		const files = fs.readdirSync(base)
		let xlsxFiles = []
		if(!!files) {
			let proxy = []
			proxy = files.map(item => {
				if(item.indexOf('.xls') >= 0) {
					return item
				}
			})
			for(let i=0,len=proxy.length; i<len; i++) {
				if(!!proxy[i]) {
					xlsxFiles.push(proxy[i])
				}
			}
		}

		// xlsxFiles.map()
		function dealXlsx(file) {
			const workbook = XLSX.readFile(`${base}/${xlsxFiles[0]}`);
			const sheetNames = workbook.SheetNames; // 返回 ['sheet1', 'sheet2']
			const worksheet = workbook.Sheets[sheetNames[0]];
			const dataa =XLSX.utils.sheet_to_json(worksheet);
			// console.log(worksheet['C2'])
			console.log(dataa)
		}
		
		resolve(dealXlsx(xlsxFiles[0]))
	})
}