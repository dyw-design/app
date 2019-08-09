let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mongodb');
router.get('/',(req,res,next)=>{
    // console.log(req.query);
    let page = req.query.page;
    let goodsNo = req.query.goodsId ? req.query.goodsId : ""; 
    switch(page){
        case '1':
           collectionName = 'shoes';
        break; 
        case '2':
           collectionName = 'cloth';
        break; 
        case '3':
           collectionName = 'bags';
        break; 
    }
    mgdb({
        dbName:'shopapp',
        collectionName
    },(client,collection,ObjectID)=>{
        if(goodsNo != ""){
            collection.find({
                _id:ObjectID(goodsNo)
            }).toArray((err,result)=>{
                if(!err){
                    res.send({err:0,msg:"查找成功",data:result})
                }else{
                    res.send({err:1,msg:'未找到数据'})
                    client.close();
                }
            })
        }else{
            collection.find({
            }).toArray((err,result)=>{
                if(!err){
                    res.send({err:0,msg:"查找成功",data:result})
                }else{
                    res.send({err:1,msg:'未找到数据'})
                    client.close();
                }
            })
        }
    })
})


module.exports = router;