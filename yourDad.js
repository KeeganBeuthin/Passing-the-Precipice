const http = require('http');
const server = http.createServer((req, res)=>{
console.log(req.url, req.method);

res.setHeader('Content-Type', 'text/html');
res.write('<img src="http://beta.ems.ladbiblegroup.com/s3/content/ad0228a25fc540cb4a179b8c9a6b919d.png" alt=dat big boof>')
res.write('<p>Bitches on coke love me</p>');
res.write('<p>I\'m no gynocologist but I\'ll take a look</p>');
res.end();
});
server.listen(3000, 'localhost', () =>{

    console.log('listening for requests on port 3000')
}


)
