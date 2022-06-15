import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import './addservice.css'
import { AddServicesContent } from './addServicesContent'

export const AddService = () => {
  return (
    <div className='back'>
      <div className='bg'>
        <AddServicesContent name='Thêm dịch vụ'/>
        <Menubar />
        <Topbar nametitle='Thiết bị > Danh sách dịch vụ > Thêm dịch vụ' />
      </div>
    </div>
  )
}
