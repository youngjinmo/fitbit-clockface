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
<img src="https://lh3.googleusercontent.com/u2wFWNRVJN4zh2fQiDzV6QohI0MIiTKcidIgJ3mKEAaPnBzfq9w9OMbxLg5zaKodJYswhdsB1liGm7iNJQjojGCvF0bEIDmPEFqwmoBTImbbwGWkR1iSDh77AYEgt2jtg1opDziVmhd8PtbtTgL_vDTRTrgcQrYj0hr3S2BH-n4JWgpUzOKJBXcZcaasuBgtAbpLd-oJR2cmr-QbcIGh7mthMRpYhgzm2WmPYUBr4Yoh0sgU6MZMOhn13aUrTJ_IU4XFOQJY_eTaYFLzvsK2FtkS4WZriQE85ACMoyCkQeXKsZQaHzvHEW9a-0uzX4OQxtSIFMhElo0u7LY_EY7Oxtl54eQAlyYJUmz_T7VZzk_Vy3pQ2Z78rdiZHH426-EIvL6MtRjsR6cbc67Xz5Nvqzs5v3_n4PuWH8bUF9_e1vUcSftFCo8-iKFQx-MsTTBtZ9rZBUQXzx_Vkvz21cmiFFYzh_WVuVZznSdX94lJ0uIyDCc6wlVe3bfAN0nTcCZ6j6DGhgljPSFfw-uxakNroEaOdP60Whydmye6haWGO8-uWXQrkp8PxrmbkF1ihr3297PPXWA-eKEst5w1djPFwAHhXcYt-Ble-_vIQC0JElXgcmm_Aw7Y_TI4jv2UCl38c7c6g4GddR_RD4e0ezrNIRwLrYwadrNMo00HxokTvMZrjbuM49kVl75C=w1379-h906-no" width="500px"/>

<p align="center">실외에서 확인해본 디바이스 테스팅. 사진보다는 선명하게 잘 보인다.</p>
<br>

### 2차 테스트

<img src="https://lh3.googleusercontent.com/8f_bcHEOnXd_UNXDXbE3QSNz7gG_JyfRNRxX5NsWB794ufNOXuSQj1h7vNPUqUyrnSK8cgSBGdXP8gFyAsA1mZ559i0TA9YuFgQJb2rOzEpuvQ0oxmogh9bvRffPX9g5CTjphM3uPpXuEu6cS7nCPZRBXZOiibfW2MX9hVKvoX43apQ1oNtvVdXloz8oVuNbnCmDWtFqudNRhmbWUlhn8vOixnO0kjAvuVNqQk5OWEZ27PllUbjmhmO1_56coySgv4MpA7khk6spJ369zyMJPfz7V9eEaX8aoL8qdgcjjNa-zYxLz3H9yRxGKcXScWqo3MhKPLLj7pxzGDC7CnWq_bGFyVdEssolPHhsHLlrUa1QdSubt-pbQU_HxyRpZZy_dpVJg_eXSGqM1NPE3_rPDTbcRz7_KD0XVRBD35Tv3_GKP3_tR2Sp-Oz12GT4sjxFhMPY2o1WTedNSl676HXUKTS55Mbp1-W7wnKspCFD89VQYLNX-YfX1pR3yn06neV7hMhJrPtOCR3jDNlwQs_OVXTMrFiqMaBx3PmhK7-n3dhBeH9xjgbCj5ngciyVpMH0W4ddVS7BmgnR4jVe1-K-4MaDb5vTixQrQkGUYodzwUNdtHw8tPKa6CHGB4C4n77C5FhEC5M3ktXJLCgTzVadpOID-mnJcWFHRTwmcMVE4SFeZrKwIIVo508n=w1208-h906-no" width="500px"/>