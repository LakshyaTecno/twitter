
const bcrypt = require('bcryptjs');

const db = require('../models');

const User = db.user;
const jwt = require('jsonwebtoken');

const secretKey = require('../configs/secret.config');


exports.signin = (req,res)=>{
    //Check if the user exist ?

    User.findOne({
        where : {
            email : req.body.email
        }
    }).then(user =>{
        if(!user){
            res.status(404).send({
                message : "User Not found"
            })
            return;
        }

        //verify the password

      //  console.log(req.body.password)
        var passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );

        if(!passwordIsValid){
            res.status(401).send({
                message : "Invalid Password"
            })
        }

        /**
         * Need to generate the access token
         */
        var token = jwt.sign({id: user.id} ,secretKey.secret,{
            expiresIn : 3000 // This again we could have kept in the config file
        });
            res.status(200).send({
                id : user.id,
                username : user.username,
                email : user.email,
                accessToken : token
            });
    }).catch(err=>{
        res.status(500).send({
            message : "Internal error while signin"
        })
    })
}