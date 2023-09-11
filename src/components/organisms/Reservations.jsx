import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import '../styles/Reservations.css';

const Reservations = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNavigateToReservationConfig = () => {
    navigate("/reservation-config");
  };

  const handleNavigateToReservationDetail = (reservationId) => {
    navigate(`/reservation-detail/${reservationId}`);
  };

  const handlePrevDate = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 1);
      return newDate;
    });
  };

  const handleNextDate = () => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 1);
      return newDate;
    });
  };

  const formatDate = (date) => {
    const options = { month: '2-digit', day: '2-digit', weekday: 'short' };
    return new Intl.DateTimeFormat('ja-JP', options).format(date);
  };

  // ダミーの予約データ
  const demoReservations = [
    { patientName: '山田太郎', time: '9:00 - 9:30', mode: 'オンライン' },
    { patientName: '佐藤花子', time: '9:30 - 10:00', mode: '来店' },
  ];

  return (
    <div>
      <Header />
      <div>
        <h2>服薬指導 予約リスト</h2>
        <div className="stickyControls">
          <button onClick={handlePrevDate}>←</button>
          <span>{formatDate(currentDate)}</span>
          <button onClick={handleNextDate}>→</button>
          <button onClick={handleNavigateToReservationConfig}>予約枠を設定</button>
        </div>
        <div className="reservationList">
          {demoReservations.map((reservation, index) => (
            <div
              key={index}
              className="reservationItem"
              onClick={() => handleNavigateToReservationDetail(index)}
            >
              <p>{reservation.patientName}</p>
              <p>{reservation.time}</p>
              <p>{reservation.mode}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Reservations;
