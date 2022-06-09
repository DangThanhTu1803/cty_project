import { Infomation } from "./infomation"
import { Menubar } from "../Layout/Menubar"
import { Topbar } from "../Layout/Topbar"

export const Info = () => {
    return(
        <div className="back">

        <div className="bg">
            <Menubar/>
            <Infomation/>
            <Topbar nametitle="Thông tin cá nhân"/>
        </div>
        </div>
    )
}