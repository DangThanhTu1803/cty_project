import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import './addservice.css'

export const AddService = () => {
  return (
    <div className='back'>
      <div className='bg'>
        <h1>Quản lý dịch vụ</h1>
        <div className='add-service'>
          <h2>Thông tin dịch vụ</h2>
          <div className='service_ID'>
            <p>Mã dịch vụ:<p style={{ color: '#FF4747' }}>*</p></p>
            <input type="text" placeholder='Nhập mã dịch vụ...' />
          </div>
          <div className='service_name'>
            <span>
              <p>Tên dịch vụ:<p style={{ color: '#FF4747' }}>*</p></p>
            </span>
            <input type="text" placeholder='Nhập tên dịch vụ...' />
          </div>
          <div className='service_description'>
            <span>
              <p>Mô tả:</p>
            </span>
            <textarea rows={4} cols={50} placeholder='Nhập mô tả dịch vụ...' />
          </div>
          <h3>Quy tắc cấp số</h3>
          <div className='check1'>
            <div className='checkbox-title'>
              <input type="checkbox" />
              <p>Tăng tự động từ:</p>
            </div>
            <div className="input_number">
              <input type="text" value={'0001'} className='num-start' />
              <p>đến</p>
              <input type="text" value={'9999'} className='num-end' />
            </div>
          </div>
          <div className='check2'>
            <div className='checkbox-title'>
              <input type="checkbox" />
              <p>Prefix:</p>
            </div>
            <input type="text" className='pre-sur-fix_input' value={'0001'} />
          </div>
          <div className="check3">
            <div className='checkbox-title'>
              <input type="checkbox" />
              <p>Surfix:</p>
            </div>
            <input type="text" className='pre-sur-fix_input' value={'0001'} />
          </div>
          <div className="check4">
            <div className='checkbox-title'>
              <input type="checkbox" />
              <p>Reset mỗi ngày</p>
            </div>
          </div>
        </div>
        <div className='cancel-add-btn'>
          <button className='btn-cancel'>Hủy bỏ</button>
          <button className='btn-add'>Thêm dịch vụ</button>
        </div>
        <Menubar />
        <Topbar nametitle='Thiết bị > Danh sách dịch vụ > Thêm dịch vụ' />
      </div>
    </div>
  )
}
