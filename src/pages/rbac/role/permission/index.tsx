import React, {useRef, useState} from 'react';
import {Link} from 'umi';
import {PageContainer} from "@ant-design/pro-layout";
import ProTable, {ActionType, ProColumns} from "@ant-design/pro-table";
import IconFont from "@/components/Font/Iconfont";
import {permissionIndex} from "@/services/ant-design-pro/rbac";
import {Table} from "antd";

const RolePermissionIndex: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<API.PermissionListItem>[] = [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '网址',
      dataIndex: 'url',
      search: false
    },
    {
      title: " 图标",
      dataIndex: "icon",
      search:false,
      render: (_, record) => {
        return <IconFont type={record!.icon}/>
      }
    },
    {
      title:"导航菜单",
      dataIndex:"hide_in_menu",
      valueEnum:{
        1:{text:"隐藏",status:"Success"},
        2:{text:"显示",status:"Processing"},
      }
    },
    {
      title: '优先级',
      dataIndex: 'priority',
      search: false
    },
  ];
  return <PageContainer
    header={
      {
        title: "权限分配",
        breadcrumb: {
          routes: [
            {
              path: "/rbac",
              breadcrumbName: "权限管理"
            }, {
              path: "/rbac/role/index",
              breadcrumbName: "角色管理"
            },
            {
              path:"",
              breadcrumbName: "权限分配"
            }
          ],
          itemRender: (route, params, routes) => {
            const last = routes.indexOf(route) === routes.length - 1;
            return last ? (
              <span>{route.breadcrumbName}</span>
            ) : (
              <Link to={route.path}>{route.breadcrumbName}</Link>
            );
          }
        }
      }
    }
  >
    <ProTable<API.PermissionListItem>
      headerTitle={"分配权限"}
      actionRef={actionRef}
      rowKey={"id"}
      rowSelection={{
        selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
      }}
      request={async (params) => {
        const response = await permissionIndex(params);
        return {
          success: response.code === 200,
          data: response.data
        }
      }}
      search={false}
      columns={columns}
      pagination={false}
    />
  </PageContainer>
}

export default RolePermissionIndex;
