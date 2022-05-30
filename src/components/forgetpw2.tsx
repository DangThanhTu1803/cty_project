import { NONAME } from 'dns'
import { Link } from 'react-router-dom'
import forget from './images/forget.svg'
import logo from './images/logo.svg'
import { BiHide } from 'react-icons/bi'

export const Step2 = () => {
    return (
        <div className="back">
            <div className="bg">
                <div className="step2">
                    <img className='logo' src={logo} alt="" />
                    <p>Đặt lại mật khẩu mới</p>
                    <div className='new-pass'>
                        <label>Mật khẩu</label>
                        <input type="password" />
                        <BiHide className="hide" />
                    </div>
                    <div className='new-pass-again'>
                        <label>Nhập lại mật khẩu</label>
                        <input type="password" />
                        <BiHide className="hide" />
                    </div>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <button>Xác nhận</button>
                    </Link>
                    <div className='banner'>
                        <img src={forget} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}