const fs = require('fs').promises;
const randomWords = require('random-words');

const numFiles = process.argv[2];
const numWords = process.argv[3];
const dirName = "created_files";
const fileName = dirName + "/file";

fs.mkdir(dirName);
async function createFiles () {
    const promises = [];
    for (fileNumber=1;fileNumber<=numFiles;fileNumber++){
        const words = randomWords(fileNumber*numWords);
        promises.push(fs.writeFile(fileName+fileNumber, words));
    }
    await Promise.all(promises);
}

createFiles();
