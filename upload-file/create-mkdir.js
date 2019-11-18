const fs = require('fs')
const dirnames = {
    sync:'createDir',
    async:'asyncCreateDir'
}

//fs.mkdirSync(async='DoctorNote',0o777)
fs.mkdirSync(sync='DoctorNotes',0o777)
