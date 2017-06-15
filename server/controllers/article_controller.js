const Article = require('../models/article')
// ,
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
    Article.find({}, (err, records) => {
      err ? res.json({ err }) : res.json(records)
    })
  },//get all data
  getOneData : function(req, res){
    Article.findById(req.params.id, (err, record) => {
      err ? res.json({ err }) : res.json(record)
    })
  },//get one data
  getByAuthor : function(req, res){
    Article.find({author:req.params.author}, (err, records) => {
      err ? res.json({ err }) : res.json(records)
    })
  },//get by author
  getByCategory: function(req, res){
    Article.find({author:req.params.author}, (err, records) => {
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
