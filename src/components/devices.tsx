
import { Menubar } from "./Menubar"
import { Topbar } from "./Topbar"

export const Devices = () => {
    return (
        <div className="back">
            <div className="bg">
                <Menubar />

                <Topbar nametitle="Thiết bị" />
            </div>
        </div>
    )
}