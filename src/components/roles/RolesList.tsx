import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { RoleListContent } from './RoleListContent'

export const RolesList = () => {
  return (
    <div className='back'>
        <div className="bg">
            <RoleListContent/>
            <Menubar/>
            <Topbar nametitle='Cài đặt hệ thống > Quản lý vài trò'/>
        </div>
    </div>
  )
}
