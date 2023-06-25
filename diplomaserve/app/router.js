//router.js
module.exports = (app) => {
  const { router, controller } = app;
  //http://localhost:7001/getStr.do
  router.get("/getStr", controller.testController.getStr);
  // 登录
  router.post("/login", controller.userController.login);

  //注册
  router.post("/register", controller.userController.register);

  //  修改密码
  router.post("/updatepwd", controller.userController.updatepwd);

  //  得到所有的社团信息
  router.get("/getmsg", controller.clubController.getmsg);

  //  根据id得到所有的社团信息
  router.get("/getmsgbyid", controller.clubController.getmsgbyid);

  // 根据id和bosstype得到成員信息
  router.get('/getpeople', controller.clubController.getpeople);

  // 图片上传
  router.post('/updateFile', controller.clubController.updateFile);

  // 根据cookie获得那个人的id
  router.get('/getidbycookie', controller.clubController.getidbycookie);

  //根据clubtype得到社团的信息
  router.get('/getmsgbyclubtype', controller.clubController.getmsgbyclubtype);

  // 根据userid获取user的信息
  router.get('/getmsgbyuserid', controller.userController.getmsgbyuserid);

  //根据userid获取它的所有works信息
  router.get('/getworkmsgbyuserid', controller.userController.getworkmsgbyuserid)

  //根据userid获取他给哪些作品点了赞并且获得作品信息
  router.get('/getworksbyuserid', controller.userController.getworksbyuserid);

  //根据userid获取他给哪些作品收藏并且获得作品信息
  router.get('/getcollecttionworksbyuserid', controller.userController.getcollecttionworksbyuserid);

  //根据userid获取他是哪个社团的人和社团的基本信息
  router.get('/getclubmsgbyuserid', controller.userController.getclubmsgbyuserid);

  // publish上传存储到works里面
  router.post('/publish', controller.clubController.publish);

  //头像上传
  router.post('/updateHeadimg', controller.userController.updateHeadimg)

  // 获取所有的works信息
  router.get('/getallmsg', controller.worksController.getallmsg);

  // 热榜
  router.get('/hottop', controller.worksController.hottop);

  // 点赞
  router.post('/good', controller.worksController.good);

  // 点赞操作
  router.post('/getgood', controller.worksController.getgood);

  // 取消点赞操作
  router.post('/cancelgood', controller.worksController.cancelgood);

  // 收藏
  router.post('/collection', controller.worksController.collection);

  // 点赞操作
  router.post('/getcollection', controller.worksController.getcollection);

  // 取消点赞操作
  router.post('/cancelcollection', controller.worksController.cancelcollection);

  //getuserid
  router.get('/getuserid', controller.userController.getuserid);

  //得到类型为社团、学生会的works
  router.get('/getworkstypemsg', controller.worksController.getworkstypemsg);

  // 得到搜索的works信息
  router.get('/getsearchmsg', controller.worksController.getsearchmsg);

  //获取num前三的社团
  router.get('/getclubmsgthree', controller.clubController.getclubmsgthree);

  //user1向user2发起一个请求 即添加数据
  router.post('/user1request', controller.userController.user1request);

  // 查找所有发送给自己的信息
  router.get('/getmsgtome', controller.userController.getmsgtome)
 
  // 查看发起请求的记录
  router.get('/requestmsg',controller.userController.requestmsg)

  // 同意或拒绝user1的请求 即修改信息 这里就是同意
  router.post('/answermsg', controller.userController.answermsg);

  //同意以后修改type状态
  router.post('/updateagreetype',controller.userController.updateagreetype);
  
  // 删除请求记录
  router.post('/delmsg', controller.userController.delmsg);

  //根据社团获取社长的信息
  router.get('/getpmsgbyclubtype',controller.userController.getpmsgbyclubtype)
};  