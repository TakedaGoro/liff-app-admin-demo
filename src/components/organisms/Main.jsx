import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Reservations.css';

const Main = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(new Date()); // 現在の日付を管理するstate

  const handleAddPatient = () => {
    navigate("/phone-number-reception");
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

  const demoReceptions = [
    { patientName: '山田太郎', time: '9:00 - 9:30', mode: 'オンライン' },
    { patientName: '佐藤花子', time: '9:30 - 10:00', mode: '来店' },
  ];

  return (
    <div>
      <div>
          <h2>患者受付一覧</h2>
        <div className="stickyControls">
          <button onClick={handlePrevDate}>←</button>
          <span>{formatDate(currentDate)}</span>
          <button onClick={handleNextDate}>→</button>
          <button onClick={handleAddPatient}>電話番号で受付</button>
        </div>
        <div className="reservationList">
          {demoReceptions.map((reception, index) => (
            <div
              key={index}
              className="reservationItem"
              onClick={() => handleNavigateToReservationDetail(index)}
            >
              <p>{reception.patientName}</p>
              <p>{reception.time}</p>
              <p>{reception.mode}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

