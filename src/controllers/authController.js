const jwt = require("jsonwebtoken");

class authController {
  static async authController(req, res, next) {
    const token = req.body.token;
    if (!token) return res.status(403).send("Access Denied1");
    try {
      const userVerifed = jwt.verify(token, process.env.SECRET_TOKEN);
      req.user = userVerifed;
      next();
    } catch (err) {
      res.status(403).send("Access Denie1d");
    }
  }
}

module.exports = authController;
