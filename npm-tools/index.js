const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(cors())
app.use(express())
app.use(bodyParser())

app.use( bodyParser.json() ,router)
app.use( bodyParser.urlencoded({extended:false}) ,router)

router.route('/demo')
    .get( (req, res,next) =>  res.status(200).json({message:'OK!'}) )

    // insert a new song
    
app.listen(8000, () => console.log('server is running on :8000'))