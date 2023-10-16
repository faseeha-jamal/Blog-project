import configureCloudinary  from "../config/configCloudinary.js" 
import DataURIParser from "datauri/parser.js";
import path from "path";

const dUri = new DataURIParser();

export const singleFileUpload = async (file)=> {
    const formattedFile = dUri.format(
        path.extname(file.originalname).toString(),
        file.buffer
    );

    const result = await configureCloudinary().uploader.upload(formattedFile.content, {
        folder: "blogProject",
    });

    return result;
};