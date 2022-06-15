import { FiLogOut, FiMonitor } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiStackLine, RiSettingsLine } from "react-icons/ri";
import { AiOutlineBarChart, AiOutlineMore, AiOutlineComment } from "react-icons/ai";
import logo from "../images/logo.svg"
import { Link } from "react-router-dom";
export const Menubar = () => {
    return (
        <div className="main-menubar">
            <div className="main-logo" >
                <Link to={'/dashboard'}>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="menubar">
                <div className="menubar-item">
                    <Link to="/dashboard">
                        <MdOutlineDashboard className="icon" />
                        <p>Dashboard</p>
                    </Link>
                </div >
                <div className="menubar-item">
                    <Link to="/devices">
                        <FiMonitor className="icon" />
                        <p>Thiết bị</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/services">
                        <AiOutlineComment className="icon" />
                        <p>Dịch vụ</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/order-number">
                        <RiStackLine className="icon" />
                        <p>Cấp số</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="/report">
                        <AiOutlineBarChart className="icon" />
                        <p>Báo cáo</p>
                    </Link>
                </div>
                <div className="menubar-item">
                    <Link to="#">
                        <RiSettingsLine className="icon" />
                        <p> Cài đặt hệ thống </p>
                        <div className="icon1">
                            <AiOutlineMore />
                        </div>
                        <div className="drop-down-item">
                            <Link to="/roles">
                                <p>Quản lý vai trò</p>
                            </Link>
                            <Link to="/account">
                                <p>Quản lý tài khoản</p>
                            </Link>
                            <Link to="/user-log">
                                <p>Nhật ký người dùng</p>
                            </Link>
                        </div>
                    </Link>
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