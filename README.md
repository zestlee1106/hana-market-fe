# 하나마켓 서비스

## Setup

### 패키지 설치

- Package Manager: yarn
- node version: 18.16.0
- Node version manager: nvm

```bash
# node 버전 설정
nvm use

# 패키지 설치
yarn install
```

## 개발 서버 실행

```bash
# local 환경 개발 서버
yarn dev
```

## 빌드 후 서버 띄우기

```bash
# build
yarn build

# start
yarn start
```

## tailwind css

- tailwind.config.js
  - 스타일 시스템의 컬러, 폰트 설정을 추가함 (theme.extend.colors, theme.extend.fontFamily)
  - html 태그에 컬러 적용: text-r1, bg-h1 etc...
  - 폰트 스타일 적용: font-poppins, font-pretendard
  - 기타 추가값 (스크린 사이즈 등) 이 필요할 경우 tailwind.config.js 에 추가하면 됨

## daisyui

- UI 스타일 라이브러리로 daisyui 를 사용한다
- daisyui 는 tailwind css 기반 라이브러리이기 때문에, tailwind 클래스를 그대로 사용할 수 있다.

## 배포 스크립트

- .github/workflows/docker-image.yml
  - 푸시 이벤트가 발생할 때에만 작동하도록 해놓음
  - 각 secrets 키는 리포지토리에 설정이 되어있으며, 필요 시 공유함

## 커밋 컨벤션

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 수정
- style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
- refactor : 코드 리펙토링
- test : 테스트 코드, 리펙토링 테스트 코드 추가
- chore : 빌드 업무 수정, 패키지 매니저 수정
