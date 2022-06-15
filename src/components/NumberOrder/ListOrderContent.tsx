import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoMdArrowDropright } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { Pagination } from '../Pagination/pagination'
import { SkipedStatus, UsingStatus, WaitingStatus } from '../status/status_order/orderStatus'
import './Order.css'

export const ListOrderContent = () => {
    return (
        <div className='order_content'>
            <h1>Quản lý cấp số</h1>
            <div className="oder_name-service">
                <span>Tên dịch vụ</span>
                <input type="text" value={'Tất cả'} />
            </div>
            <div className="order_status">
                <span>Tình trạng</span>
                <input type="text" value={'Tất cả'} />
            </div>
            <div className='order_origin'>
                <span>Nguồn cấp</span>
                <input type="text" value={'Tất cả'} />
            </div>
            <div className='datePicker'>
                <span>Chọn thời gian</span>
                <div className='pick'>
                    <input type="text" placeholder='10/10/2021' />
                    <div className='icon_next'>
                        <IoMdArrowDropright />
                    </div>
                    <input type="text" placeholder='18/10/2021' />
                </div>
            </div>
            <div className='order_search'>
                <span>Từ khóa</span>
                <input type="text" placeholder='Nhập từ khóa...' />
                <div className='icon_search'>
                    <FiSearch />
                </div>
            </div>
            <div className="table">
                <table>
                    <tr>
                        <th><p>STT</p></th>
                        <th><p>Tên khách hàng</p></th>
                        <th><p>Tên dịch vụ</p></th>
                        <th><p>Thời gian cấp</p></th>
                        <th><p>Hạn sử dụng</p></th>
                        <th><p>Trạng thái</p></th>
                        <th><p>Nguồn cấp</p></th>
                        <th><p></p></th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010001</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010002</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <UsingStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010003</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010004</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010005</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <WaitingStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010006</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <UsingStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010007</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <UsingStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010008</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <SkipedStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>2010009</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Lê Huỳnh Ái Vân</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 07/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>14:35 - 12/11/2021</p>
                            </div>
                        </td>
                        <td>
                            <UsingStatus />
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to = {'order-details'}>
                                    <p>Chi tiết</p>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            <div className='pagin'>
                <Pagination />
            </div>
        </div>
    )
}
