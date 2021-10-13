const http = require('http');
const fs = require('fs').promises

const datas = [
  'Buy new sweatshirt',
  'Begin promotional phase',
  'Read and article',
  'Try not to fall asleep',
  "Watch 'Sherlock'",
  "Begin QA for the product",
  "Go for a walk"
]

const server = http.createServer(async(req,res) => {
    console.log(req.method,req.url)
    try {
        if (req.url == '/') {
            // res.writeHead(200,{})
            res.end(JSON.stringify(datas))
            return   
        }
        res.writeHead(404)
        return res.end('NOT FOUND')
    } catch (err) {
        console.error(err)
        res.writeHead(500)
        res.end(err)
        }
    })

const PORT = 5000

server.listen(PORT,() => {
    console.log(`Server is running at PORT: ${PORT}`);
});