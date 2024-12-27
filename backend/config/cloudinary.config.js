const cloudinary=require('cloudinary').v2
const connectCloud=()=>{
    cloudinary.config({
        cloud_name:process.env.CLOUD_NAME,
        api_key:process.env.API_KEY,
        api_secret:process.env.API_SECRET
    })
    cloudinary.api.resources()
    .then(result => {
      console.log('Connected to Cloudinary successfully:', result)
    })
    .catch(error => {
      console.error('Error connecting to Cloudinary:', error.message)
    });
}
module.exports=connectCloud