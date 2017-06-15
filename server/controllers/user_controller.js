const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config();
const secret = process.env.SECRET_KEY;
const salt = process.env.SALT;

module.exports = {
  register : function(req, res) {
    let hash = bcrypt.hashSync(req.body.password, salt)
    User.create({
      username : req.body.username,
      password : hash
    }, (err, record) => {
      err ? res.json({ err }) : res.json(record)
    })
  },
  login : function(req,res) {
    User.findOne({username : req.body.username}, (err, record) => {
      if(!err) {
        if(bcrypt.compareSync(req.body.password, salt)){
          let token = jwt.sign({username: record.username, id: record._id}, secret)
        }
      }
    })
  },
  delete : function(req, res) {
    User.findByIdAndRemove(req.params.id)
      .exec((err, record) => {
        err ? res.json({ err }) : res.json(record)
      })
  }
}
