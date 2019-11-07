const fs = require('fs')

const path= './Doctornote/'
const content = 'Doctornote Directory'

const createDir = (dirPath) => {
	fs.mkdir(dirPath, { recursive: true },(err)=>{
		if(err){
			throw err
		} 
		else{
			console.log("create Directory complete!!!")
		}
	})
}


const  createFile = (filePath,fileContent)=>{
	fs.writeFile(filePath,fileContent,(err)=>{

	if(err){
		throw err
	}
	else{
		console.log("create file complete!!!")
	}	
	
	})
	
}


createDir(path)
createFile(path,content)



