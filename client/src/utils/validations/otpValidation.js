import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    otp: Yup.number().required("OTP is required").max(/^[0-9]{6}$/, 'OTP must be a 6-digit number')
})