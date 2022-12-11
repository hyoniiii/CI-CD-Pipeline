# 📌 매장 관리 API 프로젝트
## 👉 주제 선정
- **음식점(매장관리)** : [매장관리](https://app.swaggerhub.com/apis-docs/gotoweb/restaurant/1.0)

<br>

## 👉 배포방식 선정

### ✅ 프론트엔드

아키텍처 선정 사유 : 

1. S3를 이용하여 정적 웹호스팅을 구현하였습니다.
2. CloudFront를 이용하여 다음과 같은 기능을 기대하였습니다.
    - CDN 기능으로 웹페이지를 캐싱하여 성능 개선 
    - http → https 리다이렉트를 사용하여 인증서를 이용한 보안성있는 연결
3. Github → CodeBuild   
   프론트엔드 코드는 AWS의 서비스중 하나인 CodeBuild를 이용하여 CD 파이프라인을 구축하였습니다.
    
![front](https://user-images.githubusercontent.com/76501289/186059723-ab7d37b7-2d6f-4c27-a6de-713f7472b6ad.png)


### ✅ 백엔드

아키텍처 선정 사유: 

1. ECS Fargate를 사용해서 Scale-out을 용이하게 구현하고자 하였습니다.  
2. Github Action으로 CI/CD Pipeline 구축 하였습니다.  
3. Route53으로 커스텀 도메인을 지정하였습니다.
4. ALB를 이용해서 요청을 http → https 리다이렉트 하였습니다.

![back](https://user-images.githubusercontent.com/76501289/186059737-c133a826-1752-4dd2-b3a2-eed2aab2bbfc.png)

<br>

## 👉 결과
![image](https://user-images.githubusercontent.com/76501289/186059824-e95f094a-d51b-40a3-9bc6-91ab5f22c2aa.png)
![image](https://user-images.githubusercontent.com/76501289/186059841-4ff63ef0-8d6e-43a8-8f10-67c0633147d4.png)

<br>

## Available Scripts

이 프로젝트를 로컬환경에서 테스트 하기 위해 `docker-compose.yaml`을 참조하여 주시기 바랍니다.

`docker-compose up`을 이용하여 로컬 환경에서 프로젝트를 빠르게 구현할 수 있습니다.

<br>

## Cleanup
Delete the stack
```
$ docker-compose down
```
