const captainController = require('../controllers/captain.controller');
const express=require('express');
const router =express.Router();
const {body} =require("express-validator")  // it only checks the data input
const authMiddleware=require('../middlewares/auth.middleware');

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First NAme must be atleast 3 characters long'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long'),
    body('vechile.color').isLength({min:3}).withMessage('Color name must be atleast 3 characters long'),
    body('vechile.plate').isLength({min:3}).withMessage('Plate name must be atleast 3 characters long'),
    body('vechile.capacity').isInt({min:1}).withMessage('Capacity must be atleast 1'),
    body('vechile.vechileType').isIn(['car','motorcycle','auto']).withMessage('Invalid Vechile type')
],
    captainController.registerCaptain
)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters long')
],
    captainController.loginCaptain
)
router.get('/profile',authMiddleware.authCaptain, captainController.getCaptainProfile)

module.exports = router;