declare namespace API {
  interface Response<T> {
    code: number;
    msg: string;
    data?: T;
  }
  type CurrentUser = {
    id: number;
    username?: string;
    avatar?: string;
    mobile: string;
    access?: UserAccessItem;
  };
  type LoginParams = {
    username?: string;
    password?: string;
  };
  type LoginResult = {
    code?: number;
    msg?: string;
    data?: {
      token?: string;
      url?: string;
    };
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };
  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type UserAccessItem = {
    rbacRoleCreate?: boolean;
    rbacRoleIndex?: boolean;
    rbacUserDelete?: boolean;
    rbacPermissionCreate?: boolean;
    rbacUserUpdate?: boolean;
    rbacRolePermissionIndex?: boolean;
    rbacUserIndex?: boolean;
    rbacUserStatus?: boolean;
    rbacRoleUpdate?: boolean;
    rbacUserCreate?: boolean;
    rbacPermissionUpdate?: boolean;
    rbacPermissionDelete?: boolean;
    rbac?: boolean;
    rbacPermissionIndex?: boolean;
    rbacRoleDelete?: boolean;
    rbacRoleAuthPermission?: boolean;
  };
}
