
const fs = require('fs')
const path = require('path')
const inputFilePath = process.argv[2]
const inputFileDir = path.dirname(inputFilePath)
const inputFileName = inputFilePath.replace(inputFileDir + '/', '')

const fields = ["asin", "related", "salesRank"]
const extraFields = process.argv.slice(3)
const stared = extraFields.indexOf('-a') > -1 || extraFields.indexOf('--all') > -1

if (!inputFilePath) throw "Enter input file path."

const inputFile = fs.readFileSync(inputFilePath)

const inputJsContent = `exports.default = [${String(inputFile).split('\n').join(',')}]`

fs.writeFileSync(__dirname + '/tmp_input.js', inputJsContent)
data = require('./tmp_input').default
fs.unlinkSync(__dirname + '/tmp_input.js')


allFields = [...fields, ...extraFields]
console.log("Target fields:", stared ? "ALL" : allFields)
data = data.map(item => {
    if (stared)
        return item

    output = {}
    for (let i = 0; i < allFields.length; i++) {
        const field = allFields[i]
        if (item[field]) {
            output[field] = item[field]
        }
    }
    return output
})
    .map(item => JSON.stringify(item))
    .join('\n')

fs.writeFileSync(inputFileDir + '/' + "clean_" + inputFileName, data)
