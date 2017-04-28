/**
 * Created by 韩旭森 on 2017/4/28.
 */
//var mongoClient = require('mongodb').MongoClient;
//var DB = 'mongodb://localhost:27017/demo';
//var insertData = function(db, cb){
//    var collection = db.collection('test');
//    var data = [{"name":"我要连接",age:18}, {"name":"连上了", age:20}];
//
//    collection.insert(data, function(err, result){
//        if(err) {
//            console.log('Error' + err);
//            return;
//        }
//        cb(result);
//    });
//};
//
//mongoClient.connect(DB, function(err, db) {
//    console.log("连接success");
//    insertData(db, function(result) {
//        console.log(result);
//        db.close();
//    })
//});


var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/demo1';

var insertData = function(db, callback) {
    //连接到表 site
    var collection = db.collection('test');
    //插入数据
    var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
    collection.insert(data, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
};

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});
