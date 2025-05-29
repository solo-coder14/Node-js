const fs = require('fs');

const myPath = "D:\\Programming\\Web Development\\Node js\\codeWithHarry\\Organize Folder"

function readfile() {
    try {
        let fileContent = fs.readdirSync(myPath)
        console.log(fileContent);
    } catch (error) {
        console.log(error);
    }
}

readfile();