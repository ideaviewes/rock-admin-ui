declare namespace API {
  interface Response<T> {
    code: number,
    msg: string,
    data?: T
  }
  type CurrentUser = {
    id: number,
    username?: string;
    avatar?: string;
    mobile: string
  };
  type LoginParams={
    username?: string,
    password?: string
  }
  type LoginResult = {
    code?: number;
    msg?: string;
    data?: string
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };
  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type RoleListItem = {
    id?: number;
    name?: string;
    code?: string;
    remark?: string;
  };
  type PermissionListItem={
    id?: number,
    parentId?: number,
    name?: string,
    icon: string,
    url?: string,
    priority?: number,
    hide_in_menu?: number,
    hide_children_in_menu?: number,
    children?: PermissionListItem[]
  }
  type PermissionTreeItem={
    value?: number,
    title?: string,
    label?: string,
    children?: PermissionTreeItem[]
  }
}
