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

### +page@(auth).svelte 해당 page는 auth의 레이아웃을 쓸 것임을 명시
### +page@.svelte 는 root의 레이아웃을 사용

### Header와 Footer를 lib로 옮긴 후 $lib를 통해 import하여 사용 가능
### Script에 import Header from '$lib/header.svelte'; 로 추가한 후 
### <Header /> 로 사용 <slot /> 을 통해 자식요소를 가져 해당 위치에 +page.svelte가 보여짐

### demo-api폴더에 +server.js로 api 생성함 {url}/demo-api 호출 시 값 확인 가능
### @sveltejs/kit으로부터 json 임포트 하면 return json(comments); 가능 (편리)
### API 테스트 위해 VS Code Rest API Client인 Thunder Client Extension 설치
### 이후 http://[::]:5173/api/comments 확인 (localhost대신 [::] 사용)

# https://www.youtube.com/watch?v=3R4rSyMCiC0&list=PLC3y8-rFHvwjifDNQYYWI6i06D7PjF0Ua&index=19