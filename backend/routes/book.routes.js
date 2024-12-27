const express=require("express")
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { allbooks,addBook,getbook,deletebook }=require('.././controllers/book.contoller')
const router=express.Router()
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: "uploads",
      allowed_formats: ["jpg", "png", "jpeg"],
    },
  });
  const upload = multer({ storage });
router.get('/',allbooks)
router.post('/',upload.single("image"),addBook)
router.get('/:id',getbook)
router.delete("/:id",deletebook)
module.exports=router 