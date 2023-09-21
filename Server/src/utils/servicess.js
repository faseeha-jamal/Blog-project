export const generateOtp = () => {
  const charecters = "123456789";
  let otp = "";

  for (let i = 0; i < 6; i++) {
    const randomOtp = Math.floor(Math.random() * charecters.length);
    otp += charecters[randomOtp];
  }

  return otp;
};
