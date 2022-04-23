let mongoose = require("mongoose");

var objUserInfo = {
  ticketname: {
    type: String,
  },
  ticketamount: {
    type: String,
  },
  owners: [
    {
      account: {
        type: String,
      },
    },
  ],
};

let userinfoSchema = mongoose.Schema(objUserInfo);
var UserinfoSchemas = (module.exports = mongoose.model(
  "userinfoSchemas",
  userinfoSchema
));

module.exports.getUsers = function (callback, limit) {
  UserinfoSchemas.find(callback).limit(limit);
};
