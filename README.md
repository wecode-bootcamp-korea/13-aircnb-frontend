# Team Aircnb

> #### Trello Link https://trello.com/b/VJN7XuX5/air-cnb
>
> #### Github Link https://github.com/wecode-bootcamp-korea/13-aircnb-frontend
>
> #### Youtube Link https://www.youtube.com/watch?v=PfhrUruCmWU

![](https://images.velog.io/images/soom/post/c778412c-0636-4da6-a611-5ef2e25cfe2a/logo_airc&b.png)

## 🍺 프로젝트 소개

> 숙박 공유 경제 서비스인 [Airbnb](https://www.airbnb.co.kr/)를 클론 하는 프로젝트를 진행했습니다.
> **에어비앤비**는 네이션 블레차르지크와 브라이언 체스키, 조 게비아가 2008년 8월에 설립하였습니다. 체스키와 게비아는 2007년 10월 미국 샌프란시스코로 이주하였는데 그 지역에 개최되는 컨퍼런스 기간에 숙박 수요가 많다는 것을 보고 아파트에 매트릴스를 대여해 준 것에서 출발했습니다. 이후 블레차르지크 합류 이후 숙박 시설을 가지고 있는 주인과 저렴한 가격에 숙박을 원하는 소비자를 연결해주는 인터넷 중계 플랫폼인 'AirBed & Breakfast'를 시작하게 됩니다. 2009년 3월 지금 알고 있는 Airbnb로 상호를 변경하고 집 전체와 보트 특정 방을 빌려주는 등 다양한 형태로 확대되었습니다.

## 🍗 프로젝트 참가자 (Front + Back)

#### 🤙🏻 Team Aircnb

![](https://images.velog.io/images/soom/post/1cd4827c-e656-462d-a447-7777d91b9b47/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-11-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.23.44.png)

- 저희는 치맥이 좋아 Aircnb!라고 팀명을 정했습니당!

### 👨‍👩‍👩‍👧 FrontEnd

- 강수명 (나)
- 백경민
- 신은선
- 정양효

### 👨‍👦 BackEnd

- 김창곤
- 정승호

## 🍗 프로젝트 기간

2020.11. 02 ~ 2020. 11. 13 약 2주간 진행

## 🍺 기술 스택

### 👨‍👩‍👩‍👧 FrontEnd

- HTML / CSS
- JavaScript
- React(CRA 세팅)
- React(Router DOM)
- React(Hooks)
- Styled Components
- Kakao/Google Login API
- Sass
- Redux(ReactRedux(Hooks), Persist, logger)
- SweatAlert2
- IMport

### 👨‍👦 BackEnd

- Python
- Django
- CORS Header
- Bcrypt
- PyJWT
- MySQL
- REST API
- Twilio (문자 인증 SMS 서비스)
- AqeuryTool (데이터베이스 모델링)
- AWS EC2 서버에 RDS 인스턴스를 연결하여 배포

### 🤼‍♂️ 협업 도구

- Slack
- Git + GitHub
- Trello를 이용해 일정관리 및 작업 현황 확인
- Postman (API 관리)

## 🍗 구현한 기능

### 👨‍👩‍👩‍👧 Front End

### 메인페이지

- 반응형 구현
- 메인 페이지 효과 구현

### Navbar

- 네비바 효과 구현
- 위치 검색 모듈 구현
- 캘린더 모듈 구현
- 게스트 인원 모듈 구현
- Redux로 전 페이지 관련 내용 동기화

### 로그인/ 회원가입

- 카카오 로그인 / 회원가입 구현
- 구글 로그인 / 회원가입 구현
- 일반 로그인 / 회원가입 구현
- Redux persist 로 토큰 유지

### 카테고리별 상품리스트

- 장바구니 모달창
- 상품카드 분류 및 정렬
- 상품 상세페이지 구현
- 고객후기 게시판 구현 (pagination 포함)
- 상품 할인 금액 적용

### 장바구니

- 상품 최종 금액 및 할인 금액 적용
- 적립금 적용

### 마이페이지

- 늘 사는 것 (찜목록) 장바구니 등록
- 적립금 반영

### 주문서

### 👨‍👦 Back End

### 메인페이지

- Setion 별 상품 리스트 API
- MD의 추천 카테고리별 필터링 API

### 카테고리별 상품리스트

- 카테고리 별 상품 필터링 및 검색 API

### 신상품 & 베스트 페이지

- 현재 날짜 기준 한 달안에 올라온 상품들만 올려주는 신상품 페이지 API
- 조회수 기준으로 필터링한 상품만 보여주는 베스트 페이지 API

### 알뜰쇼핑 페이지

- 할인되는 상품들만 보여주는 알뜰쇼핑 페이지 API

### Navbar

- 상품 카테고리 API
- 로그인을 하게 되면 유저의 이름과 회원 등급이 표시
- 장바구니에 상품을 담았다면 상품의 갯수가 장바구니 아이콘 위에 표시

### 회원가입 & 로그인 (SignUp & SignIn)

- 회원가입 시 TWILIO 라이브러리를 이용한 휴대폰 인증
- bcrypt를 사용한 암호화
- JWT 로그인 구현 및 @decorator를 이용해서 토큰 인증

### 장바구니

- 상품의 장바구니 등록 (개수 포함)
- 장바구니 내역 조회
- 장바구니 상품 수량 변경 및 목록 삭제

### 마이페이지 (마이컬리)

- 늘 사는 것 (찜목록)
- 주문 내역

### 주문서

- 주문하기 할 때 유저정보 가져오기
- 주문하면 장바구니에 있는 상품들을 주문내역으로
