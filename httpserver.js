const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 2410;

const server = http.createServer((req,res) => {
    console.log(req.url);
    if (req.url == '/') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1> THIS IS HOME PAGE </h1>');
    }
    else if (req.url == '/about') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1> THIS IS ABOUT PAGE </h1>');
    }
    else if (req.url == '/contact') { 
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')  
        res.end('<h1> THIS IS CONTACT PAGE </h1>') 
    }
    else if (req.url == '/help') {   
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1> THIS IS HELP PAGE </h1>') 
    }
    else if (req.url == '/hello') {   
        res.statusCode = 200
        const data = fs.readFileSync('index.html')
        res.end(data.toString()); 
    }
    else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1> 404 PAGE IS NOT FOUND </h1>')
    }
})

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})