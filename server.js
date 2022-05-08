const bodyParser = require('body-parser');
const express = require('express');
const serverConfig = require('./configs/server.config');

const app = express();

app.use(bodyParser.json());




const db = require("./models");

var User=db.user;
var tweet=db.tweet


User.hasMany(tweet);


  function init(){

        var Users = [
            {
                username : 'Lakshya',
                email : "Lakshya@gmail.com",
                password:"Lakshya123"
            },
            { 
                username : 'Vasu',
                email : "vasu@gmail.com",
                password:"vasu123"
            },
            {
                username : 'user',
                email : "user@gmail.com",
                password:"user123"
            },
        ];
        User.bulkCreate(Users).then(()=>{
            console.log('users are added');
        }).catch(err =>{
            console.log("Error in initializing the users", err.message);
        })

    }


    db.sequelize.sync({force:true}).then(()=>{
        console.log("table dropped and recreated");
        init();
    }).catch(err=>{
        console.log(err.message);
    })


    require('./routes/user.sigIn')(app);

app.listen(serverConfig.PORT,()=>{
    console.log("Application started on port no :",serverConfig.PORT );
})