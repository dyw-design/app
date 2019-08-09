let express = require('express');
let mongo = require('../utils/mongodb');
mongo({
    dbName:'shopImage',
    collectionName:'image1'
},(client,collection)=>{
    let  time = Date.now();
    collection.insert([
        { 
            "id":1,
            "title" : "校园清纯",
            "img_url":"/upload/imageList/school-girl.png", 
            "zhaiyao" : "美好的校园生活，透漏着仙灵般的气息"
        },
        { 
            "id":2,
            "title" : "校园清纯",
            "img_url":"/upload/imageList/school-girl1.png", 
            "zhaiyao" : "美好的校园生活，透漏着仙灵般的气息"
        },
        { 
            "id":3,
            "title" : "校园清纯",
            "img_url":"/upload/imageList/school-girl2.png", 
            "zhaiyao" : "美好的校园生活，透漏着仙灵般的气息"
        },
        { 
            "id":4,
            "title" : "极致简约",
            "img_url":"/upload/imageList/img4.png", 
            "zhaiyao" : "极致简约，我们一起相约再次"
        },
        { 
            "id":5,
            "title" : "极致简约",
            "img_url":"/upload/imageList/img5.png", 
            "zhaiyao" : "极致简约，我们一起相约再次"
        },
        { 
            "id":6,
            "title" : "极致简约",
            "img_url":"/upload/imageList/img6.png", 
            "zhaiyao" : "极致简约，我们一起相约再次"
        },
        { 
            "id":7,
            "title" : "极致简约",
            "img_url":"/upload/imageList/img7.png", 
            "zhaiyao" : "极致简约，我们一起相约再次"
        },
        { 
            "id":8,
            "title" : "极致简约",
            "img_url":"/upload/imageList/img8.png", 
            "zhaiyao" : "极致简约，我们一起相约再次"
        },
        { 
            "id":9,
            "title" : "极致简约",
            "img_url":"/upload/imageList/img9.png", 
            "zhaiyao" : "极致简约，我们一起相约再次"
        },
        { 
            "id":10,
            "title" : "极致简约",
            "img_url":"/upload/imageList/img10.png", 
            "zhaiyao" : "极致简约，我们一起相约再次"
        }
    ],(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
})
