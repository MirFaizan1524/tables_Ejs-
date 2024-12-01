const mongoose = require('mongoose');

let dbConnect = async()=>{
              mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_NAME}`);         
}
module.exports = dbConnect;