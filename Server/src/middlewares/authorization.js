import jwt from 'jsonwebtoken';

export const userAuthorization = async (req, res, next) => {
  try {
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

    req.verifyToken = verifyToken;

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};