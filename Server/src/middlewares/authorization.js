import jwt from 'jsonwebtoken';

export const userAuthorization = async (req, res, next) => {
  try {
    console.log(req.headers.authorization, " This auth");
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: "Unauthorized: Missing token",
      });
    }

    const verifyToken = await jwt.verify(token, "secretkey");

    
    if (!verifyToken || !verifyToken.userId) {
      return res.status(401).json({
        status: 401,
        success: false,
        message: "Unauthorized: Invalid token",
      });
    }
    console.log("this is userid from auth",verifyToken.userId);
    req.verifyToken = verifyToken;

    next();
  } catch (error) {
     if(error.message === "jwt expired"){
      return res.status(403).json({
        status: 403,
        success: false,
        message: "Access forbidden: Token expired",
      });
     }
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};