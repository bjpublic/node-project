const express = require('express');
const router = express.Router();


router.get('/', function(req, res) {
  res.send('user 라우트 루트'); 
});

/**
   * @swagger
   * paths:
   *   /user:
   *    post:
   *      tags: [사용자]
   *      summary: 사용자 요청 라우트
   *      description: 사용자 조회, 생성, 수정, 삭제 처리
   *      parameters:
   *        - name: name
   *          in: body
   *          description: 이름
   *          example: 홍길동
   *        - name: email
   *          in: body
   *          description: 이메일 주소
   *          example: hong@mail.com
   *      responses:
   *        200:
   *          description: OK 들어 간 데이터가 다시 반환
   *          content:
   *            application/json:
   *              schema:
   *                type: array
   *                items:
   *                  $ref: '#/components/schemas/User'
   *        400:
   *          description: Invalid request
   *        409:
   *          description: Not have that kind of product
   */
router.post('/insert', function(req, res) {
  res.send('/user/insert 라우트'); 
});

// 고객 정보 수정을 위한 라우트
// app.js에서 기본 경로에 /user를 사용하기 때문에 /user/update 라우트 경로를 가짐
router.put('/update', function(req, res) {
  res.send('/user/udate 라우트'); 
});

// 고객 정보 삭제를 위한 라우트
// app.js에서 기본 경로에 /user를 사용하기 때문에 /user/delete 라우트 경로를 가짐
router.delete('/delete', function(req, res) {
  res.send('/user/delete 라우트');
});

module.exports = router;