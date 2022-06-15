import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { AddRoleContent } from './AddRoleContent'

export const AddRole = () => {
  return (
    <div className='back'>
        <div className='bg'>
            <AddRoleContent namebtn='Thêm'/>
            <Menubar/>
            <Topbar nametitle='Cài đặt hệ thống > Quản lý vài trò > Thêm vai trò'/>
        </div>
    </div>
  )
}
