const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const multer  = require('multer')
const QRCode = require('qrcode')

app.use(cors())
app.use(bodyParser.json() ,router)
app.use(bodyParser.urlencoded({extended:true}) ,router)

router.route('/')
    .get( (req, res) =>  res.send("Hello, World!!!") )


 
//QRCode.toDataURL('#GTfarng',  (err, url)=> {
//  console.log(url)
//})

/*
QRCode.toString('49-15050|60-055147|OPDMEDICINE|OPDCARD|42712|2017-01-25',{type:'terminal'},  (err, url)=> {
  console.log(url)
})
*/
var opts = {
  errorCorrectionLevel: 'H',
  type: 'image/png',
  width:400,
  quality: 0.3,
  margin: 1,
  color: {
    dark:"#000000",
    light:"#FFFFFF"
  }
}


QRCode.toFile('./demo.png', '49-15050|60-055147|OPDMEDICINE|OPDCARD|42712|2017-01-25', opts,  (err)=> {
  if (err) throw err
  console.log('done')
})

//app.listen(8000, () => console.log('server is running:8000'))