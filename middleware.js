// middleware.js
const jwt = require('jsonwebtoken');

// Middleware to check if the request has a valid JWT token
module.exports.authenticateToken =(requiredRole) => async (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization');

  // Verify the token
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }
  //to check whether the token pass in is what you want
//  console.log("Token",token);
  try {
    // Verify the token
    const decoded = jwt.verify(token, 'vms2');

    // Log decoded information for troubleshooting
    console.log('Decoded Token:', decoded);

    // Check if the token has the required role
    if (decoded.category !== requiredRole) {
      return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
    }

    // Attach user information to the request if needed
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }
};


