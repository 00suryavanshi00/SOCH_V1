var cloudinary = require("cloudinary").v2;

// here we are adding our cloudinary specific credentials
cloudinary.config({
    cloud_name: "dave4fclg",
    api_key: "827837755342388",
    api_secret: "aI5gmRwcKFDCUBriqasZ_auMZiw",
});


// parameters
const opts ={
    overwrite: true,
    invalidate: true,
    resource_type: "auto",
};


// Promises where we upload image > base64 (takes images and encode it seq of character and then we will be able to access even if no internet)
module.exports = (image) => {
    return new Promise((resolve,reject) => {
        cloudinary.uploader.upload(image, opts, (err, result) => {
            if(result && result.secure_url){
                console.log(result.secure_url);
                return resolve(result.secure_url);
            }
            console.log(error.message);
            return reject ({message: error.message});
            });
    });

};