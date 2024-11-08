const express = require ('express')
const router =new express.Router()
const orderController =require('../controllers/orderController')

router.post("/",orderController.createAOrderController)

router.get("/email/:email",orderController.getAOrderByEmailController)
module.exports=router
