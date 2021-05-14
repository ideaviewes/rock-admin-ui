import { request } from 'umi';
import type { MenuDataItem } from '@ant-design/pro-layout';

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
    data: {
      ...payload,
    },
  });
}
export async function addRole(payload: API.RoleListItem) {
  return request<API.Response<any>>('/api/rbac/role/create', {
    method: 'POST',
    data: {
      ...payload,
    },
  });
}
export async function removeRole(id: number | undefined) {
  return request<API.Response<any>>('/api/rbac/role/delete', {
    method: 'POST',
    params: {
      id,
    },
  });
}
export async function authRolePermission(payload: { role_id: number; permission_ids: number[] }) {
  return request<API.Response<any>>(`/api/rbac/role/auth/permission`, {
    method: 'POST',
    data: {
      ...payload,
    },
  });
}

export async function rolePermissionIds(role_id: number) {
  return request<API.Response<number[]>>(`/api/rbac/role/permission/ids`, {
    method: 'GET',
    params: {
      role_id,
    },
  });
}

export async function permissionIndex(payload: API.PageParams) {
  return request<API.Response<API.PermissionListItem[]>>(`/api/rbac/permission/index`, {
    method: 'GET',
    params: {
      ...payload,
    },
  });
}
export async function addPermission(payload: API.PermissionListItem) {
  return request<API.Response<any>>(`/api/rbac/permission/create`, {
    method: 'POST',
    data: {
      ...payload,
    },
  });
}

export async function updatePermission(payload: API.PermissionListItem) {
  return request<API.Response<any>>(`/api/rbac/permission/update`, {
    method: 'POST',
    data: {
      ...payload,
    },
  });
}

export async function removePermission(id: number | undefined) {
  return request<API.Response<any>>('/api/rbac/permission/delete', {
    method: 'POST',
    params: {
      id,
    },
  });
}

export async function userMenu() {
  return request<API.Response<MenuDataItem[]>>(`/api/rbac/user/menu`, {
    method: 'GET',
  });
}
