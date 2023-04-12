const express = require('express');
const { signup, login, verifyToken, getUser, refreshToken, logout, getObjava, getGrupa, novaGrupa } = require('../controllers/user-controller');

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.post("/nova-grupa", verifyToken, novaGrupa);
router.get("/grupe/:id", verifyToken, refreshToken, getGrupa);
router.get("/refresh", refreshToken, verifyToken, getUser);
router.post("/logout", verifyToken, logout);

module.exports = router;