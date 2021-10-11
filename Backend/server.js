const http = require('http');
const fs = require('fs').promises

const PORT = 3000

const server = http.createServer((req,res) => {
    res.writeHead(200,{})
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
})

server.listen(PORT,() => { // 웹 서버 객체의 listen 메서드를 사용해 서버를 열어준다.
    console.log(`${PORT}번 포트에서 서버 대기 중입니다!`);
});