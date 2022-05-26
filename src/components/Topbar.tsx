import { Link } from "react-router-dom"
import { IconNoti } from "./notificationIcon"
type title = {
    nametitle: string
}
export const Topbar = (props:title) => {
    return (
        <div className="topbar">
            <div className="content">
                <p > {props.nametitle}</p>
            </div>
            <div className="info">
            <IconNoti />
            <Link to="/info" className="header_info">
                <div className="avatar">
                    <img src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-cap-2-3-606x600.jpg" alt="fail img" />
                </div>
                <div className="name-user">
                    <p>Xin chào</p>
                    <span>Lê Quỳnh Ái Vân</span>
                </div>
            </Link>
            </div>
        </div>
    )
}
