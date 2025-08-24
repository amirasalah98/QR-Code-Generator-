const express= require('express')
const controller=require('./controller')
const router=express.Router()

router.get('/', (req, res) => {
  res.send('QR Code Generator Backend Running');
});
router.post('/generate-qr',controller.generateQR)
module.exports= router;