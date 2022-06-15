import { Link } from "react-router-dom"
import { IconNoti } from "./notificationIcon"
import './top.css'
type title = {
    nametitle1?: string | undefined
    nametitle2: string | undefined
    href: string | undefined
    nametitle21: string | undefined
    href2: string | undefined
    nametitle3: string | undefined
}
export const Topbar = (props: title) => {
    return (
        <div className="topbar">
            <div className="content">
                <div className="title1" id="title">
                    <p className="title2">{props.nametitle1}</p>
                    <Link to ={props.href+''}>{props.nametitle2}</Link>
                    <Link to={props.href2+''}>{props.nametitle21}</Link>
                    <p className="title3">{props.nametitle3}</p>
                </div>
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
