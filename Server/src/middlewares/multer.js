import multer from "multer";

const storage = multer.memoryStorage();

const fileFilter = (
    req,
    file,
    cb
) => {
    if (!["image/png", "image/jpg", "image/jpeg"].includes(file?.mimetype)) {
        return cb(new Error("Not an image"));
    }
    return cb(null, true);
};

const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5242880 },
});


export const parseImages = (
    req,
    res,
    next
) => {
    upload.single("image")(req, res, (err) => {
        if (err) {
            console.log("this is from multer",err);
            if (err.message === "Not an image") {
                return res.status(400).json({
                    status:400,
                    success:false,
                    message:"Please provide a valid image"
                })
            }
            if (err.message === "File too large") {
                return res.status(400).json({
                    status:400,
                    success:false,
                    message:"File is too large"
                })
            }

           return res.status(500).json({
            status:500,
            success:false,
            message:"Something went wrong"
        })
        }
        return next();
    });
};