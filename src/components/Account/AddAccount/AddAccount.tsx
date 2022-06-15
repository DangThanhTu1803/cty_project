import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { AddAccountContent } from './AddAccountContent'

export const AddAccount = () => {
  return (
    <div className='back'>
        <div className="bg">
            <AddAccountContent title='Thêm'/>
            <Menubar/>
            <Topbar nametitle='Cài đặt hệ thống > Quản lý tài khoản > Thêm tài khoản'/>
        </div>
    </div>
  )
}
