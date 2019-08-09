let express = require('express');
let mgdb = require('../utils/mongodb');
let app = express();
app.listen(3500);
app.get('/api',(req,res)=>{
    mgdb({
        dbName:'dyw',
        collectionName:'banner'
    },(client,collection)=>{
        collection.find({
        },{
            limit:req.query._limit,
            skip:req.query._page * req.query._limit,
            sort:{[req.query._sort]: -1}
        }).toArray((err,result)=>{
            if(!err){
                console.log(result)
                res.send({err:1,msg:'成功',data:result})
            }
        })
    })
})