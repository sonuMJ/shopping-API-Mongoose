const mongoose = require('mongoose');
const constant = require('./constants');

const URL = constant.DB_URL;
let dbconnection = mongoose.connect(URL, {
    useNewUrlParser:true, 
    useUnifiedTopology:true
})

module.exports = dbconnection;


// const mongoose = require("mongoose");

// // Replace this with your MONGOURI.
// const MONGOURI = "";

// const InitiateMongoServer = async () => {
//   try {
//     await mongoose.connect(MONGOURI, {
//       useNewUrlParser: true
//     });
//     console.log("Connected to DB !!");
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
// };

// module.exports = InitiateMongoServer;