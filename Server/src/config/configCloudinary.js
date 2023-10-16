import { v2 as cloudinary } from "cloudinary";


const configureCloudinary = () => {
    const config= {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "",
        api_key: process.env.CLOUDINARY_API_KEY || "",
        api_secret: process.env.CLOUDINARY_API_SECRET || "",
    };

    if (!config.cloud_name || !config.api_key || !config.api_secret) {
        throw new Error("Cloudinary configuration is incomplete");
    }

    cloudinary.config(config);

    return cloudinary
};

export default configureCloudinary;