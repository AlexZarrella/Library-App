const express       = require('express');
const userRouter    = express.Router();
const User          = require ('../models/user');
const bcrypt        = require('bcryptjs');
const passport      = require('passport');

userRouter.get('/signup', (req, res, next)=>{

    res.render('userViews/signupPage')
});

userRouter.post('/signup', (req, res, next)=>{
    const thePassword = req.body.thePassword;
    const theUsername = req.body.theUsername;
    

    if(thePassword === "" || theUsername=== "" ){
        res.render('userViews/signupPage', {errorMessage: "Please fill in both a username and password in order to create an account"})
        return;
    }
//tells if username is already taken
    User.findOne({'username': theUsername})
    .then((theUser)=>{
        if (theUser !== null){
            res.render('userViews/signupPage', {errorMessage: `Sorry, the username ${theUsername} is already taken` })
            return;
        } // ends the if statement, NO .catch

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(thePassword, salt);

    User.create({username: theUsername, password: hashedPassword})
    .then((response)=>{
        res.redirect('/');
    })
    .catch((err)=>{
        next(err); 
    })
}) // ends the .then from User.findOne
});



//using passport

userRouter.get("/login", (req, res, next) => {
    res.render("userViews/loginPage", { "message": req.flash("error") });
  });

  
userRouter.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  }));

userRouter.get("/logout", (req, res, next)=>{
    req.logout();
          res.redirect("/login")
  });









module.exports = userRouter;