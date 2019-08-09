let express = require('express');
let mongo = require('../utils/mongodb');
mongo({
    dbName:'shopapp',
    collectionName:'newsComments1'
},(client,collection)=>{
    let  time = Date.now();
    collection.insert([
        { 
           "user_name":"dyw1",
           "a_time":time,
           "content":"第二页数据"
        },
        { 
           "user_name":"dyw2",
           "a_time":time,
           "content":"第二页数据"
        },
        { 
           "user_name":"dyw3",
           "a_time":time,
           "content":"第二页数据"
        },
        { 
           "user_name":"dyw4",
           "a_time":time,
           "content":"第二页数据"
        },
        { 
           "user_name":"dyw5",
           "a_time":time,
           "content":"第二页数据"
        },
        { 
           "user_name":"dyw6",
           "a_time":time,
           "content":"第二页数据"
        },
       
    ],(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
})
