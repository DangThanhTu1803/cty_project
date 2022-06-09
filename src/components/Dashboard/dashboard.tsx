
import { Cards } from "./Cards"
import { Chart } from "./Chart"
import { Menubar } from "../Layout/Menubar"
import { Overview } from "./overview"
import { Topbar } from "../Layout/Topbar"

export const Dashboard = () => {
    return (
        <div className="back">
            <div className='bg'>
                <h1>Biểu đồ cấp số</h1>
                <Cards/>
                <Chart/>
                <Menubar />
                <Overview />
                <Topbar nametitle="Dashboard" />
            </div>
        </div>
    )
}