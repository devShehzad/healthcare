const { request } = require("express");
const express = require("express");
const Ninja = require("../models/ninjas");
const router = express.Router();

//get list of data from data base
router.get("/ninjas", (req, res)=>{
    res.send({type:'Get'});
});
// post data into database
router.post("/ninjas", (req, res, next)=>{
  Ninja.create(req.body).then((ninja)=>{
    res.send(ninja);
  }).catch(next)
   
});
// edit data in database
router.put("/ninjas/:id", (req, res, next)=>{
    Ninja.findByIdAndUpdate({_id:req.params.id}, req.body).then(()=>{
        Ninja.findOne({_id:req.params.id}).then((ninja)=>{
          res.send(ninja);
        });
       
    });
});
//delete data from databse
router.delete("/ninjas/:id", (req, res, next)=>{
    Ninja.findByIdAndRemove({_id: req.params.id}).then((ninja)=>{
      res.send(ninja);
    });
});

module.exports = router