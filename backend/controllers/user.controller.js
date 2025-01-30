const express=require('express')
const User=require('../models/user.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const addUser=async (req,res)=>{
    try{
        const {name,email,plainpassword}=req.body
    if (!name || !email ||!plainpassword) {
        console.log("Send all the fields")
        return res.status(400).json({ message: 'All fields are required' });
      }
      const doesexist=await User.findOne({email})
      if(doesexist)
      {
        return res.status(400).json({ message: 'User already exist' });
      }
      const password=await bcrypt.hash(plainpassword,10)
    const newuser= await User.create({name,email,password})
    console.log(newuser)
    return res.status(200).json({ newuser });
    }
    catch(error)
    {
        console.log(error.message)
        return res.status(400).json({message:error.message})
    }
}
const login=async (req,res)=>{
  try{
    const {email,password}=req.body
    console.log(email,password)
    if (!email ||!password) {
      console.log("Send all the fields")
      return res.status(400).json({ message: 'All fields are required' });
    }
    const user=await User.findOne({email})
    if(!user)
    {
      return res.status(404).json({ message: 'User not found' });
    }
    const istrue=await bcrypt.compare(password,user.password)
    if(!istrue)
    {
      return res.status(400).json({ message: 'Password is incorrect' });
    }
    const token = jwt.sign({userId: user._id, email: user.email},process.env.JWT_SECRET)
    return res.status(200).json({ 
      message: 'Login successful', 
      token 
  })
  }
  catch(error)
    {
        console.log(error.message)
        return res.status(400).json({message:error.message})
    }
}
const addToCart=async(req,res)=>{
  try{
    const {email,book_id}=req.body
    const user=await User.findOne({email})
    if(!user)
    {
      return res.status(404).json({ message: 'User not found' });
    }
    user.cart.push(book_id)
    await user.save();
    console.log("Book added to cart successfully");
    return res.status(200).json({message:'Book added to cart successfully' });
  }
  catch(error)
  {
    console.log(error.message)
    return res.status(400).json({message:error.message})
  }
}
const getCart=async(req,res)=>{
  try{
    const {email}=req.body
    const user=await User.findOne({email})
    if(!user)
    {
      return res.status(404).json({ message: 'User not found' });
    }
    const cart=user.cart
    return res.status(200).json({cart});
  }
  catch(error)
  {
    console.log(error.message)
    return res.status(400).json({message:error.message})
  }
}
const removeFromCart=async(req,res)=>{
  try{
    const {email,book_id}=req.body
    const user=await User.findOne({email})
    if(!user)
    {
      return res.status(404).json({ message: 'User not found' });
    }
    const bookIndex = user.cart.indexOf(book_id);
    if (bookIndex === -1) {
      return res.status(400).json({ message: 'Book not found in cart' });
    }
    user.cart.splice(bookIndex, 1); 
    await user.save(); 
    console.log('Book removed from cart successfully');
    return res.status(200).json({ message: 'Book removed from cart successfully' });
  }
  catch(error)
  {
    console.log(error.message)
    return res.status(400).json({message:error.message})
  }
}
module.exports={addUser,login,addToCart,getCart,removeFromCart}