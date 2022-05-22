import { FiLogOut, FiMonitor } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiStackLine, RiSettingsLine } from "react-icons/ri";
import { AiOutlineBarChart, AiOutlineMore, AiOutlineComment } from "react-icons/ai";
import logo from "./images/logo.svg"
export const Menubar = () => {
    return (
        <div className="main-menubar">
            <div className="main-logo" >
                <img src={logo} alt="" />
            </div>
            <div className="menubar">
                <div className="menubar-item">
                    <a href="#">
                        <MdOutlineDashboard className="icon" />
                        <p>Dashboard</p>
                    </a>
                </div >
                <div className="menubar-item">
                    <a href="#">
                        <FiMonitor className="icon" />
                        <p>Thiết bị</p>
                    </a>
                </div>
                <div className="menubar-item">
                    <a href="#">
                        <AiOutlineComment className="icon" />
                        <p>Dịch vụ</p>
                    </a>
                </div>
                <div className="menubar-item">
                    <a href="#">
                        <RiStackLine className="icon" />
                        <p>Cấp số</p>
                    </a>
                </div>
                <div className="menubar-item">
                    <a href="#">
                        <AiOutlineBarChart className="icon" />
                        <p>Báo cáo</p>
                    </a>
                </div>
                <div className="menubar-item">
                    <a href="#">
                        <RiSettingsLine className="icon" />
                        <p> Cài đặt hệ thống </p>
                        <AiOutlineMore className="icon1" />
                        <div className="drop-down-item">
                            <a href="#"><p>Quản lý vai trò</p></a>
                            <a href="#"><p>Quản lý tài khoản</p></a>
                            <a href="#"><p>Nhật ký người dùng</p></a>
                        </div>
                    </a>
                </div>
            </div>
            <div className='logout'>
                <a href="/">
                    <div>
                        <FiLogOut className='icon' />
                        <p>Đăng xuất</p>
                    </div>
                </a>
            </div>
        </div>

    )
}