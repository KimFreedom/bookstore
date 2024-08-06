# Bookstore_Backend

## 배포 주소
> [https://bookstore-r2vg.onrender.com](https://bookstore-r2vg.onrender.com)

## 프로젝트 소개

온라인 서점을 위한 웹 애플리케이션 입니다.
애플리케이션이 제공하는 기능은 다음과 같습니다.

1. 책 검색 (제목 또는 저자)
2. 책 상세 정보 조회
3. 책 추가
4. 책 가격, 판매 수량, 재고량 수정
5. 책 제거 

## 주의사항

무료 호스팅 서비스를 이용했기 때문에 로딩 시간이 매우 길 수 있습니다.
아무쪼록 인내심을 갖고 서비스를 즐겨주시길 바랍니다 

## 시작 가이드
### Requirements
애플리케이션을 실행하기 위해서는 다음 프로그램이 필요합니다

- Node.js 18.17.0
- Npm 9.6.7

### Installation
``` bash
$ git clone https://github.com/KimFreedom/bookstore.git
$ cd bookstore
$ npm install
```

#### 환경 변수 설정
'.env' 파일을 생성하고 다음 변수를 설정하세요
``` bash
MONGODB_URI=mongodb+srv://lordudt:lpZibGxsQwJqgfel@bookstore.8dxscum.mongodb.net/?retryWrites=true&w=majority&appName=BookStore
PORT=3000
```

### Run
``` bash
$ npm run start
```

## Stacks

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)             

### Config
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)        

### Development
![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## API 목록

<table style="border: 2px;">
    <tr>
        <th>Method</th>
        <th>URI</th>
        <th>Description</th>
        <th>Param or DTO</th>
        <th>Param or DTO desc</th>
    </th>
    <tr>
        <td rowspan="3">GET</td>
        <td rowspan="3">/api/books</td>
        <td rowspan="3">책 검색</td>
        <td>page</td>
        <td>페이지</td>
    </tr>
    <tr>
        <td>limit</td>
        <td>페이지 당 게시물 수</td>
    </tr>
    <tr>
        <td>search</td>
        <td>검색어</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/books/:id</td>
        <td>ID로 책 검색</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td rowspan="6">POST</td>
        <td rowspan="6">/api/books</td>
        <td rowspan="6">책 추가</td>
        <td>title</td>
        <td>제목</td>
    </tr>
    <tr>
        <td>author</td>
        <td>저자</td>
    </tr>
    <tr>
        <td>description</td>
        <td>책 소개</td>
    </tr>
    <tr>
        <td>price</td>
        <td>가격</td>
    </tr>
    <tr>
        <td>salesCount</td>
        <td>판매량</td>
    </tr>
    <tr>
        <td>stockQuantity</td>
        <td>재고량</td>
    </tr>
    <tr>
        <td rowspan="3">PUT</td>
        <td rowspan="3">/api/books/:id</td>
        <td rowspan="3">책 정보 수정</td>
        <td>price</td>
        <td>가격</td>
    </tr>
    <tr>
        <td>salesCount</td>
        <td>판매량</td>
    </tr>
    <tr>
        <td>stockQuantity</td>
        <td>재고량</td>
    </tr>
    <tr>
        <td>DELETE</td>
        <td>/api/books/:id</td>
        <td>ID로 책 삭제</td>
        <td></td>
        <td></td>
    </tr>
</table>
