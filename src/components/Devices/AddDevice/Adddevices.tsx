import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import './AddDevices.css'
type titlebtn={
    name:string
}
export const Adddevices = (props: titlebtn) => {
    return (
        <div>
            <h1>Quản lý thiết bị</h1>
            <div className='add-info-device'>
                <h2>Thông tin thiết bị</h2>
                <div className='device_id'>
                    <p>Mã thiết bị:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập mã thiết bị' />
                </div>
                <div className='device_name'>
                    <p>Tên thiết bị:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập tên thiết bị' />
                </div>
                <div className='device_IP'>
                    <p>Địa chỉ IP:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập địa chỉ IP' />
                </div>
                <div className='device_type'>
                    <p>Loại thiết bị:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Chọn loại thiết bị' />
                    <div>
                        <TiArrowSortedDown />
                    </div>
                </div>
                <div className='device_username'>
                    <p>Tên đăng nhập:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập tài khoản' />
                </div>
                <div className='device_userpwd'>
                    <p>Mật khẩu:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập mật khẩu' />
                </div>
                <div className='device_service'>
                    <p>Dịch vụ sử dụng:<p style={{ color: '#FF4747' }}>*</p></p>
                    <input type="text" placeholder='Nhập dịch vụ sử dụng' />
                </div>
                <div className='note'>
                    <p style={{ color: '#FF4747', paddingRight: '2px' }}>* </p>
                    <p>Là trường thông tin bắt buộc</p>
                </div>
            </div>
            <div className='cancel-add-btn'>
                <Link to="/devices">
                    <button className='btn-cancel'>Hủy bỏ</button>
                </Link>
                <Link to="/devices">
                    <button className='btn-add'>{props.name}</button>
                </Link>
            </div>
        </div>
    )
}
