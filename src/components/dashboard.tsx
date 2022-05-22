import { Menubar } from "./Menubar"
import { Topbar } from "./Topbar"

export const Dashboard=()=>{
    return(
        <div className='bg'>
            <Menubar/>
            <Topbar/>
        </div>
    )
}