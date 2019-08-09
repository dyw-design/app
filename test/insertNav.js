let express = require('express');
let mongo = require('../utils/mongodb');
mongo({
    dbName:'shopapp',
    collectionName:'imageNav'
},(client,collection)=>{
    let  time = Date.now();
    collection.insert([
        { 
           "title":"家居生活",
           "id":1
        },
        { 
           "title":"摄影设计",
           "id":2
        },
        { 
           "title":"明星美女",
           "id":3
        },
        { 
           "title":"明星写真",
           "id":4
        },
        { 
           "title":"青纯美女",
           "id":5
        },
        { 
           "title":"古典美女",
           "id":6
        },
       
    ],(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
})
