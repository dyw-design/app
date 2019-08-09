let express = require('express');
let mgdb = require('../../utils/mongodb');
let router = express.Router();
router.get('/',(req,res,next)=>{
    // console.log('banner');
    mgdb({
        dbName:'shopapp',
        collectionName:'imageNav'
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
    // console.log(req.params);
    let _id = req.params.id;
    mgdb({
        dbName:'shopapp',
        collectionName:'imageNav'
    },(client,collection,ObjectID)=>{
        collection.find({
            _id:ObjectID(_id)
        }).toArray((err,result)=>{
            // console.log('result',result);
            if(!err){
                res.send({err:0,msg:"查找成功",data:result})
            }else{
                res.send({err:1,msg:'未找到数据'})
                client.close();
            }
        })
    })
})
module.exports = router;