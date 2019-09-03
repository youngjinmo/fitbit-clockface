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
- [ ] steps의 completion을 보여주는 circle이 깜빡거리면서 비중이 왔다갔다 하는 <a href="https://photos.app.goo.gl/CE9Ykvodc4uyW5YB7" target="_blank">에러</a> 발생중.

<br>

## 결과물

### 1차 테스트

<img align ="center" src="resources/app.gif" width="500px" />

<p align="center">Simulator로 테스트한 화면</p>
<img align ="center" src="https://lh3.googleusercontent.com/1RfWKZcQrc3oX8nVZAm8Cd1-2Jw1_MuL28Cv0uwvLweVzmLEfkODIRGNmEyfv0sprwG8qdms470syIIT4W3gayPb0gcuI1A4Zehx1SPTRQbzk6RNBUq-mDAHRS954bsNUaqGuCf9kG6VekxTb9434F3sLYmVM1uQF3dLQ615bq2AZvAE-i3wKB7p7OvuNRKx8jq-CohZhVbr7KXAFqfMiGSOypMWdkptAXdg11O_yFJ_S_GUSAaw2aLMBpljnj_9xLpj-_eIB-VQ-j6GC-QFg6i2lqG_d5lHQZV8MSBpTUfn8lQQtb5P48Jx3syicvXf_XNdhr4fQjACxC9KazuwYpdBXCfS30YvDS--eWXJv104BNbqE3JZCXOPXsmAuMyxuiW7lJvs2beK5E2n5Am4JKhKlyAVo05WlvoaLdz70OFH74_X4Tw368P6exSXB7FnvV_zT9cyXSwky-36r2FQSJIdd4o-Ov29l-X-pHx-TE23THnHiYct6-LzYArtE05oqdumVRsay_I5uD5TgD5x64iwJjgoJ_iMeDwY8LZN1SazUerEZjQXW1jXmuxh-tz690VvRxx_zxvdnc60Nogw0WSYrjhEJd9w3m2oefaWFu2B6tMRxtu6Uy9EgV_SiS36ZWwNUU87s1GLGJB2uVpHxbTqMf9BksdLQUBFrbz0tFnbrM9oQhPiJXiu=w2210-h1452-no" width="500px"/>

<p align="center">실외에서 확인해본 디바이스 테스팅.</p>

<br>

### 2차 테스트

<img align ="center" src="https://lh3.googleusercontent.com/mqvdEqWyJ-xBUidEduAACNncqpLTgEpMTPHKhFF40T3Tm1Eyhtz5sekyBAN-p6YFdJqCQInmGjqxc_oIM0Q5LN0ZkY87ZLkEAq2rqphEbweaXpr7k4CkeaT2NWXXPcH0NGLs3t8e2XQQA1_Bxfj_cieoBGDBI6btTw-S5qpFGTL7l5oEzjEininPkUt-0uOoWKyyWHwMBrDkTnbyo-02KItL48zpBkREeGOmaDBfUto5nEn_m36XC_--1nZJp4zSopciobZId0_uMITWEtvMzICU0sskcJKuRYJzw2ZP6QS2oYS2ry3aiRODv9Uv-54CFdkEdOBfwM57YmyMdj9TuULmcP6y2k8hUUmwh0nM4sGrJAOkSkER2oxFQJJQ2RWdh9zGrPxJKmtEhVY3CwEORZfBCFB1DUHn1wmGvBDGuK6zq-2Oe-KQ9GStt62fvw4nhh-WDnc4lB2d9qDu3DMaz4pQIrjGv2sVOQIsjTEiXKes3aIpCQ-C4pcNB4lzb7jskwfdF2Nd57Qpa4ppHCFEmYXfxoFHbXIDZFy9xVZpVZut4tGdPwGeVtyzufjtWZEdVrPDkSnXwWafjm1KKU8DzB0cWmEXr9aAxRf98F8W-pfXGgSlPUS0yE23NT9QXP21DPJt8eev80mz_0xGThO7Q_9XOWuA-YsW0V2kQOUTmTP7DvOt3yX29Gwx=w1936-h1452-no" width="500px"/>

<p align ="center">sweep-angle 문제를 처리하여 goal completion을 보여주고 있는 모습.</p>

<br>

## To-do

- [ ] 심장이 뛰는듯한 애니메이션 효과 넣고싶음.
- [ ] water log도 출력하고 싶음.

<br>