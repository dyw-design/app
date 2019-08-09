let express = require('express');
let mongo = require('../utils/mongodb');
mongo({
    dbName:'shopapp',
    collectionName:'banner'
},(client,collection)=>{
    let  time = Date.now();
    collection.insert([
        { 
            "title" : "banner1",
            "name":"热卖", 
            "banner" : "http://localhost:3010/upload/banner/banner1.jpg"
        },
        { 
            "title" : "banner2",
            "name":"爆品", 
            "banner" : "http://localhost:3010/upload/banner/banner2.jpg"
        },
        { 
            "title" : "banner3",
            "name":"推荐", 
            "banner" : "http://localhost:3010/upload/banner/banner3.jpg"
        }
    ],(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
})
