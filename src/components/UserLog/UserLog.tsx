import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { UserLogContent } from './UserLogContent'

export const UserLog = () => {
  return (
    <div className='back'>
        <div className="bg">
            <UserLogContent/>
            <Menubar/>
            <Topbar nametitle='Cài đặt hệ thống > Nhật ký hoạt động'/>
        </div>
    </div>
  )
}
