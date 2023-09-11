import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminHome from './components/pages/adminHome';
import MyPage from './components/organisms/MyPage';
import Login from './components/pages/Login';
import ReservationSlotSetting from './components/organisms/Reservations';
import PhoneReception from './components/organisms/PhoneReception';
import ReservationConfig from './components/organisms/ReservationConfig';

const AppAdminRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<AdminHome />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/medication-instruction" element={<ReservationSlotSetting />} />
        <Route path="/reservation-config" element={<ReservationConfig />} />
        <Route path="/phone-number-reception" element={<PhoneReception />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppAdminRoutes;
