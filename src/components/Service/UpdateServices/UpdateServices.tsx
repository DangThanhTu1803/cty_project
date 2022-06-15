import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { AddServicesContent } from '../AddService/addServicesContent'

export const UpdateServices = () => {
  return (
    <div className='back'>
        <div className="bg">
            <AddServicesContent name='Cập nhật'/>
            <Menubar/>
            <Topbar nametitle='Thiết bị > Danh sách dịch vụ > Chi tiết > Cập nhật'/>
        </div>
    </div>
  )
}
