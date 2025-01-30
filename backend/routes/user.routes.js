const express=require("express")
const router=express.Router()
const {addUser,login,addToCart,getCart,removeFromCart}=require('../controllers/user.controller')
router.post('/register',addUser)
router.post('/login',login)
router.post('/cart',addToCart)
router.get('/cart',getCart)
router.delete('/cart',removeFromCart)
module.exports=router