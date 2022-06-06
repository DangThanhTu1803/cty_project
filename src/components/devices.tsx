
import { Listdevices } from "./listdevices"
import { Menubar } from "./Menubar"
import { Topbar } from "./Topbar"

export const Devices = () => {
    return (
        <div className="back">
            <div className="bg">
                <Menubar />
                <Listdevices/>
                <Topbar nametitle="Thiết bị > Danh sách thiết bị" />
            </div>
        </div>
    )
}