import type { UploadFile } from 'element-plus'
import type { SysDept } from '@/api/system/dept/types'

// 用户对象
export interface SysUser {
  userId: number
  deptId: number
  username: string
  nickname: string
  email: string
  phone: string
  gender: string
  avatar: string
  password: string
  status: string
  loginIp: string
  loginDate: Date
  createBy: string
  createTime: Date
  updateBy: string
  updateTime: Date
  remark: string
  dept: SysDept
  roleIds: number[]
}

// 用户信息
export interface UserInfo {
  user: SysUser
  roles: string[]
  roleNames: string[]
  permissions: string[]
}

// 用户表单对象
export interface SysUserForm {
  deptId: number
  username: string
  nickname: string
  email: string
  phone: string
  password: string
  gender: string
  roleIds: number[]
  remark: string
}

/**
 * 用户密码表单对象
 */
export interface SysUserPasswordForm {
  userId: number
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

/**
 * 用户导入表单对象
 */
export interface ImportForm {
  file: UploadFile
  deptId: number
  roleIds: number[]
}

/**
 * 用户查询参数
 */
export interface SysUserQuery extends PageQuery {
  deptId: number
  username: string
  nickname: string
  gender: string
  status: string
}

/**
 * 模糊查询用户列表参数
 */
export interface SysUserFuzzyQuery extends PageQuery {
  keyword: string
}
