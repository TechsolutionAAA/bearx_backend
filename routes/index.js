const express = require("express");
const router = express.Router();
const UserCtr = require("../controller/UserCtr");

const validation = (keys) => {
    return function(req, res, next) {
        keys.forEach(key => {
            if(!req.body[key]) res.status(400).json({message: `Not found ${key} field!`});
        });
        next();
    }
};

router.get("/user/admin/initvalue", UserCtr.admininit);
router.post("/user/setticketamount",validation(["item", "amount"]), UserCtr.setticketamount);
router.post("/user/setticketowner", validation(["item",  "owner"]), UserCtr.setticketowner);
router.post("/user/gettickeowned", validation(["item", "account"]), UserCtr.gettickeowned);
router.post("/user/getticketdata",validation(["item"]), UserCtr.getticketdata);

module.exports = router;