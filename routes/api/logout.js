let express = require('express');
let mgdb = require('../../utils/mongodb');
let router = express.Router();
router.delete('/',(req,res,next)=>{
    console.log('logout');
    req.session['newsapp_username'] = undefined;
    res.send({err:1,msg:'注销成功'});
})
module.exports = router;
