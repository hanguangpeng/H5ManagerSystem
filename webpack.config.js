/**
 * Created by 韩旭森 on 2017/4/27.
 */

var path = require("path");

module.exports = {
    //主文件入口
    entry:"./src/index.js",
    //编译的文件路径
    output:{
        //在任何模块文件内部，可以使用__dirname变量获取当前模块文件所在目录的完整绝对路径
        path:path.resolve(__dirname, './dist'),
        filename:"build.js"
    },
    module:{
        //一些特定的编译规则
        loaders:[
            {
                //让webpack去验证文件时候是.js结尾将其转换
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/
            }
        ]
    }
};