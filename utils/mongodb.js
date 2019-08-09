let mongoct= require("mongodb").MongoClient;
let ObjectID =require("mongodb").ObjectID;
module.exports = (opts,callback)=>{
    opts = opts || {};
    opts.url = opts.url || 'mongodb://127.0.0.1:27017';
    opts.dbName = opts.dbName || 'dyw';
    opts.collectionName = opts.collectionName || 'user';  
    mongoct.connect(opts.url,{useNewUrlParser:true},(err,client)=>{
        if(!err){
            let db = client.db(opts.dbName);
            let collection = db.collection(opts.collectionName);
            callback(client,collection,ObjectID);
        }else{
            console.log("mongodb服务端链接失败");
        }
    })
}