var fs = require('fs');
var path = require('path');
var marked = require('marked');

function mustache(text, data) {
    var result = text;
    for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
            console.log(data);
            var regExp = new RegExp('{{' + prop + '}}', 'g');
            result = result.replace(regExp, data[prop]);
        }
    }
    return result;
}

function readTextFile(relativePath, fn) {
    var fullPath = path.join(__dirname, '../') + relativePath;

    fs.readFile(fullPath, 'utf-8', function fileRead(err, text) {
        fn(err, text);
    });
}

module.exports = {
    mustacheTemplate: mustache,
    readTextFile: readTextFile,
    marked: marked
};
