const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const multer  = require('multer')
const path = require('path')
app.use(cors())
app.use(bodyParser.json() ,router)
app.use(bodyParser.urlencoded({extended:true}) ,router)

//const upload = multer({ dest: 'uploads/' })

const upload = multer({ 
    storage:multer.diskStorage({
        destination:  (req, file, cb)=> {
           
            cb(null, path.join(__dirname,'./DoctorNote/img'))
        },
        filename:  (req, file, cb)=> {
         
          //  cb(null, Date.now() + '-' + file.originalname)
            cb(null, Date.now() + '-' + req.body.name+'.'+file.mimetype.substring (6,10))
            console.log(file.mimetype.substring (6,10))
        }
    }),
    fileFilter:(req, file, cb)=>{
       
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) { 
            return cb(new Error('format is false!!!'), false)
        }
        cb(null, true) 
    },
    limits:{
        fileSize:200000000
    }
})

router.route('/api/Doctornote/6/InsertData') 
    .get( (req, res) =>  res.send("Insert Data !!!") )

 /*   .post( upload.single('image'),  (req, res, next)=> {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  console.log(req.file)
  console.log(req.body)

  let data={}

  data.name=req.body.name
  data.surname=req.body.surname
  data.image=req.file

  res.json(data)

})
*/
    
.post( upload.array('images', 12),  (req, res, next)=> {

  let data={images:[]}

  data.name=req.body.name
  data.surname=req.body.surname
  
  data.images=req.files
  data.code=200
  data.message="complete!!!"
 // datas=data

 console.log(req.body)

  res.json(data)
})


app.listen(8000, () => console.log('server is running:8000'))