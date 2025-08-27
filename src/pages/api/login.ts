import { NextRequest, NextResponse } from "next/server";

export default async function loginHander(req:NextRequest, res:NextResponse) {
  if(req){
    console.log(req);
    
  }
  return NextResponse.json({
    code: 0,
    msg: "登录成功",
    data: {
      token: "123456",
    },
  })
}
