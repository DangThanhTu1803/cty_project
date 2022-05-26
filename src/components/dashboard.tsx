
import { Menubar } from "./Menubar"
import { Overview } from "./overview"
import { Topbar } from "./Topbar"

export const Dashboard=()=>{
    return(
        <div className='bg'>
            <Menubar/>
            <Overview/>
            <Topbar nametitle="Dashboard"/>
        </div>
    )
}