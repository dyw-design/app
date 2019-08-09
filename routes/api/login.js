let express = require('express');
let router = express.Router();
let mgdb = require('../../utils/mongodb');
let bcrypt = require('bcrypt');
router.post('/',(req,res,next)=>{
    // console.log('login');
    let {user,password} = req.body;
    if(!user || !password){
        res.send({err:1,msg:'用户名和密码不能为空'});
        return;
    }
    //从数据库找值
    mgdb({
        dbName : 'dyw',
        collectionName : 'user'
    },(client,collection)=>{
        collection.find({
            user
        },{
            projection:{user:0}
        }).toArray((err,result)=>{
            if(!err){
                if(result.length>0){
                    // console.log(result)
                    // console.log(result[0])
                    let userdata = result[0];
                    let pass = bcrypt.compareSync(password, userdata.password);//解密
                    if(pass){
                        req.session['newsapp_username']=result[0]._id;
                        res.send({err:0,msg:'登录成功',data:userdata})
                    }
                }else{
                    res.send({err:1,msg:'用户名或者密码有误'})
                }
                client.close();
            }else{
                res.send({err:1,msg:'兜库失败'})
                client.close();
            }
        })
    })
})
module.exports = router;