let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mongodb');
router.get('/',(req,res,next)=>{
    mgdb({
        dbName:'shopapp',
        collectionName:'cart'
    },(client,collection)=>{
        collection.find({
        },{
            limit:req.query._limit,
            skip:req.query._page * req.query._limit,
            sort:{[req.query._sort]: 1}//-1倒序
        }).toArray((err,result)=>{
            if(!err){
                // console.log(result)
                res.send({err:0,msg:'成功',data:result})
            }
        })
    })
})
router.get('/:id',(req,res,next)=>{
    console.log(req.params)
    let id = req.params.id;
    let arr = id.split(',');
    mgdb({
      dbName:'shopapp',
      collectionName:'cart'
    },(client,collection)=>{
      collection.find({
      }).toArray((err,result)=>{
        if(!err){
          var data = [];
          for(var j = 0;j<arr.length;j++){
            for(var i = 0;i < result.length;i++){
              if(result[i].id == arr[j]){
                data.push(result[i]);
              }
            }
          }
          res.send({err:0,msg:'成功',data})
  
        }else{
          res.send({err:1,msg:'查无数据'})
  
        }
      })
    })
  })
module.exports = router;