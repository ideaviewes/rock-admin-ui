// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/api/login/captcha', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

export async function loginByAccount(body:API.LoginParams){
  return request<API.LoginResult>(`/api/login/account`,{
    method:"POST",
    headers: {
      'Content-Type': 'application/json',
    },
    data:{
      ...body
    }
  });
}
