


 const model = require('../models');
 const Tweet = model.tweet; // It gets me the PRODUCT schema object - CRUD opera
 exports.create = (req, res)=>{
 
     /**
      * Get the req body
      */
 
     const tweet = {
         description : req.body.description,   
         email : req.body.email
     } 
     
     Tweet.create(tweet).then(tweet=>{
         console.log("Tweet added in the database with desc ", tweet.description);
         res.status(201).send(product);
     }).catch(err=>{
         console.log("Error while adding the Tweet with desc ", tweet.description);
         res.status(500).send({
             message: "Some internal error happened"
         })
     })
 
 }
 
 
 