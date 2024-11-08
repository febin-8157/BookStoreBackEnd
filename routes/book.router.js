const express = require ('express')
const router =new express.Router()
const bookController =require('../controllers/bookController')

// newbook : post request to:http://localhost:3000/newbook
router.post('/newbook',bookController.newBookController)

// getallbook : post request to:http://localhost:3000/getallbook
router.get('/getallbook',bookController.getAllBookController)

// getsinglebook : post request to:http://localhost:3000/:id
router.get('/:id',bookController.getSingleBookController)

// updtae a book : post request to:http://localhost:3000/edit/:id
router.put('/edit/:id',bookController.updateBookController)

// deletelebook : post request to:http://localhost:3000/:id
router.delete('/:id',bookController.deleteBookController)


module.exports=router
