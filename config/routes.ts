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
    name: '权限管理',
    icon: 'crown',
    routes: [
      {
        path: '/rbac/role/index',
        name: '角色管理',
        icon: 'smile',
        component: './rbac/role/index',
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
