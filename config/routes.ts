export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
    ],
  },
  {
    access: 'Rbac',
    path: '/rbac',
    routes: [
      {
        access: 'rbacRoleIndex',
        path: '/rbac/role/index',
        component: './rbac/role/index',
      },
      {
        access: 'rbacRolePermissionIndex',
        path: '/rbac/role/permission/index',
        component: './rbac/role/permission/index',
      },
      {
        access: 'rbacPermissionIndex',
        path: '/rbac/permission/index',
        component: './rbac/permission/index',
      },
      {
        access: 'rbacUserIndex',
        path: '/rbac/user/index',
        component: './rbac/user/index',
      },
    ],
  },
  {
    access: 'index',
    path: '/',
    redirect: '/rbac/user/index',
  },
  {
    component: './404',
  },
];
