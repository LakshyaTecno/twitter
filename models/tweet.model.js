
 module.exports = ( sequelize, Sequelize ) =>{
    
    const Tweet = sequelize.define("tweet",{
        description : {
            type : Sequelize.STRING
        }
    });

    return Tweet ;
}