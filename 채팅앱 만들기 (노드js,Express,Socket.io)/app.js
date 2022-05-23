
// 이곳은 서버 영역



// 서버 기능을 위해 익스프레스 모듈 불러오기
const express = require("express")

// 소켓io를 받을수 있게 서버쪽에서 세팅,
// 소켓io는 웹 소켓이기에 http를 통해서 이루어저야 함
const http = require("http")
const app = express();

// 노드js의 기본 모듈,
// URL을 쉽게 만들어주는 모듈
const path = require("path")

const server = http.createServer(app)
// 익스프레스로 구현한 앱을 app변수에 담아서 익스프레스가 http를 통해서 구현됨

const socketIO = require("socket.io")
const io = socketIO(server);

// io를 통해서 보내지는 메시지들을 제어할 예정,

// io에 연결이 이루어지면 모든 정보를 socket에 담은 후
// 소켓을 실행해서 프론트 영역으로 보내준다.
io.on("connection",(socket) =>{
    socket.on("chatting", (data) =>{
        console.log(data)
        io.emit("chatting", data)
/*소켓을 실행한다, ("chatting이라는 체널로 받은 내용을", (data라는 이름으로))
io에서 보낸다("chatting이라는 채널이름으로", `data` 를)*/

    })
})



app.use(express.static(path.join(__dirname, "src")))
// 해석: 현 디렉토리 파일(chat파일)의 src 폴더를 지정해서 서버를 오픈한다는 뜻\

// 서버 실행을 위해 포트가 필요함
const PORT = process.env.PORT || 5000;
// 해석: 프로세스 환경에 포트가 지정되있으면 해당 포트 사용, 그게 아니라면 5000포트를 사용한다

// 서버 실행 명령어
server.listen(PORT, () => console.log(`server is running ${PORT}`))
// 서버가 5000번 포트로 실행될 경우 콘솔로그에 서버 실행됨 문자 출력




