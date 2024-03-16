import request from '@/utils/request'
import type { SysRoleForm, SysRoleQuery } from './types'

// 查询角色列表
export const listRole = (queryParams: SysRoleQuery) => {
  return request({
    url: '/system/role/list',
    method: 'get',
    params: queryParams
  })
}

// 查询角色信息
export const getRole = (roleId: number) => {
  return request({
    url: '/system/role/' + roleId,
    method: 'get'
  })
}

// 添加角色信息
export const addRole = (data: SysRoleForm) => {
  return request({
    url: '/system/role',
    method: 'post',
    data
  })
}

// 修改角色信息
export const editRole = (data: SysRoleForm) => {
  return request({
    url: '/system/role',
    method: 'put',
    data
  })
}

// 修改角色状态
export const changeStatus = (roleId: number, status: string) => {
  const data = {
    roleId,
    status
  }

  return request({
    url: '/system/role/changeStatus',
    method: 'put',
    data
  })
}

// 删除角色信息
export const deleteRole = (roleId: number) => {
  return request({
    url: '/system/role/' + roleId,
    method: 'delete'
  })
}

// 批量删除角色信息
export const deleteRoles = (roleIds: number[]) => {
  return request({
    url: '/system/role',
    method: 'delete',
    data: roleIds
  })
}
