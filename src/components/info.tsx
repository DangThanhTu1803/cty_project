import { Infomation } from "./infomation"
import { Menubar } from "./Menubar"
import { Topbar } from "./Topbar"

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