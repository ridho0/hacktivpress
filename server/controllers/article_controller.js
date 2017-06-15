const Article = require('../models/article')
const User = require('../models/user')

module.exports = {
  createData : function(req, res){
    Article.create({
      title : req.body.title,
      content : req.body.content,
      category : req.body.category,
      author : req.body.author
    }, (err, record) => {
      err ? res.json({ err }) : res.json(record)
    })
  },//create data
  getAllData : function(req, res){
    Article.find({})
      .populate('author','username')
      .exec((err, records) => {
        err ? res.json({ err }) : res.json(records)
      })
  },//get all data
  getOneData : function(req, res){
    Article.findById(req.params.id)
      .populate('author','username')
      .exec((err, record) => {
        err ? res.json({ err }) : res.json(record)
      })
  },//get one data
  getByAuthor : function(req, res){
    User.findOne({username : req.params.author}, (err, record) => {
      console.log(record._id);
      if(!err){
        Article.find({author: record._id})
          .populate('author','username')
          .exec((err, articles) => {
            console.log('masuk');
            console.log(articles);
            !err ? res.json(articles) : res.json({ err })
          })
      }
      console.log('disini');
      res.json({ err })
    })
  },//get by author
  getByCategory: function(req, res){
    Article.find({category:req.params.category})
      .populate('author','username')
      .exec((err, records) => {
        err ? res.json({ err }) : res.json(records)
      })
  },//get by category
  updateData : function(req, res){
    Article.findById(req.params.id, (err, record) => {
      if(!err){
        Article.findByIdAndUpdate(req.params.id, {
          $set: {
            title : req.body.title || record.title,
            content : req.body.content || record.content,
            category : req.body.category || record.category,
            author : req.body.author || record.author
          }
        }, {new:true})
        .exec((err, record)=>{
          err ? res.json({ err }) : res.json(record)
        })
      }
    })
  },//update data
  removeData : function(req, res) {
    Article.findByIdAndRemove(req.params.id)
      .exec((err, record) => {
        err ? res.json({ err }) : res.json(record)
      })
  }// remove data
}
