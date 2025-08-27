export default function loginHander(req, res) {
  if(req){
    console.log(req);
    
  }
  res.status(200).json({
    code: 0,
    msg: "登录成功",
    data: {
      token: "123456",
    },
  });
}
