const http = require('http');
const url = require('url');
const server = new http.Server();
server.listen(4200, '127.0.0.1');

server.on('request', function (req, res) {
    const urlParsed = url.parse(req.url, true);

    const cb_name= urlParsed.query["callback"];
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers", "Origin,Content-Type, X-Auth-Token, Authorization");

    if (urlParsed.pathname === '/customer/13') {
        let answer = {"Name": "Adam", "Id" : 13};
        let message = `${cb_name}(${JSON.stringify(answer)})`
        res.end(message)
    }

    if (urlParsed.pathname === '/customer/another') {
        let answer = {"Name": "Bob", "Id" : 123};
        let message = `${cb_name}(${JSON.stringify(answer)})`
        res.end(message)
    }

});