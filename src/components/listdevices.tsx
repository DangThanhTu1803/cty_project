import React from 'react'
import { Add } from './add'

export const Listdevices = () => {
  return (
    <div>
        <h1>Danh sách thiết bị</h1>
        <div className='device_status_active'>
            <p>Trạng thái hoạt động</p>
            <input type="text" value={'Tất cả'}/>
        </div>
        <div className='device_status_connect'>
            <p>Trạng thái hoạt động</p>
            <input type="text" value={'Tất cả'}/>
        </div>
        <div className='search'>
            <p>Từ khóa</p>
            <input type="text" value={'Nhập từ khóa'}/>
        </div>
        <div>
            <Add nametitle='Thêm thiết bị'/>
        </div>
        <div className='device_table'>
            
        </div>
        <div className='pagination'>
            
        </div>
    </div>
  )
}
