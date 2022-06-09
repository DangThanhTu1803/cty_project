import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { Adddevices } from '../AddDevice/Adddevices'

export const UpdateDevice = () => {
  return (
    <div className='back'>
        <div className="bg">
            <Adddevices/>
            <Menubar/>
            <Topbar nametitle='Thiết bị > Danh sách thiết bị > Cập nhật thiết bị'/>
        </div>
    </div>
  )
}
