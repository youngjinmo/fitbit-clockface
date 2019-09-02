# Build a Fitbit Clock Face



## 목표

<img src="resources/DevAndy-Clock-Face.001.PNG" width="450px" alt="원래 기획했던 클락 페이스 이미지"/>

<p align="center"> 원래 기획한 Fitbit Clock Face </p>
필요한 최소한의 데이터를 출력하는 간단한 클락 페이스를 만들어보자.

필요한 출력 데이터 : 날짜, 요일, 시:분:초, 걸음수(`steps`), 심박수(`hr`)

<br>

## 개발환경

- VSCode - 아직 익숙치 않아서 Sublime Text와 병행해서 사용..
- <a href="https://dev.fitbit.com/blog/2018-03-13-announcing-fitbit-os-2.0-and-simulator/#the-device-simulator-" target="_blank">Fitbit Simulator</a> - 만들고 있는 앱을 테스트할 수 있는 시뮬레이터.
- Terminal

<br>

## 이슈

- [x] 목표 수 대비 얼마나 걸었는지를 Circle로 표시해주는 `sweepAngle`이 작동되지 않고 있다. 계속 찾아보는중..
  - `.gui` 에서는 `sweep-angle` 로 작성하고, `.js` 에서는 `sweepAngle` 로 작성해야만 작동.
- [ ] 첫 날 테스트한 결과 배터리 소모가 심하다는 느낌을 받음. 완충하고 수면 이후 확인해보니 78%까지 배터리 소모. (평소는 95% 이상 유지)
- [ ] 심박수 이미지 및 데이터에 깜빡거리는 애니메이션 효과 추가하고 싶음.

<br>

## 결과물

### 1차 테스트

<img src="resources/app.gif" width="500px" />

<p align="center">Simulator로 테스트한 화면</p>


<img src="resources/IMG_7261.jpg" width="500px"/>

<p align="center">실외에서 확인해본 디바이스 테스팅. 사진보다는 선명하게 잘 보인다.</p>
<br>

### 2차 테스트

<img src="resources/IMG_7270.jpg" width="500px"/>