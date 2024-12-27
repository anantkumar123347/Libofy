const express=require("express")
const router=express.Router()
const {addAdmin,login}=require('../controllers/admin.controller')
router.post('/register',addAdmin)
router.post('/login',login)
module.exports=router