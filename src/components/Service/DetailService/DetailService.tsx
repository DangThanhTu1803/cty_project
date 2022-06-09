import React from 'react'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import './details.css'

export const DetailService = () => {
    return (
        <div className='back'>
            <div className='bg'>
                <h1>Quản lý dịch vụ</h1>
                <div className='info-service'>
                    <h2>Thông tin dịch vụ</h2>
                    <div className="service_id">
                        <span>Mã dịch vụ:</span>
                        <p>201</p>
                    </div>
                    <div className='service_nameservice'>
                        <span>Tên dịch vụ:</span>
                        <p>Khám tim mạch</p>
                    </div>
                    <div className='service_descriptions'>
                        <span>Mô tả:</span>
                        <p>Chuyên các bệnh lý về tim</p>
                    </div>
                    <h3>Quy tắc cấp số</h3>
                    <div className="autonumber">
                        <span>Tăng tự động:</span>
                        <input type="text" />
                        <span>đến</span>
                        <input type="text" />
                    </div>
                    <div className='prefix-number'>
                        <span>Prefix:</span>
                    </div>
                </div>
                <Menubar />
                <Topbar nametitle='Thiết bị > Danh sách dịch vụ > Chi tiết' />
            </div>
        </div>
    )
}
