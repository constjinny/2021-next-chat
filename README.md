# next-chat

## 🔗 실행 방법

### 개발 서버

`npm run dev` or `yarn dev`

http://localhost:3000

### vercel

- 로그인은 임시 기능으로 임의의 값으로 로그인

https://2021-next-chat.vercel.app

## 💫 Skill

- next.js, react.js, redux, redux-toolkit
- emotion.js, fortawesome
- craco, lodash, axios, dayjs

## 👨‍👩‍👧‍👦 구조

```
+-- pages
      +-- api ## 내부 api
      +-- _app.tsx ## 공통 layout, redux 연결, meta tag
      +-- _document.tsx ## meta
      +-- index.tsx ## 채팅
      +-- login.tsx ## 로그인
+-- public
+-- src
      +-- api ## 목업 api
      +-- components ## 특정 화면에 종속되지않는 컴포넌트 모임
      +-- constants
      +-- data ## 목업 데이터
      +-- features ## 특정 화면 or 영역 별 모음
            +-- room
            +-- roomList
      +-- hooks ## customHooks
      +-- store ## redux store
      +-- type ## type 모음
      +-- utils ## 유틸함수
+-- styles

```
