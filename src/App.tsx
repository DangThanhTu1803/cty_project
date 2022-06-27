import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Account } from "./components/Account/Account";
import { AddAccount } from "./components/Account/AddAccount/AddAccount";
import { UpdateAccount } from "./components/Account/UpdateAccount/UpdateAccount";
import { Dashboard } from "./components/Dashboard/dashboard";
import { Adddevice } from "./components/Devices/AddDevice/adddevice";
import { DetailsDevice } from "./components/Devices/DetailDevice/DetailsDevice";
import { Devices } from "./components/Devices/devices";
import { UpdateDevice } from "./components/Devices/UpdateDevice/UpdateDevice";
import { Info } from "./components/InfoUser/info";
import { ForgetPW } from "./components/Login/forgetpw";
import { Step2 } from "./components/Login/forgetpw2";
import { Login } from "./components/Login/login";
import { NewOrder } from "./components/NumberOrder/NewOrder";
import { NumberOrderList } from "./components/NumberOrder/NumberOrderList";
import { OrderDetail } from "./components/NumberOrder/OrderDetail";
import { ReportList } from "./components/Report/ReportList";
import { AddRole } from "./components/roles/AddRole/AddRole";
import { RolesList } from "./components/roles/RolesList";
import { UpdateRole } from "./components/roles/UpdateRole/UpdateRole";
import { AddService } from "./components/Service/AddService/AddService";
import { DetailService } from "./components/Service/DetailService/DetailService";
import { ListService } from "./components/Service/ListService";
import { UpdateServices } from "./components/Service/UpdateServices/UpdateServices";
import { UserLog } from "./components/UserLog/UserLog";

function App() {
  return (
    <Routes>
        {/**Đăng nhập */}
        <Route path='/' element={<Login />} />
        <Route path='/quen-mat-khau' element={<ForgetPW />} />
        <Route path='/quen-mat-khau-2' element={<Step2 />} />
        {/**Thông tin cá nhân */}
        <Route path='/info' element={<Info />} />
        {/**Trang chủ */}
        <Route path='/dashboard' element={<Dashboard />} />
        {/**Quản lý thiết bị */}
        <Route path='/devices' element={<Devices />} />
        <Route path='/devices/add-device' element={<Adddevice />} />
        <Route path='/devices/details' element={<DetailsDevice />} />
        <Route path='/devices/updates' element={<UpdateDevice />} />
        {/**Quản lý dịch vụ */}
        <Route path='/services' element={<ListService />} />
        <Route path='/services/add-service' element={<AddService />} />
        <Route path='/services/details' element={<DetailService />} />
        <Route path='/services/updates' element={<UpdateServices />} />
        {/**Quản lý cấp số */}
        <Route path='/order-number' element={<NumberOrderList />} />
        <Route path='/order-number/new-number' element={<NewOrder />} />
        <Route path='/order-number/order-details' element={<OrderDetail />} />
        {/**Báo cáo */}
        <Route path='/report' element={<ReportList />} />
        {/**Quản lý vai trò */}
        <Route path='/roles' element={<RolesList />} />
        <Route path='/roles/add-role' element={<AddRole />} />
        <Route path='/roles/update-role' element={<UpdateRole />} />
        {/**Quản lý tài khoản */}
        <Route path='/account' element={<Account />} />
        <Route path='/account/add-account' element={<AddAccount />} />
        <Route path='/account/update-account' element={<UpdateAccount />} />
        {/**Nhật ký người dùng */}
        <Route path='/user-log' element={<UserLog />} />
    </Routes>
  );
}

export default App;
