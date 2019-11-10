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
            //cb(null, Date.now() +'-' +req.body.hn +'.'+file.mimetype.substring (6,10))
            cb(null, req.body.hn +'-' +Date.now() +'.'+file.mimetype.substring (6,10))
           // console.log(file.mimetype.substring (6,10))
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

  //data.name=req.body.name
  //data.surname=req.body.surname

  data.SCRunno=req.body.scrunno
  data.hn=req.body.hn
  data.doctor_code=req.body.doctor_code
  data.doctor_mean=req.body.doctor_mean
  data.department_code=req.body.department_code
  data.department=req.body.department
  data.department_mean=req.body.department_mean
  data.clinic=req.body.clinic
  data.clinic_mean=req.body.clinic_mean

//data.type       /res.json('dnt') 
//data.pdf_url    /res.json('http://192.168.50.61/Doctornote/'+pid+'/img/')
//data.date       /res.json('YYYY-MM-DD')
//data.vn       /res.json(vn)
//data.id       /res.json(pid)

//data.date='2019-11-11'
  data.vn="60-513440"
  data.id="3-6607-00239-82-0"
  data.pid=data.id.substring (0,1).concat(data.id.substring (2,6)).concat(data.id.substring (7,12)).concat(data.id.substring (13,15)).concat(data.id.substring (16,17))
  data.type="dnt"
  data.url='http://192.168.50.61/Doctornote/'.concat(data.pid).concat('/img/')
  data.Date=new Date().toString()

  data.mm=data.Date.substring(4,7)
  if(data.mm==='Jan')
    data.mm=1
  else  if(data.mm==='Feb')
    data.mm=2
  else  if(data.mm==='Mar')
    data.mm=3
  else  if(data.mm==='Apr')
    data.mm=4
  else  if(data.mm==='May')
    data.mm=5
  else  if(data.mm==='Jun')
    data.mm=6
  else  if(data.mm==='Jul')
    data.mm=7
  else  if(data.mm==='Aug')
    data.mm=8
  else  if(data.mm==='Sep')
    data.mm=9
  else  if(data.mm==='Oct')
    data.mm=10
  else  if(data.mm==='Nov')
    data.mm=11
  else  if(data.mm==='Dev')
    data.mm=12

  data.date=data.Date.substring(11,15).concat('-').concat(data.mm).concat('-').concat(data.Date.substring(8,10))
  delete data.mm
  delete data.Date

  data.images=req.files
  data.code=200
  data.message="complete!!!"
 

 //console.log(req.body)

  res.json(data)
})


app.listen(8000, () => console.log('server is running:8000'))