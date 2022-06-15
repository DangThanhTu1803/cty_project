import { Menubar } from "../../Layout/Menubar"
import { Topbar } from "../../Layout/Topbar"
import { AddAccountContent } from "../AddAccount/AddAccountContent"

export const UpdateAccount = () => {
    return (
      <div className='back'>
          <div className="bg">
              <AddAccountContent title='Cập nhật'/>
              <Menubar/>
              <Topbar nametitle='Cài đặt hệ thống > Quản lý tài khoản > Cập nhật tài khoản'/>
          </div>
      </div>
    )
  }