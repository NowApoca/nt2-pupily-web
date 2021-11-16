import generateExcel from "../../src/modulos/excel/excel.js"

const headers = ['Nombre', 'DNI']

const data = [
    ['Alicia', '1234'],
    ['Manuel', '3456'],
]

generateExcel(headers, data, {outputFile: 'outputFile'})
