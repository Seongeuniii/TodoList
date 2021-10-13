const http = require('http');
const fs = require('fs').promises


const server = http.createServer(async(req,res) => {
    try {
        if (req.url == '/') {
            const data = await fs.readFile('../../frontend/public/index.html');
            res.writeHead(200,{})
            res.send(data)
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