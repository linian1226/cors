var http = require('http')
var fs  = require('fs')
var path = require('path')
var url = require('url')
http.createServer(function(req,res){
	var pathObj = url.parse(req.url,true)
	switch(pathObj.pathname){
		case '/getNews':
			var news = [
		        "第11日前瞻：中国冲击4金 博尔特再战200米羽球",
		        "正直播柴飚/洪炜出战 男双力争会师决赛",
		        "女排将死磕巴西！郎平安排男陪练模仿对方核心"
		        ]
		    //res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:8080')
		    res.setHeader('Access-Control-Allow-Origin','*')//任意链接
		    res.end(JSON.stringify(news))
		    break;
		default:
			fs.readFile(path.join(__dirname,pathObj.pathname),function(err,data){
				if(err){
					res.writeHead(404,'not found')
					res.end('<h1>404 Not Found</h1>')
				}else{
					res.end(data)
				}
			})
	}

}).listen(8080)