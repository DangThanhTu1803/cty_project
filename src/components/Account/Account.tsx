import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import { AccountContent } from './AccountContent'

export const Account = () => {
  return (
    <div className='back'>
      <div className="bg">
        <AccountContent />
        <Menubar />
        <Topbar nametitle='Cài đặt hệ thống > Quản lý tài khoản' />
      </div>
    </div>
  )
}
