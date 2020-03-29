var express = require('express');
var router = express.Router();
const Mongolib = require("../mongodb/mongodblib");
/* GET users listing. */
router.get('/', function(req, res, next) {
  Mongolib.getDatabase(db=>{
    Mongolib.getAllUsers(db,docs=>{
        res.send(docs);
    })
})
});
router.get('/:userId', function(req, res, next) {
   
  Mongolib.getDatabase(db=>{
      Mongolib.getUserById(req.params.userId,db,docs=>{
          res.send(docs);
      })
  })
});
router.post('/', function(req, res, next) {
  Mongolib.getDatabase(db=>{
      Mongolib.createUser(req.body,db,docs=>{
          res.send(docs);
      })
  })
});
router.delete('/:userId', function(req,res,next){
  Mongolib.getDatabase(db=>{
      Mongolib.deleteUser(req.params.userId,db,docs=>{
          res.send(docs);
      })
  })
});
router.put('/:userId', function(req,res,next){
  Mongolib.getDatabase(db=>{
      Mongolib.updateUser(req.params.userId,req.body[0],db,docs=>{
          res.send(docs);
      })
  })
});
module.exports = router;
