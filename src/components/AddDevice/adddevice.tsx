import React from 'react'
import { Menubar } from '../Menubar'
import { Topbar } from '../Topbar'
import { Adddevices } from './Adddevices'

export const Adddevice = () => {
  return (
    <div className='back'>
        <div className='bg'>
        <Adddevices/>
        <Menubar/>
        <Topbar nametitle='Thiết bị > Danh sách thiết bị > Thêm thiết bị'/>
        </div>
    </div>
  )
}
