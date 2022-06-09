
import { FiEye, FiEyeOff } from 'react-icons/fi'
import login from '../images/login.svg'
import logo from '../images/logo.svg'
import { Link } from "react-router-dom"

export const Login = () => {
    const  showpw = () =>{
        const hide: any = document.getElementById('hide')
        const show: any = document.getElementById('show')
        const eye: any = document.getElementById('pw1')
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
        <div className="login-page">
            <div>
                <img className="logo" src={logo} alt="" />
                <div className="username">
                    <label htmlFor="">Tên đăng nhập *</label>
                    <input type="text" />
                </div>

                <div className="password">
                    <label htmlFor="">Mật khẩu *</label>
                    <input type="password" id='pw1'></input>
                    <FiEyeOff className="show" id='show' onClick={()=>showpw()}/>
                    <FiEye className='hide' id='hide' style={{display:'none'}} onClick={()=>showpw()}/>
                </div>

                <Link to={'/quen-mat-khau'} className='a'>
                    Quên mật khẩu?
                </Link>
            </div>
            <div>
                <Link to={'/info'}>
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