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
    path: '/rbac',
    routes: [
      {
        path: '/rbac/role/index',
        component: './rbac/role/index',
      },
      {
        path: '/rbac/role/permission/index',
        component: './rbac/role/permission/index',
      },
      {
        path: '/rbac/permission/index',
        component: './rbac/permission/index',
      },
      {
        path: '/rbac/user/index',
        component: './rbac/user/index',
      },
    ],
  },
  {
    path: '/',
    redirect: '/rbac/role/index',
  },
  {
    component: './404',
  },
];
