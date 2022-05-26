import { Menubar } from "./Menubar"
import { Topbar } from "./Topbar"

export const Devices = () => {
    return(
        <div className="bg">
            <Menubar/>
            <Topbar nametitle="Thiết bị"/>
        </div>
    )
}