import { request } from 'umi';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser() {
  return request<API.Response<API.CurrentUser>>('/api/rbac/user/current', {
    method: 'GET'
  });
}
