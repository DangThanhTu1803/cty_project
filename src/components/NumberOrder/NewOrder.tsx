import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'

export const NewOrder = () => {
  return (
    <div className='back'>
        <div className="bg">
            <h1>Quản lý cấp số</h1>
            <div className='new-number_content'>
                <h4>Cấp số mới</h4>
                <span>Dịch vụ khách hàng lựa chọn</span>
                <div className='newOrder_input'>
                    <input type="text" placeholder='Chọn dịch vụ'/>
                    <div>
                        <TiArrowSortedDown />
                    </div>
                </div>
                <div className='cancel-add-btn'>
                    <button className='btn-cancel'>Hủy bỏ</button>
                    <button className='btn-add'>In số</button>
                </div>
            </div>
            <Menubar buttonid='cs'/>
            <Topbar nametitle1='Cấp số >' nametitle2='Danh sách cấp số >' href='/order-number' nametitle21='' href2='' nametitle3='Cấp số mới'/>
        </div>
    </div>
  )
}
