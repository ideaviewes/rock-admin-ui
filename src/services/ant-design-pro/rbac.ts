import { request } from 'umi';

export async function roleIndex(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.Response<API.RoleListItem[]>>('/api/rbac/role/index', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}



export async function updateRole(payload: API.RoleListItem) {
  return request<API.Response<any>>('/api/rbac/role/update', {
    method: 'POST',
    data:{
      ...payload
    }
  });
}
export async function addRole(payload: API.RoleListItem) {
  return request<API.Response<any>>('/api/rbac/role/create', {
    method: 'POST',
    data:{
      ...payload
    }
  });
}
export async function removeRole(id: number|undefined) {
  return request<API.Response<any>>('/api/rbac/role/delete', {
    method: 'POST',
    params:{
      id
    }
  });
}

