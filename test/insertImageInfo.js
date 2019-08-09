let express = require('express');
let mongo = require('../utils/mongodb');
mongo({
    dbName:'shopImage',
    collectionName:'imageinfo1'
},(client,collection)=>{
    let  time = Date.now();
    collection.insert([
        { 
            "id":1,
            "title" : "校园清纯",
            "click":3,
            "a_time":time,
            "content" : "美好的校园生活，透漏着仙灵般的气息,优雅的身姿，曼妙的的步伐，给人一种幸福的美感"
        },
        { 
            "id":2,
            "title" : "校园清纯",
            "click":3,
            "a_time":time,
            "content" : "美好的校园生活，透漏着仙灵般的气息,优雅的身姿，曼妙的的步伐，给人一种幸福的美感"
        },
        { 
            "id":3,
            "title" : "校园清纯",
            "click":31,
            "a_time":time,
            "content" : "美好的校园生活，透漏着仙灵般的气息,优雅的身姿，曼妙的的步伐，给人一种幸福的美感"
        },
        { 
            "id":4,
            "title" : "校园清纯",
            "click":32,
            "a_time":time,
            "content" : "美好的校园生活，透漏着仙灵般的气息,优雅的身姿，曼妙的的步伐，给人一种幸福的美感"
        },
    ],(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
})
