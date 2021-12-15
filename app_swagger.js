const {swaggerUi, specs} = require('./swagger');
const express = require('express');
const userRoute = require('./routes/user');
const app = express();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json({
  limit: '50mb' // 최대 50메가
})); // 클라이언트 요청 body를 json으로 파싱 처리


app.listen(3000, () => {
  // 3000번 포트로 웹 서버 실행
  console.log('Server started. port 3000.');
});

app.use('/user', userRoute); // user 라우트를 추가하고 기본 경로로 /user 사용
