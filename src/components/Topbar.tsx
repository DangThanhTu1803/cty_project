import { IconNoti } from "./notificationIcon"

export const Topbar = () => {
    return (
        <div className="topbar">
            <div className="content">
                <p > Dashboard</p>
            </div>
            <div className="info">
            <IconNoti />
            <a href="#" className="header_info">
                <div className="avatar">
                    <img src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-cap-2-3-606x600.jpg" alt="fail img" />
                </div>
                <div className="name-user">
                    <p>Xin chào</p>
                    <span>Lê Quỳnh Ái Vân</span>
                </div>
            </a>
            </div>
        </div>
    )
}
