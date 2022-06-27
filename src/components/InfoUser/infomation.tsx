import { HiOutlineCamera } from 'react-icons/hi'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


export const Infomation: React.FC = () => {
    const userInfo = useSelector((state: RootState) => state.user);
    return (
        <div className="infomation-img">
            <div className='name-img'>
                <div className='img-icon'>
                    <img src={userInfo.avatar} alt="" />
                    <div className='icon-cam'><HiOutlineCamera className='camera' /></div>
                </div>
                <p>Lê Quỳnh Ái Vân</p>
            </div>
            <div className='infomation'>
                <div className='info-item'>
                    <label htmlFor="">Tên người dùng</label>
                    <input type="text" value={userInfo.fullName} />

                </div>
                <div className='info-item'>
                    <label htmlFor="">Tên đăng nhập</label>
                    <input type="text" value={userInfo.userName} />

                </div>
                <div className='info-item'>
                    <label htmlFor="">Số điện thoại</label>
                    <input type="text" value={userInfo.phoneNumber} />

                </div>
                <div className='info-item'>
                    <label htmlFor="">Mật khẩu</label>
                    <input type="text" value={userInfo.password} />
                </div>
                <div className='info-item'>
                    <label htmlFor="">Email</label>
                    <input type="text" value={userInfo.email} />

                </div>
                <div className='info-item'>
                    <label htmlFor="">Vai trò</label>
                    <input type="text" value={`${userInfo.role === 0 ? `Admin` : `Contributor`}`} />

                </div>
            </div>
        </div>


    )
}