const config = require("../config/db");
const bcrypt = require("bcryptjs");
const userinfoSchema = require("../models/userinfo.js");
const e = require("express");

exports.admininit = async (req, res) => {
  console.log("Called this function");
  userinfoSchema
    .create(
      { ticketname: "avatar", ticketamount: 1, owners: [] },
      { ticketname: "nood", ticketamount: 1, owners: [] },
      { ticketname: "fluffies", ticketamount: 1, owners: [] },
      { ticketname: "meta", ticketamount: 1, owners: [] },
      { ticketname: "elysium", ticketamount: 1, owners: [] },
      { ticketname: "espadra", ticketamount: 1, owners: [] },
      { ticketname: "immortal", ticketamount: 1, owners: [] },
      { ticketname: "samurai", ticketamount: 1, owners: [] },
      { ticketname: "lostland", ticketamount: 1, owners: [] },
      { ticketname: "alfie", ticketamount: 1, owners: [] },
      { ticketname: "NFTIsland", ticketamount: 1, owners: [] }
    )
    .then((resp) => res.json({ msg: "success", data: resp }))
    .catch((err) => console.log(err));
};

exports.setticketamount = async (req, res) => {
  userinfoSchema
    .findOne({ ticketname: req.body.item })
    .then((ticketdata) => {
      if (ticketdata) {
        ticketdata.ticketamount = req.body.amount;
        ticketdata
          .save()
          .then((ticket) => res.json({ msg: true }))
          .catch((err) => console.log(err));
      } else {
        res.json({ msg: false });
      }
    })
    .catch((err) => console.log(err));
};

exports.setticketowner = async (req, res) => {
  userinfoSchema
    .findOne({ ticketname: req.body.item })
    .then((ticketdata) => {
      let owners = ticketdata.owners;
      let isExist = false;
      let update_item = {
        account: req.body.owner,
      };
      for (let i = 0; i < owners.length; i++) {
        if (owners[i].account === update_item.account) {
          isExist = true;
        }
      }
      if (!isExist) {
        owners.push(update_item);
        userinfoSchema
          .findOneAndUpdate({ ticketname: req.body.item }, { owners: owners })
          .then((update) => {
            res.json({ result: true });
          })
          .catch((err) => console.log(err));
      } else {
        res.json({ result: false });
      }
    })
    .catch((err) => console.log(err));
};

exports.gettickeowned = async (req, res) => {
  userinfoSchema
    .findOne({ ticketname: req.body.item })
    .then((ticketdata) => {
      if (ticketdata) {
        let owners = ticketdata.owners;
        let isExist = false;
        let search_item = {
          account: req.body.account,
        };
        for (var i = 0; i < owners.length; i++) {
          if (owners[i].account == search_item.account) {
            isExist = true;
          } else {
            isExist = false;
          }
        }
        if (isExist) {
          res.json({ result: true });
        } else {
          res.json({ result: false });
        }
      }
    })
    .catch((err) => console.log(err));
};

exports.getticketdata = async (req, res) => {
  userinfoSchema
    .findOne({ ticketname: req.body.item })
    .then((ticketdata) => {
      if (ticketdata) {
        res.json(ticketdata.ticketamount);
      } else {
        res.json({ msg: "Something went wrong" });
      }
    })
    .catch((err) => console.log(err));
};
