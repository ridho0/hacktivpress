const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

require('dotenv').config();
let secret = process.env.SECRET_KEY;

module.exports = {
  register : function(req, res) {
    let hash = bcrypt.hashSync(req.body.password, 8)
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
        if(bcrypt.compareSync(req.body.password, record.password)){
          let token = jwt.sign({username: record.username, id: record._id}, secret)
          res.json(token)
        }else {
          res.send('password salah')
        }
      }
      res.json({err})
    })
  },
  delete : function(req, res) {
    User.findByIdAndRemove(req.params.id)
      .exec((err, record) => {
        err ? res.json({ err }) : res.json(record)
      })
  }
}
