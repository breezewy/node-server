var http  = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req,res){
    var pathObj = url.parse(req.url,true);
    
    switch (pathObj.pathname) {
        case '/getWeather':
         var ret;
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
        res.end(JSON.stringify(ret));
        break;
    
        case '/user/123':
            res.end(fs.readFileSync(__dirname +'/sample/user.txt'));
            break;

        default:
            res.end(fs.readFileSync(__dirname + '/sample'+pathObj.pathname));
            break;
    }
});

server.listen(8080);