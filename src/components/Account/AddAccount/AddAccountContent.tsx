import React from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
type name={
    title:string
}
export const AddAccountContent = (props:name) => {
    const showpw = (pw: string, eyeshow: string, eyehide: string) => {
        const show: any = document.getElementById(eyeshow)
        const hide: any = document.getElementById(eyehide)
        const eye: any = document.getElementById(pw)
        const type = eye.getAttribute("type") === "password" ? "text" : "password";
        eye.setAttribute("type", type);
        if (type === "password") {
            show.style.display = 'flex';
            hide.style.display = 'none';
        }
        else {
            hide.style.display = 'flex';
            show.style.display = 'none';
        }
    }
    return (
        <div className='add-account_content'>
            <h1>Quản lý tài khoản</h1>
            <div className="add-acc_bg-info">
                <h2>Thông tin tài khoản</h2>
                <div className='add-acc_name'>
                    <span>Họ tên: <p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Nhập họ tên' />
                </div>
                <div className='add-acc_phone'>
                    <span>Số điện thoại:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Nhập số điện thoại' />
                </div>
                <div className='add-acc_email'>
                    <span>Email:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Nhập email' />
                </div>
                <div className='add-acc_role'>
                    <span>Vai trò:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Chọn vai trò' />
                </div>
                <div className='add-acc_username'>
                    <span>Tên đăng nhập:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Nhập tên đăng nhập' />
                </div>
                <div className='add-acc_pwd'>
                    <span>Mật khẩu:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="password" id='pw1' placeholder='Nhập mật khẩu' />
                    <FiEyeOff className="show" id='show1' onClick={() => showpw('pw1', 'show1', 'hide1')} />
                    <FiEye className='hide' id='hide1' style={{ display: 'none' }} onClick={() => showpw('pw1', 'show1', 'hide1')} />
                </div>
                <div className='add-acc_pwd-conf'>
                    <span>Nhập lại mật khẩu:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="password" id='pw2' placeholder='Nhập lại mật khẩu' />
                    <FiEyeOff className="show" id='show2' onClick={() => showpw('pw2', 'show2', 'hide2')} />
                    <FiEye className='hide' id='hide2' style={{ display: 'none' }} onClick={() => showpw('pw2', 'show2', 'hide2')} />
                </div>
                <div className='add-acc_status'>
                    <span>Tình trạng:<p style={{ color: '#FF4747', marginLeft: '4px' }}>*</p></span>
                    <input type="text" placeholder='Hoạt động' />
                </div>
                <i className='note'><p style={{ color: '#FF4747', marginRight: '4px' }}>*</p>Là trường thông tin bắt buộc</i>
            </div>
            <div className='cancel-add-btn'>
                <button className='btn-cancel'>Hủy bỏ</button>
                <button className='btn-add'>{props.title}</button>
            </div>
        </div>
    )
}
