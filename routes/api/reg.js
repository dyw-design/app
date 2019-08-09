let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mongodb');
let fs = require('fs');
let pathLib = require('path');
let bcrypt = require('bcrypt');

router.post('/',(req,res,next)=>{
    // console.log('reg');
    // console.log(req.file);
// console.log(req.body)
    let {user,password,nikename,icon} = req.body;
    // console.log(icon);
    if(!user || !password){
        res.send({err:1,msg:'user,password为必传参数'});
        return;
    }
    let follow = 0;
    let fans = 0;
    let time = Date.now();
    password = bcrypt.hashSync(password,10);
    nikename = nikename || '系统给的（需要借助昵称生成库';
    // console.log(req.files);
    if(!req.file && req.files.length > 0){
        fs.renameSync(
            req.files[0].path,
            req.files[0].path + pathLib.parse(req.files[0].originalname).ext
        )
        icon = '/upload/user/' + req.files[0].filename + pathLib.parse(req.files[0].originalname).ext
    }else{
        icon = '/upload/noimage.png';
    }
    // console.log(icon)
    mgdb({
        dbName:'dyw',
        collectionName:'user' 
    },(client,collection)=>{
        collection.find({
            user
        },{
        }).toArray((err,result)=>{
            if(!err){
                if(result.length>0){
                    res.send({err:1,msg:"用户名已存在"});
                    if(icon.indexOf('noimage') === -1){
                        fs.unlinkSync('./public'+icon)
                      }
                    client.close();
                }else{
                collection.insertOne({user,password,nikename,follow,fans,time,icon},(err,result)=>{
                    if(!err){
                        res.send({err:0,msg:"注册成功",data:result.ops[0]})
                    }else{
                        res.send({err:1,msg:"注册失败"})
                        client.close();
                    }
                })
            }
        }else{
            res.send({err:0,msg:"兜库失败"});
            client.close();
        }   
    })
    })
})

module.exports = router;