const_path = require('path');
module.exports = {

    mode: "none",

    // where is it.. ? path
    entry: path.resolve(__dirname,'src/index.js'), 
    output: {
        // which file name <-- kind of 
        // 
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    }
};