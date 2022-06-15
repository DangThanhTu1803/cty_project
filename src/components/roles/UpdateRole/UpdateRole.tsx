import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { AddRoleContent } from '../AddRole/AddRoleContent'

export const UpdateRole = () => {
  return (
    <div className='back'>
        <div className="bg">
            <AddRoleContent namebtn='Cập nhật'/>
            <Menubar/>
            <Topbar nametitle='Cài đặt hệ thống > Quản lý vài trò > Cập nhật vai trò'/>
        </div>
    </div>
  )
}
