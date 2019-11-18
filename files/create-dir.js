const fs = require('fs')

let mydir={

	dir:'Doctornote'
}

if (!fs.existsSync(mydir.dir)) 
	fs.mkdirSync(mydir.dir);
console.log("complete")