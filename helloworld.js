var http = require('http');
var fs = require('fs');
const { response } = require('express');

function serveStaticFile(res,path,contentType,responseCode){
    if(!responseCode) responseCode = 200;
    fs.readFile(__dirname + path,function(err,data){
        if(err){
        res.writeHead(500,{'Contenet-Type':'text/plain'});
        res.end('500 - Internal Error');
    }
    else {
        res.writeHead(responseCode,{'Content-Type':contentType});
        res.end(data);
    }
    }
    );   
}

http.createServer(function(req,res){
    var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '/home' : 
                    serveStaticFile(res,'public/home.html','text/html');
                    break;
        case '/about':
                    serveStaticFile(res,'/public/about.html','text/html');
                    break;
        case '/none':
                    serveStaticFile(res,'/public/none.html','text/html');
                    break;
                
    case '/img/logo.jpg':
                    serveStaticFile(res,'public/images/logo.jpg','image/jpeg');
                    break;
        default:serveStaticFile(res,'public/404.html','text/html',404);
                break;
    }
}).listen(3000);
console.log('server started');