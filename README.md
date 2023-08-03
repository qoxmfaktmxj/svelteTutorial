# Svelte Tutorial

## Svelte 기본적인 문법 배우기
---
### +page.svelte로 화면 생성
### +layout.svelte로 layout 생성
### 각 폴더를 주소로 가져가서 about 폴더면 /about 에 해당 화면 연결
---
### [productId]로 productId를 param으로 받는 동적인 페이지 생성
### params 폴더의 integer.js 를 추가하여 조건을 걸어주고 [productId=integer]로 해당 조건 연결 
#### productId는 intger만 가능
---
### (auth)로 layoutGroup 생성
#### 원래는 /auth/login으로 해야 하지만 auth를 붙이기 싫기 때문에
#### auth를 layoutGroup으로 지정하도록 () 안에 폴더를 생성해줌 
##### 윈도우에서는 vscode 실행 시 관리자권한으로 해주어야 폴더명 변경 가능
---
### +page@(auth).svelte 해당 page는 auth의 레이아웃을 쓸 것임을 명시
### +page@.svelte 는 root의 레이아웃을 사용
---
### Header와 Footer를 lib로 옮긴 후 $lib를 통해 import하여 사용 가능
### Script에 import Header from '$lib/header.svelte'; 로 추가한 후 
### <Header /> 로 사용 <slot /> 을 통해 자식요소를 가져 해당 위치에 +page.svelte가 보여짐
---
### demo-api폴더에 +server.js로 api 생성함 {url}/demo-api 호출 시 값 확인 가능
### @sveltejs/kit으로부터 json 임포트 하면 return json(comments); 가능 (편리)
### API 테스트 위해 VS Code Rest API Client인 Thunder Client Extension 설치 ( or POSTMAN)
### 이후 http://[::]:5173/api/comments 확인 (localhost대신 [::] 사용)
---
### api test GET(조회), POST(저장), PATCH(업데이트) 폴더 comments내 있음
### 구문 확인 const comment = comments.find((comment)=> comment.id === parseInt(commentId));
---
## Section Summary
### File based routing
### Nested routes
### Dynamic routes
### Catch all routes
### Optional parameters
### Anchor tag navigation and navigating programmatically
### Route matchers
### Route layouts, layout groups, breaking out of layouts
### Working with other files
### API Routes to handle GET, POST, PATCH and DELTE requests
---
### 데이터 Loading Test 하기 위해 loading-data 패키지 추가
### db.json 파일 추가 (임시 데이터 생성)
### scripts에 "serve-json" : "json-server --watch db.json --port 4000" 추가
### npm run serve-json으로 서버 시작하여 http://localhost:4000/products 로 db.json 확인
### /address로 dropdown 표기 +page.js의 fetch 참조
### console.log("Load function called in page.server.js") - page.server.js 에서 콘솔부분
### Server 에만 console확인되며, 브라우저의 개발자도구에는 표시되지 않는 것 확인
### 서버로드 함수는 page.server.js 파일에 정의되어 있고 서버에서만 실행됨
### 브라우저에 전달되면 안되는 민감한 정보가 포함된 페이지 작성 시 필요 (Security)
---
## Universal vs Server Load Function
### 둘다 페이지 데이터 로드 
### 하지만 Server Load Function은 브라우저로 코드가 배송되지 않아서 데이터베이스 자격증명 및
### 개인 API 키 등 민감한 정보를 사용하는 코드에 대한 동작이 필요할 때 사용가능
### Universal Load Function은 구성 요소 생성 등 서버로드에서는 사용하지 못하는 것을 반환 가능
### ex)product.svelte에서 Component구성해서 넘길 때 Server Load Function은 사용못함\
---
### error와 redirect 사용
### +error.svelte에 정의하여 error났을때 문구 변경 가능하며, redirect import해서 페이지 변환
### [productId] 내의 +page.server.js 확인
---
## layout data
### products 의 layout.js, layout.svelte 참조. 데이터 불러와서 layout을 만들어서 표시

# https://www.youtube.com/watch?v=rf3hHNkoLRk&list=PLC3y8-rFHvwjifDNQYYWI6i06D7PjF0Ua&index=30