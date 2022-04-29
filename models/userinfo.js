let mongoose = require("mongoose");

var objUserInfo = {
  ticketname: {
    type: String,
    default: "bearx"
  },
  ticketamount: {
    type: String,
    default: 1
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
