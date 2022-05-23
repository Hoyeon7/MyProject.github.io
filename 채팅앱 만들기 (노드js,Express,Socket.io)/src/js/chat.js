

// 이곳은 프론트 영역



"use strict" // 자바스크립트의 오류를 최대한 줄이기 위해 사용함

const socket = io();
// 소캣io 기능을 변수socket에 할당시킴
/* 이 socket 변수는 app.js(서버 파일) 에서
io.on("connection",(socket) =>{
    console.log('io 연결되었습니다.')
    이 안에 들어가서 io 모듈과 정상 연결된 후  콘솔로그에 연결되었다고 출력시킴
} ) */



// io 모듈이 연결됬으니 이제 본격적으로 메시지를 주고받는 기능을 구현할 수 있음


//  "chatting"(채널 이름)과 "from front" 라는 문자열을
//  서버 영역의  io.on("connection",(socket) <<- 이 socket으로 보낸다.

//  socket.emit("chatting", "from front")

// chatting은 임의로 작성한 채널 이름.
// socket으로 emit(전송)한다("chatting 이라는 채널이름으로", "from front" 라는 문자를.)



// 서버에서 보낸 응답을 프론트 영역에서 받아주는 코드
socket.on("chatting", (data) => {
    console.log(data)
    const li = document.createElement("li");
    li.innerText = `${data.name}님이 - ${data.msg}`;
    chatList.appendChild(li)
})

/* 소캣을 실행한다("chatting 채널로 받은", (data라는 서버 응답을) =>{
    콘솔로그에 출력한다 (data라는 서버 응답을)
    const li 변수에 할당한다 = 문서에.새로운 요소 ("li") 추가를;
    li에.텍스트를 넣는다 = `${data의.name내용}님이 - ${data의.msg내용}`을;
    chatList의.자식요소로 첨부한다(li를)
} )
*/

console.log(socket)



// id는 #, class는 .
const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendButton = document.querySelector(".send-button");

// 닉네임과 채팅 내용을 서버로 전송
sendButton.addEventListener("click", () => {
    const param = {
        name: nickname.value,
        msg: chatInput.value
    }
    /*sendButton를 통해 이벤트를 실행함("클릭했을때", () => {
    const param 변수에 할당 = {
            name값 안에 nickname.내용 과
            msg값 안에 chatInput.내용 을 넣어서 } */

    socket.emit("chatting", param)
    /* 소켓에.보내준다("chatting이라는 채널이름으로", param 변수값을) */
})

