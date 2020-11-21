# Team Aircnb

>#### Trello Link https://trello.com/b/VJN7XuX5/air-cnb
>#### Github Link https://github.com/wecode-bootcamp-korea/13-aircnb-frontend
>#### Youtube Link https://youtu.be/-RkZ5UUSsRQ

![](https://images.velog.io/images/soom/post/c778412c-0636-4da6-a611-5ef2e25cfe2a/logo_airc&b.png)

## 🍺 프로젝트 소개
>숙박 공유 경제 서비스인  [Airbnb](https://www.airbnb.co.kr/)를 클론 하는 프로젝트를 진행했습니다.
**에어비앤비**는 네이션 블레차르지크와 브라이언 체스키, 조 게비아가 2008년 8월에 설립하였습니다. 체스키와 게비아는 2007년 10월 미국 샌프란시스코로 이주하였는데 그 지역에 개최되는 컨퍼런스 기간에 숙박 수요가 많다는 것을 보고 아파트에 매트릴스를 대여해 준 것에서 출발했습니다. 이후 블레차르지크 합류 이후 숙박 시설을 가지고 있는 주인과 저렴한 가격에 숙박을 원하는 소비자를 연결해주는 인터넷 중계 플랫폼인 'AirBed & Breakfast'를 시작하게 됩니다. 2009년 3월 지금 알고 있는 Airbnb로 상호를 변경하고 집 전체와 보트 특정 방을 빌려주는 등 다양한 형태로 확대되었습니다.

## 🍗 프로젝트 참가자 (Front + Back)
#### 🤙🏻 Team Aircnb
![](https://images.velog.io/images/soom/post/1cd4827c-e656-462d-a447-7777d91b9b47/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-11-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.23.44.png)
+ 저희는 치맥이 좋아 Aircnb!라고 팀명을 정했습니당!
### 👨‍👩‍👩‍👧 FrontEnd
+ 강수명
+ 백경민
+ 신은선
+ 정양효
### 👨‍👦 BackEnd
+ 김창곤
+ 정승호
## 🍗 프로젝트 기간
2020.11. 02 ~ 2020. 11. 13 약 2주간 진행

## 🍺 기술 스택
### 👨‍👩‍👩‍👧  FrontEnd
+ HTML / CSS
+ JavaScript
+ React(CRA 세팅)
+ React(Router DOM)
+ React(Hooks)
+ Styled Components
+ Kakao/Google Login API
+ Sass
+ Redux(ReactRedux(Hooks), Persist, logger)
+ SweatAlert2
+ IMport
### 👨‍👦 BackEnd
+ Python
+ Django
+ MySQL
+ AWS
+ JWT
+ Bcrypt
+ Selenium
### 🤼‍♂️ 협업 도구
+ Slack
+ Git + GitHub
+ Trello를 이용해 일정관리 및 작업 현황 확인
+ Postman (API 관리)
## 🍗 구현한 기능
### 👨‍👩‍👩‍👧  Front End
### 메인페이지
+ 반응형 구현
+ 메인 페이지 효과 구현

### Navbar
+ 네비바 효과 구현
+ 위치 검색 모듈 구현
+ 캘린더 모듈 구현
+ 게스트 인원 모듈 구현
+ Redux로 전 페이지 관련 내용 동기화

### 로그인/ 회원가입
+ 카카오 로그인 / 회원가입 구현
+ 구글 로그인 / 회원가입 구현
+ 일반 로그인 / 회원가입 구현
+ Redux persist 로 토큰 유지

### 상품 디테일 페이지
+ url parameter를 이용한 동적라우팅 기능
+ 저장하기 버튼 누를 시 하트 색 변경 및 서버에 post method로 정보 전송
+ 리뷰 더 보기, 인원 설정, 달력 모달창 구현
+ 리뷰 더 보기 모달 창에서 스크롤 이벤트를 통한 무한 스크롤(Pagination) 기능 구현
+ Google Map API를 이용한 좌표 및 마커 설정 기능
+ React dates를 이용한 날짜(Check-In, Check-Out) 선택 기능
+ Redux를 이용하여 날짜 및 인원 정보 연동 기능
+ Slick slider를 이용한 image carousel 기능 구현


### 👨‍👦 Back End

### StayDetailView
+ 숙소 상세 정보 반환

### StayListView
+ Navi.로 조회한 조건에 맞는 숙소 목록 반환
+ 필터링 조건
  + 고객 수(성인 / 아동 / 유아 합산)
  + 침실 수 / 침대 수 / 욕실 수
  + 대여 유형 (중복 선택 가능)
  + 편의시설 종류 (중복 선택 가능)
  + 집 종류(중복 선택 가능)

### ListFilterView
+ 필터링 모달 인자 반환을 위한 View

### SignupView
+ 계정 생성 구현 / 이메일, 비밀번호 정규화

### GoogleAuthView
+ Google 계정 인증 / 존재하는 계정이면 정보 업데이트
### KakaoAuthView
+ Kakao 계정 인증 / 존재하는 계정이면 정보 업데이트
### LikerView
+ 좋아요(찜) 생성 / 존재하는 상태이면 취소(삭제)
### LikeListView
+ 찜한 숙소 정보 저장 / 
### ReviewView
+ 평기(리뷰) 정보를 저장
### ReviewListView
+ 모든 평가들을 리스트로 보여줌
### ReservationView
+ 예약 티켓을 생성 / 예약시 자동으로 이메일 발송함
### CancllationView
+ 취소 티켓을 생성 / 취소 승락시 예약 무효화
