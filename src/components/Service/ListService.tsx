import { Pagination } from '../Pagination/pagination'
import React from 'react'
import { Menubar } from '../Layout/Menubar'
import { Topbar } from '../Layout/Topbar'
import './service.css'
import { TiArrowSortedDown } from 'react-icons/ti'
import { IoMdArrowDropright } from 'react-icons/io'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Add } from '../Devices/btnRightLayout/add'
import { Actived, NonActived } from '../status/active/active'

export const ListService = () => {
  return (
    <div className='back'>
      <div className="bg">
        <h1>Quản lý dịch vụ</h1>
        <div className="service_status_active">
          <p>Trạng thái hoạt động</p>
          <input type="text" value={'Tất cả'} />
          <div>
            <TiArrowSortedDown />
          </div>
        </div>

        <div className='datePicker'>
          <p>Chọn thời gian</p>
          <div className='pick'>
            <input type="text" placeholder='10/10/2021' />
            <div className='icon_next'>
              <IoMdArrowDropright />
            </div>
            <input type="text" placeholder='18/10/2021' />
          </div>
        </div>
        <div className="search">
          <p>Từ khóa</p>
          <input type="text" placeholder='Nhập từ khóa...' />
          <div className='icon_search'>
            <FiSearch />
          </div>
        </div>
        <Link to={'add-service'}>
          <Add nametitle='Thêm dịch vụ'></Add>
        </Link>
        <div className="table">
          <table>
            <tr>
              <th style={{ width: '150px' }}><p>Mã dịch vụ</p></th>
              <th style={{ width: '224px' }}><p>Tên dịch vụ</p></th>
              <th style={{ width: '230px' }}><p>Mô tả</p></th>
              <th style={{ width: '253px' }}><p>Trạng thái hoạt động</p></th>
              <th style={{ width: '125px' }}></th>
              <th style={{ width: '125px' }}></th>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived/>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived/>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <NonActived/>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived/>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived/>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived/>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived/>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <NonActived/>
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
                  <p>Mô tả dịch vụ 1</p>
                </div>
              </td>
              <td>
                <Actived/>
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
          </table>
        </div>

        <Menubar buttonid='dv'/>
        <div className='pagin'>
        <Pagination />
        </div>
        <Topbar nametitle1='Dịch vụ >' nametitle2='' href='' nametitle21='' href2='' nametitle3='Danh sách dịch vụ'  />
      </div>
    </div>
  )
}
