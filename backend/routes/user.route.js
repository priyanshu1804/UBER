const express=require('express');
const routes=express.Router();
const userController=require('../controllers/user.controller');
const {body}=require('express-validator')
const authMiddleware=require('../middlewares/auth.middleware');
routes.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long'),
],userController.registerUser);
routes.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
],userController.loginUser);
routes.get('/profile',authMiddleware.authUser,userController.getUserProfile);
routes.get('/logout',authMiddleware.authUser,userController.logoutUser);
module.exports=routes;
