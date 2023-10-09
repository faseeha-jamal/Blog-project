import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
    title:Yup.string().required("Title is required"),
    paragraph:Yup.string().required("Paragraph is required"),
    image:Yup.mixed().required("Image is required")
})