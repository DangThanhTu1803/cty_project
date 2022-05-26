
import { BiHide } from 'react-icons/bi'
import login from './images/login.svg'
import logo from './images/logo.svg'
import { Link } from "react-router-dom"

export const Login = () => {
    return (
        <div className="login-page">
            <div>
                <img className="logo" src={logo} alt="" />
                <div className="username">
                    <label htmlFor="">Tên đăng nhập *</label>
                    <input type="text" />
                </div>
                <div className="password">
                    <label htmlFor="">Mật khẩu *</label>
                    <input type="password"></input>
                    <BiHide className="hide" />
                </div>
                <Link to={'/quen-mat-khau'} className='a'>
                    Quên mật khẩu?
                </Link>
            </div>
            <div>
                <Link to={'/Dashboard'}>
                    <button type="submit" className="submit">Đăng nhập</button>
                </Link>
            </div>
            <div className="banner">
                <img src={login} alt="" />
                <div className="name_proj">
                    <p>Hệ thống</p>
                    <p>Quản lý xếp hàng</p>
                </div>
            </div>
        </div>
    )
}