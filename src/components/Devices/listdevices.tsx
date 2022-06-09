import React from 'react'
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { Add } from './add'
import { Pagination } from '../Pagination/pagination'
import { Link } from "react-router-dom"
import { FiSearch } from 'react-icons/fi'
import { Connected, Disconnected } from '../status/connect/connect'
import { Actived, NonActived } from '../status/active/active'

export const Listdevices = () => {
    return (
        <div>
            <h1>Danh sách thiết bị</h1>
            <div className='device_status_active'>
                <p>Trạng thái hoạt động</p>
                <input type="text" value={'Tất cả'} />
                <div>
                    <TiArrowSortedDown />
                </div>
            </div>
            <div className='device_status_connect'>
                <p>Trạng thái hoạt động</p>
                <input type="text" value={'Tất cả'} />
                <div>
                    <TiArrowSortedDown />
                </div>
            </div>
            <div className='search'>
                <p>Từ khóa</p>
                <input type="text" placeholder='Nhập từ khóa...' />
                <div className='icon_search'>
                    <FiSearch />
                </div>
            </div>
            <div>
                <Link to={'add-device'}>
                    <Add nametitle='Thêm thiết bị' />
                </Link>
            </div>
            <div className='table'>
                <table>
                    <tr>
                        <th style={{ width: '103px' }}><p>Mã thiết bị</p></th>
                        <th style={{ width: '99px' }}><p>Tên thiết bị</p></th>
                        <th style={{ width: '138px' }}><p>Địa chỉ IP</p></th>
                        <th style={{ width: '171px' }}><p>Trạng thái hoạt động</p></th>
                        <th style={{ width: '145px' }}><p>Trạng thái kết nối</p></th>
                        <th style={{ width: '268px' }}><p>Dịch vụ sử dụng</p></th>
                        <th style={{ width: '82px' }}></th>
                        <th style={{ width: '106px' }}></th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <NonActived />
                        </td>
                        <td>
                            <Disconnected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to={'details'}>
                                    Chi tiết
                                </Link>
                            </div>
                        </td>
                        <td>
                            <div>
                                <Link to={'updates'}>
                                    Cập nhật
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Disconnected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <NonActived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Disconnected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <NonActived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Connected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <p>KIO_01</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>Kiosk</p>
                            </div>
                        </td>
                        <td>
                            <div>
                                <p>192.168.1.10</p>
                            </div>
                        </td>
                        <td>
                            <Actived />
                        </td>
                        <td>
                            <Disconnected />
                        </td>
                        <td>
                            <div>
                                <p>Khám tim mạch, Khám mắt...</p>
                                <a href="#"><p>Xem thêm</p></a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Chi tiết</a>
                            </div>
                        </td>
                        <td>
                            <div>
                                <a href="#">Cập nhật</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>

            <Pagination />
        </div>
    )
}
