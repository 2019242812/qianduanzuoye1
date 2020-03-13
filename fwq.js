var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var httpServer = http.createServer(process);
var port = 8080;
httpServer.listen(port, '127.0.0.1');
function process (req, res) {
    var mime = {
        "css": "text/css",
        "gif": "image/gif",
        "html": "text/html",
        "ico": "image/x-icon",
        "jpeg": "image/jpeg",
        "jpg": "image/jpeg",
        "js": "text/javascript",
        "json": "application/json",
        "pdf": "application/pdf",
        "png": "image/png",
        "svg": "image/svg+xml",
        "swf": "application/x-shockwave-flash",
        "tiff": "image/tiff",
        "txt": "text/plain",
        "wav": "audio/x-wav",
        "wma": "audio/x-ms-wma",
        "wmv": "video/x-ms-wmv",
        "xml": "text/xml"
    };
    var requestUrl = req.url;
    var pathName = url.parse(requestUrl).pathname;
    var pathName = decodeURI(pathName);
    if (!pathName.endsWith('/') && path.extname(pathName) === '') {
        pathName += '/';
        var redirect = "http://" + req.headers.host + pathName;
        res.writeHead(301, {
            location: redirect
        });
        res.end();
    }
    var filePath = path.resolve(__dirname + pathName);
    console.log(filePath);
    var ext = path.extname(pathName);
    ext = ext ? ext.slice(1) : 'unknown';
    var contentType = mime[ext] || "text/plain";
    fs.stat(filePath, (err, stats) => {
        if (err) {
            res.writeHead(404, { "content-type": "text/html" });
            res.end("<h1>404 Not Found</h1>");
        }
        if (!err && stats.isFile()) {
            readFile(filePath, contentType);
        }
        if (!err && stats.isDirectory()) {
            var html = "<head><meta charset = 'utf-8'/></head><body><ul>";
            fs.readdir(filePath, (err, files) => {
                if (err) {
                    console.log("读取路径失败！");
                } else {
                    var flag = false;
                    for (var file of files) {
                        if (file === "index.html") {
                            readFile(filePath + (filePath[filePath.length-1]=='/' ? '' : '/') + 'index.html', "text/html");
                            flag = true;
                            break;
                        };
                        html += `<li><a href='${file}'>${file}</a></li>`;
                    }
                    if(!flag) {
                        html += '</ul></body>';
                        res.writeHead(200, { "content-type": "text/html" });
                        res.end(html);
                    }
                }
            });
        }
        function readFile(filePath, contentType){
            res.writeHead(200, { "content-type": contentType });
            var stream = fs.createReadStream(filePath);
            stream.on('error', function() {
                res.writeHead(500, { "content-type": contentType });
                res.end("<h1>500 Server Error</h1>");
            });
            stream.pipe(res);
        }
    });
}

  
 