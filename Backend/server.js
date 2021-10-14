const http = require('http');
const fs = require('fs').promises
const url = require('url')

// const datas = [
//   'Buy new sweatshirt',
//   'Begin promotional phase',
//   'Read and article',
//   'Try not to fall asleep',
//   "Watch 'Sherlock'",
//   "Begin QA for the product",
//   "Go for a walk"
// ]

  const datas = [
    {
      id: 1,
      text: 'Buy new sweatshirt',
      checked: false
    },
    {
      id: 2,
      text: 'Begin promotional phase',
      checked: true
    },
    {
      id: 3,
      text: 'Read and article',
      checked: false
    },
    {
      id: 4,
      text: 'Try not to fall asleep',
      checked: false
    },
    {
      id: 5,
      text: "Watch 'Sherlock'",
      checked: false
    },
    {
      id: 6,
      text: "Begin QA for the product",
      checked: false
    },
    {
      id: 7,
      text: "Go for a walk",
      checked: false
    }
  ] 

// prompt창으로 입력된 데이터가 담겨서 화면에 보여짐
// 체크 버튼으로 일정 완료 확인

const server = http.createServer(async(req,res) => {
    console.log(req.method,req.url)
    res.header
    try {
        if (req.method == 'GET') {
          if (req.url == '/') {
              // res.writeHead(200,{})
              res.end(JSON.stringify(datas))
              return   
          } else {
              console.log(req.url)
              res.end('포스트')
          } 
          res.writeHead(404)
          return res.end('NOT FOUND')

        } 
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