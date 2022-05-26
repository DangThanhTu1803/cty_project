import { FiMonitor } from "react-icons/fi";
import { AiOutlineComment } from "react-icons/ai";
import { RiStackLine } from "react-icons/ri";

export const Overview = () => {
    return (
        <div className="overview">
            <span>Tổng quan</span>
            <div className="overview-device">
                <div className='percent'>
                    <p>90%</p>
                </div>
                <div className='quantity'>
                    <p className="number">4.221</p>
                    <div className="icon-name">
                        <FiMonitor className="icon" />
                    </div>
                    <p className="name">Thiết bị</p>
                </div>
                <div className="status">
                    <div className="status-on">
                        <p className="dot-on"></p>
                        <div>
                            <p>Đang hoạt động</p>
                            <p className="status-on-total">3.799</p>
                        </div>
                    </div>
                    <div className="status-off">
                        <p className="dot-off"></p>
                        <div>
                            <p>Ngưng hoạt động</p>
                            <p className="status-off-total">422</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overview-service">
                <div className='percent'>
                    <p>76%</p>
                </div>
                <div className='quantity'>
                    <p className="number">276</p>
                    <div className="icon-name">
                        <AiOutlineComment className="icon" style={{ color: '#4277FF' }} />
                    </div>
                    <p className="name" style={{ color: '#4277FF' }}>Dịch vụ</p>
                </div>
                <div className="status">
                    <div className="status-on">
                        <p className="dot-on" style={{ background: '#4277FF' }}></p>
                        <div>
                            <p>Đang hoạt động</p>
                            <p className="status-on-total" style={{ color: '#4277FF' }}>210</p>
                        </div>
                    </div>
                    <div className="status-off">
                        <p className="dot-off"></p>
                        <div>
                            <p>Ngưng hoạt động</p>
                            <p className="status-off-total" style={{ color: '#4277FF' }}>66</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overview-num-order">
                <div className='percent'>
                    <p>86%</p>
                </div>
                <div className='quantity'>
                    <p className="number">4.221</p>
                    <div className="icon-name">
                        <RiStackLine className="icon" style={{ color: '#35C75A' }} />
                    </div>
                    <p className="name" style={{ color: '#35C75A' }}>Cấp số</p>
                </div>
                <div className="status-num-order">
                    <div className="status-used">
                        <p className="dot-used" style={{ color: '#4277FF' }}></p>
                        <div>
                            <p>Đã sử dụng</p>
                            <p className="status-used-total" style={{ color: '#35C75A' }}>3.721</p>
                        </div>
                    </div>
                    <div className="status-wait">
                        <p className="dot-wait"></p>
                        <div>
                            <p>Đang chờ</p>
                            <p className="status-wait-total" style={{ color: '#35C75A' }}>486</p>
                        </div>
                    </div>
                    <div className="status-skip">
                        <p className="dot-skip"></p>
                        <div>
                            <p>Bỏ qua</p>
                            <p className="status-skip-total" style={{ color: '#35C75A' }}>32</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overview-datepicker">
                
            </div>
        </div>
    )
}