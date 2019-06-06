export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
      { path: '/user/register', name: 'register', component: './User/Register' },
      {
        path: '/user/register-result',
        name: 'register.result',
        component: './User/RegisterResult',
      },
      {
        component: '404',
      },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      {
        path: '/',
        redirect: '/permission-management/user/list',
        authority: ['user'],
      },
      {
        path: 'basic-management',
        name: 'basic-management',
        icon: 'table',
        routes: [
          {
            // authority:['depart_list'],
            path: '/basic-management/depart/list',
            name: 'depart-list',
            component: './basic-management/depart/list/Index',
          },
          {
            // authority:['depart_add'],
            hideInMenu: true,
            path: '/basic-management/depart/add',
            name: 'depart-add',
            component: './basic-management/depart/add/Index',
          },
          {
            // authority:['depart_edit'],
            hideInMenu: true,
            path: '/basic-management/depart/edit/:id',
            name: 'depart-edit',
            component: './basic-management/depart/edit/Index',
          },
          {
            // authority:['employee_list'],
            path: '/basic-management/employee/list',
            name: 'employee-list',
            component: './basic-management/employee/list/Index',
          },
          {
            // authority:['employee_add'],
            hideInMenu: true,
            path: '/basic-management/employee/add',
            name: 'employee-add',
            component: './basic-management/employee/add/Index',
          },
          {
            // authority:['employee_edit'],
            hideInMenu: true,
            path: '/basic-management/employee/edit/:id',
            name: 'employee-edit',
            component: './basic-management/employee/edit/Index',
          },
        ],
      },
      {
        path: 'permission-management',
        name: 'permission-management',
        icon: 'table',
        routes: [
          {
            authority: ['super_admin', 'user_page'],
            path: '/permission-management/user/list',
            name: 'user-list',
            component: './permission-management/user/list/Index',
          },
          {
            authority: ['super_admin', 'user_add'],
            hideInMenu: true,
            path: '/permission-management/user/add',
            name: 'user-add',
            component: './permission-management/user/add/Index',
          },
          {
            authority: ['super_admin', 'user_edit'],
            hideInMenu: true,
            path: '/permission-management/user/edit/:id',
            name: 'user-edit',
            component: './permission-management/user/edit/Index',
          },
          {
            authority: ['super_admin', 'user_role_auth'],
            hideInMenu: true,
            path: '/permission-management/user/roleAuth/:userId',
            name: 'user-roleAuth',
            component: './permission-management/user/roleAuth/Index',
          },
          {
            // authority:['role_list'],
            path: '/permission-management/role/list',
            name: 'role-list',
            component: './permission-management/role/list/Index',
          },
          {
            // authority:['role_add'],
            hideInMenu: true,
            path: '/permission-management/role/add',
            name: 'role-add',
            component: './permission-management/role/add/Index',
          },
          {
            // authority:['role_edit'],
            hideInMenu: true,
            path: '/permission-management/role/edit/:id',
            name: 'role-edit',
            component: './permission-management/role/edit/Index',
          },
          {
            // authority:['role_permissAuth'],
            hideInMenu: true,
            path: '/permission-management/role/permissAuth/:roleId',
            name: 'role-permissAuth',
            component: './permission-management/role/permissAuth/Index',
          },

        ],
      },
      {
        path: 'system-management',
        name: 'system-management',
        icon: 'table',
        routes: [
          {
            // authority:['menu_list'],
            path: '/system-management/menu/list',
            name: 'menu-list',
            component: './system-management/menu/list/Index',
          },
          {
            // authority:['permission_list'],
            path: '/system-management/permission/list',
            name: 'permission-list',
            component: './system-management/permission/list/Index',
          },
          {
            // authority:['dict_list'],
            path: '/system-management/dict/list',
            name: 'dict-list',
            component: './system-management/dict/list/Index',
          },
        ],
      },
      // dashboard
      {
        authority: ['test'],
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // forms
      {
        authority: ['test'],
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        authority: ['test'],
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      // profile
      {
        authority: ['test'],
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/basic/:id',
            hideInMenu: true,
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      // result
      {
        authority: ['test'],
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      // exception
      {
        hideInMenu: true,
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      // accont
      {
        authority: ['test'],
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      //  editor
      {
        authority: ['test'],
        name: 'editor',
        icon: 'highlight',
        path: '/editor',
        routes: [
          {
            path: '/editor/flow',
            name: 'flow',
            component: './Editor/GGEditor/Flow',
          },
          {
            path: '/editor/mind',
            name: 'mind',
            component: './Editor/GGEditor/Mind',
          },
          {
            path: '/editor/koni',
            name: 'koni',
            component: './Editor/GGEditor/Koni',
          },
        ],
      },
      // 404
      {
        component: '404',
      },
    ],
  },
];
