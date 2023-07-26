# Svelte Tutorial

## Svelte 기본적인 문법 배우기

### +page.svelte로 화면 생성
### +layout.svelte로 layout 생성
### 각 폴더를 주소로 가져가서 about 폴더면 /about 에 해당 화면 연결

### [productId]로 productId를 param으로 받는 동적인 페이지 생성
### params 폴더의 integer.js 를 추가하여 조건을 걸어주고 [productId=integer]로 해당 조건 연결 
#### productId는 intger만 가능

### (auth)로 layoutGroup 생성
#### 원래는 /auth/login으로 해야 하지만 auth를 붙이기 싫기 때문에
#### auth를 layoutGroup으로 지정하도록 () 안에 폴더를 생성해줌 
##### 윈도우에서는 vscode 실행 시 관리자권한으로 해주어야 폴더명 변경 가능


