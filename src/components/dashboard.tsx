import { Info } from "./infomation"
import { Menubar } from "./Menubar"
import { Topbar } from "./Topbar"

export const Dashboard=()=>{
    return(
        <div className='bg'>
            <Menubar/>
            
            <Info/>
            <Topbar/>
        </div>
    )
}