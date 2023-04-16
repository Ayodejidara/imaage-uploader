const multer = require('multer');

const multerStorage = multer.diskStorage({
   destination: (req,file,cb) =>{
    cb(null,'uploads/img')
   },
   filename: (req,file,cb) => {
    cb(null, file.originalname)
   }
});

const multerFilter = (req,file,cb) =>{
    if(file.mimetype.startsWith('image')) {
        cb(null,true)
    } else {
        cb(new Error('Not an image! Please upload only images.'),false)
    }
}

const upload = multer({ 
    storage: multerStorage,
    fileFilter: multerFilter
});

exports.uploadImage = upload.single('photo');

exports.uploadImageMsg = (req,res) =>{
    res.status(200).send('Image uploaded successfully')
}
