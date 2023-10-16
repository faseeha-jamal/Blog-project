import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    otp: Yup.number().required("OTP is required")
})