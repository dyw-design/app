let express = require('express');
let mongo = require('../utils/mongodb');
mongo({
    dbName:'shopapp',
    collectionName:'cart'
},(client,collection)=>{
    let  time = Date.now();
    collection.insert([
        // "title":[
        //     ["夏季天丝休闲裤男薄款宽松直筒裤子男韩版潮流百搭冰丝九分裤西裤","夏季丝光棉男士短袖圆领T恤冰丝纯棉宽松长袖体恤衫中年潮流男装","丝滑垂感冰丝休闲裤男士夏季超薄款尼龙面料宽松直筒运动裤男裤子","夏季2019新款男士翻领短袖T恤V领POLO衫天丝光棉冰丝纯棉潮流男装"],
        //     ["七匹狼短袖T恤 中年爸爸装男士冰丝光棉商务polo上衣2019夏季新款","【DAIO SUMMER / 新品】韩国针织短袖男纯色圆领T恤冰丝修身打底","ak男装t恤男短袖欧货男款 男士体桖品牌专柜正品美军成熟战术冰丝","行走的空调衫男士款羊奶丝提花冰丝短袖T恤运动速干休闲降温半袖"]
        // ],
        // "description":["春夏新品","新品","耐克运动女款板鞋","耐克弹力透气 中性款"],
        // "shops":["森马官方旗舰店","耐克官方旗舰店","亚马逊官方旗舰店","韩国潮流官方旗舰店"]
        // ],
        // "imgList": [
        //     [
        //         "https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/864524585/O1CN01LGH86W1jjyUUFajhm_!!864524585.jpg_230x230.jpg_.webp",
        //         "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1055528134/O1CN0102Y0UO29xQ61VE3tG_!!1055528134.jpg_230x230.jpg_.webp",
        //         "https://img.alicdn.com/imgextra/i3/132243136/O1CN011w48kR1Z2KZoUkmNJ_!!0-saturn_solar.jpg_220x220.jpg_.webp",
        //         "https://g-search1.alicdn.com/img/bao/uploaded/i4/i2/1055528134/O1CN016ydpo429xQ6ifp4Iu_!!1055528134.jpg_230x230.jpg_.webp"
        //     ],
        //     [
        //         "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/106963166/TB2xssDgCCWBuNjy0FhXXb6EVXa_!!106963166.jpg_230x230.jpg_.webp",
        //         "https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/1924278007/O1CN01IA3eKd291Fp2l9Ktj_!!1924278007.jpg_230x230.jpg_.webp",
        //         "https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/86616971/O1CN01kKWbjj21MlWVlXaY5_!!0-item_pic.jpg_230x230.jpg_.webp",
        //         "https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/3007488445/O1CN018XN6sa2CFrH56nqBx_!!0-item_pic.jpg_230x230.jpg_.webp"
        //     ]
        // ],
        // "moreImg":[
        //     "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-1_720x909_70.jpg",
        //     "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-2_720x909_70.jpg",
        //     "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-3_720x909_70.jpg"
        // ]
        // {
        //     "id":3,
        //     "title":"夏季丝光棉男士短袖圆领T恤冰丝纯棉宽松长袖体恤衫中年潮流男装",
        //     "description":"春夏新品",
        //     "shops":"森马官方旗舰店",
        //     "limit_price":"89",
        //     "original_price":"199",
        //     "discount":"4.7",
        //     "imgList":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/86616971/O1CN01kKWbjj21MlWVlXaY5_!!0-item_pic.jpg_230x230.jpg_.webp",
        //     "moreImg":[ "https://a4.vimage1.com/upload/merchandise/pdc/544/548/464510208477548544/0/880555-001-5_218x274_70.jpg",
        //     "https://a4.vimage1.com/upload/merchandise/pdc/544/548/464510208477548544/0/880555-001-5_218x274_70.jpg",
        //     "https://a4.vimage1.com/upload/merchandise/pdc/544/548/464510208477548544/0/880555-001-5_218x274_70.jpg"]
        // }
        {"id" : 1, "title" : "耐克Nike AIR ZOOM PEGASUS 34 男款跑鞋", "description" : "耐克运动跑鞋", "shops" : "森马官方旗舰店", "limit_price" : "509", "original_price" : "899", "discount" : "5.7", "imgList" : "https://a4.vimage1.com/upload/merchandise/pdc/544/548/464510208477548544/0/880555-001-5_218x274_70.jpg", "moreImg" : [ "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-1_720x909_70.jpg", "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-2_720x909_70.jpg", "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-3_720x909_70.jpg" ] },
{ "id" : 2, "title" : "耐克Nike TESSEN 女款运动鞋", "description" : "耐克 女款运动鞋", "shops" : "耐克官方旗舰店", "limit_price" : "509", "original_price" : "599", "discount" : "3.7", "imgList" : "https://a2.vimage1.com/upload/merchandise/pdc/078/211/358093934211078/0/AA2172-601-5_218x274_70.jpg", "moreImg" : [ "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-1_720x909_70.jpg", "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-2_720x909_70.jpg", "https://a.vimage1.com/upload/merchandise/pdcvop/00605599/10000630/1534671224-217938183647330340-3_720x909_70.jpg" ] }
    ],(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
})
