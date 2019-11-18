const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const multer  = require('multer')

app.use(cors())
app.use(bodyParser.json() ,router)
app.use(bodyParser.urlencoded({extended:true}) ,router)



    


const upload = multer({ dest: 'uploads/' })
 
router.route('/')
    .get( (req, res) =>  res.send("Hello, World!!!") )

router.route('/api')
    .get( (req, res) =>  res.send("API Index!!!") )
 
router.route('/api/Doctornote/6/InsertData') 
    .get( (req, res) =>  res.send("Insert Data !!!") )

    .post( upload.single('image'),  (req, res, next)=> {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  let data={}
  data.name=req.body.name
  data.surname=req.body.surname
  data.image=req.file.image
  res.json(data)

})
/* 
app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})
 
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
  //  req.files['avatar'][0] -> File
  //  req.files['gallery'] -> Array
  //
  // req.body will contain the text fields, if there were any
})

*/

app.listen(8000, () => console.log('server is running:8000'))