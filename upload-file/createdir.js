const path = require('path');
const fs = require('fs');

let dir = "/Doctornote/tmp";

function createDirRecursively(dir) {
    if (!fs.existsSync(dir)) {        
        createDirRecursively(path.join(dir, "."));
        fs.mkdirSync(dir);
    }
}

createDirRecursively(dir);