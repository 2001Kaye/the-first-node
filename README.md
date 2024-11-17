# 11주차

- [11주차](#11주차)
  - [Node.js](#nodejs)
    - [학습 요약](#학습-요약)
  - [React Song List](#react-song-list)
    - [학습 요약](#학습-요약-1)

## Node.js

- [수업 자료](https://nano5.notion.site/Node-js-135daf211d4280d09c76c3439719794d)

### 학습 요약

`console.log("안녕")`

- 세미콜론 안 써도 됨
- terminal의 cmd 에서 node 파일명(또는 .js) 입력 하면 실행됨
- 서버 실행도 가능 -> 서버 중지 ctrl + c
  - http 모듈을 들고 와서 .createServer로 서버를 생성 후 반환된 서버에 .listen으로 서버를 실행함
  - createServer에서 request와 response를 파라미터로 받아서 response에 .wirteHead, .end를 입력해줌
  - wirteHead(status code, headers): 헤더 넘기기
  - end(body): 데이터 넘기기
    - JSON.stringify(data): javascript data값(object = 객체)을 JSON(JavaScript Object Notation) string으로 바꿔줌
  - server.listen(port, listeningListener): 비동기 실행이고 연결을 위해 서버 listening 이벤트를 발생하게 되고 후행 파라미터 콜백 함수가 listening 이벤트를 위해 리스너로 추가됨

## React Song List

- [수업 자료](https://nano5.notion.site/React-Song-List-135daf211d4280b0aa1cfb389f522110)

### 학습 요약

- component 사용

- 명령어
  - npx create-react-app 폴더명: 생성
  - npm start: 실행
  - powershell에서 오류 해결하는 법
    - 관리자 권한으로 실행
    - `executionpolicy`
    - `set-executionpolicy remotesigned`
- `index.html`
  - `html:5`: 이걸로 쉽게 만들 수 있음
  - `<div id=root />`: 여기가 index.js 에서 가져오는 지점
