import { HiOutlineCamera } from 'react-icons/hi'

export const Infomation = () => {
    return (
        <div className="infomation-img">
            <div className='name-img'>
                <div className='img-icon'>
                    <img src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-cap-2-3-606x600.jpg" alt="" />
                    <div className='icon-cam'><HiOutlineCamera className='camera' /></div>
                </div>
                <p>Lê Quỳnh Ái Vân</p>
            </div>
            <div className='infomation'>
                <div className='info-item'>
                    <label htmlFor="">Tên người dùng</label>
                    <input type="text" value={'Lê Quỳnh Ái Vân'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Tên đăng nhập</label>
                    <input type="text" value={'lequynhaivan01'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Số điện thoại</label>
                    <input type="text" value={'0123456789'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Mật khẩu</label>
                    <input type="text"  value={'abcxyz'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Email</label>
                    <input type="text" value={'admin@abc.com'}/>
                </div>
                <div className='info-item'>
                    <label htmlFor="">Vai trò</label>
                    <input type="text" value={'Kế Toán'}/>
                </div>
            </div>
        </div>
    )
}