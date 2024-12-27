const express=require('express')
const Admin=require('../models/admin.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const addAdmin=async (req,res)=>{
    try{
        const {name,email,plainpassword}=req.body
    if (!name || !email ||!plainpassword) {
        console.log("Send all the fields")
        return res.status(400).json({ message: 'All fields are required' });
      }
      const doesexist=await Admin.findOne({email})
      if(doesexist)
      {
        return res.status(400).json({ message: 'Admin already exist' });
      }
      const password=await bcrypt.hash(plainpassword,10)
    const newadmin= await Admin.create({name,email,password})
    console.log(newadmin)
    return res.status(200).json({ newadmin });
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
    const user=await Admin.findOne({email})
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
module.exports={addAdmin,login}