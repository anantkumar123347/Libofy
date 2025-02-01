const express=require('express')
const Book=require('../models/book.model')
const allbooks=async (req,res)=>{
    try{
        const allBooks=await Book.find({})
        return res.status(200).json({allBooks})
    }
    catch(error)
    {
        console.log(error.message)
        return res.status(400).json({message:error.message})
    }
}
const getbook = async (req, res) => {
    try {
      const { id } = req.params;
      const thatBook = await Book.findById(id);
      if (!thatBook) {
        return res.status(404).json({ message: 'Book not found' });
      }
      return res.status(200).json({ thatBook });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
const deletebook=async (req,res)=>{
    try{
        const {id}=req.params
        const deletedbook=await Book.findByIdAndDelete(id)
        return res.status(200).json({deletedbook})
    }
    catch(error)
    {
        console.log(error.message)
        return res.status(400).json({message:error.message})
    }
}
const addBook=async (req,res)=>{
    try
    {
    const name=req.body.name
    const author=req.body.author
    const publishYear=req.body.publishYear
    const genre=req.body.genre
    const price=req.body.price
    if (!name || !author || !publishYear || !genre || !req.file || !price) {
        console.log("Send all the fields")
        return res.status(400).json({ message: 'All fields are required' });
      }
      const bookexist=await Book.findOne({name})
      if(bookexist)
      {
        console.log("User already exist")
        return res.status(400).json({message:'Book already exist'})
      }
      const imageUrl = req.file.path;
    const newbook=await Book.create({name,author,publishYear,genre,image:imageUrl,price})
    console.log(newbook)
    return res.status(200).json({newbook})
    }
    catch(error)
    {
        console.log(error.message)
        return res.status(400).json({message:error.message})
    }
}
module.exports={allbooks,addBook,getbook,deletebook} 