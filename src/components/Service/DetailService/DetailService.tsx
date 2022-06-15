import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropright } from 'react-icons/io'
import { TiArrowSortedDown } from 'react-icons/ti'
import { UpdateAndBack } from '../../Devices/btnRightLayout/UpdateAndBack'
import { Menubar } from '../../Layout/Menubar'
import { Topbar } from '../../Layout/Topbar'
import { Pagination } from '../../Pagination/pagination'
import { Absent, Completed, Doing } from '../../status/status_details/DetailStatus'
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
                        <div className="details-input_number">
                            <input type="text" value={'0001'} className='num-start' />
                            <p>đến</p>
                            <input type="text" value={'9999'} className='num-end' />
                        </div>
                    </div>
                    <div className='prefix-number'>
                        <span>Prefix:</span>
                        <input type="text" className='prefix_detail-input' value={'0001'} />
                    </div>
                    <span className='rst'>Reset mỗi ngày</span>
                    <i className='exam'>Ví dụ: 201-2001</i>
                </div>
                <div className="detail_bg_status">
                    <div className="detail_status">
                        <span>Trạng thái</span>
                        <input type="text" value={'Tất cả'} />
                        <div>
                            <TiArrowSortedDown />
                        </div>
                    </div>
                    <div className="detail_datepicker-status">
                        <span>Chọn thời gian</span>
                        <div className='pick'>
                            <input type="text" placeholder='10/10/2021' />
                            <div className='icon_next'>
                                <IoMdArrowDropright />
                            </div>
                            <input type="text" placeholder='18/10/2021' />
                        </div>
                    </div>
                    <div className="detail_search">
                        <span>Từ khóa</span>
                        <input type="text" placeholder='Nhập từ khóa' />
                        <div className='icon_search'>
                            <FiSearch />
                        </div>
                    </div>
                    <div className="table">
                        <table>
                            <tr>
                                <th><p>Số thứ tự</p></th>
                                <th><p>Trạng thái</p></th>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010001</p>
                                    </div>
                                </td>
                                <td>
                                    <Completed />
                                </td>
                            </tr>
                            <tr>
                            <td>
                                    <div>
                                        <p>2010002</p>
                                    </div>
                                </td>
                                <td>
                                    <Completed />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010003</p>
                                    </div>
                                </td>
                                <td>
                                    <Doing />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010004</p>
                                    </div>
                                </td>
                                <td>
                                    <Absent />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010005</p>
                                    </div>
                                </td>
                                <td>
                                    <Completed />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010006</p>
                                    </div>
                                </td>
                                <td>
                                    <Doing />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010007</p>
                                    </div>
                                </td>
                                <td>
                                    <Absent />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <p>2010008</p>
                                    </div>
                                </td>
                                <td>
                                    <Completed />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='detail_pagin'>
                        <Pagination />
                    </div>
                </div>
                <UpdateAndBack href1='/services/updates' href2='/services'/>
                <Menubar />
                <Topbar nametitle='Thiết bị > Danh sách dịch vụ > Chi tiết' />
            </div>
        </div>
    )
}
