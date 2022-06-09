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
                    <img src="https://data.whicdn.com/images/228714327/original.jpg" alt="fail img" />
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
