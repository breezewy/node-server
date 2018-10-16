##### 这是一个简单的http静态服务器，功能比较单一，只处理GET请求
##### 用法：
            1.首先cd到node-server目录，启动node server.js; 
            2. 浏览器输入 localhost:8080/test.html / 或者localhost:8080/test.css  /或者localhost:8080/index.js /或者localhost:8080/getWeather
##### server.js 代码讲解：
```
var http  = require('http');  //引入http模块
var fs = require('fs');       //引入fs模块
var url = require('url');     //引入url模块


//创建服务器
var server = http.createServer(function(req,res){
    var pathObj = url.parse(req.url,true);  //解析req.url为对象
    
    switch (pathObj.pathname) {  //判断url对象的pathname
        case '/getWeather':      //如果等于 /getWeather mock数据接口
         var ret;                //设置mock数据
        if (pathObj.query.city==='hangzhou'){
            ret = {
                city:'hangzhou',
                weather:'晴天'
            }
            
        }else{
            ret = {
                city:'pathObj.query.city',
                weather:'不知道'
            }
    
        }
        res.end(JSON.stringify(ret));  //把对应的mock数据解析为字符串，然后写入响应体
        break;
    
        case '/user/123':             //如果pathObj.pathname 是 指定的/user/123
            res.end(fs.readFileSync(__dirname +'/sample/user.txt'));   //读取user.txt文件内容，然后写入响应体
            break;

        default:
            res.end(fs.readFileSync(__dirname + '/sample'+pathObj.pathname));  //如果pathObj.pathname 不是上边两种情况 ，那么就当请求静态文件处理
            break;
    }
});

//启动服务器，并监听8080端口
server.listen(8080);
```
