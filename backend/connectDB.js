var mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_LINK)
  .then((data) => {
   console.log("connection successful with database");
  })
  .catch((err) => {
    console.log(process.env.MONGO_LINK)
    console.log("Error Got while setupping connection with database :" + err);
  });
