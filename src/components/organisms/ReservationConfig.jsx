import React, { useState } from "react";
import Header from './Header';
import { useNavigate } from "react-router-dom";
import "../styles/ReservationConfig.css";

const ReservationConfig = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [repeatWeekly, setRepeatWeekly] = useState(false);
  const [deadline, setDeadline] = useState(0);
  const [capacity, setCapacity] = useState(1);
  const [reservations, setReservations] = useState([]);

  const handleAddReservation = () => {
    // ここで予約枠を作成するロジックを追加
    // 例: 9:00から10:00までの場合、9:00-9:30と9:30-10:00の2つの枠を作成
    // このデモでは簡単のため、直接追加しています
    setReservations([...reservations, { startDate, endDate, startTime, endTime, repeatWeekly, deadline, capacity }]);
  };

  const backHome = () => {
    navigate("/medication-instruction")
  };

  return (
    <div>
      <Header />
      <div className="reservation-config">
        <h2>予約枠設定</h2><button onClick={backHome}>戻る</button>
        <div>
          <label>
            設定日:
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            〜
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            開始時間:
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            終了時間:
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            毎週繰り返し:
            <input type="radio" name="repeat" value="no" checked={!repeatWeekly} onChange={() => setRepeatWeekly(false)} /> 繰り返さない
            <input type="radio" name="repeat" value="yes" checked={repeatWeekly} onChange={() => setRepeatWeekly(true)} /> 繰り返す
          </label>
        </div>
        <div>
          <label>
            受付締切:
            <input type="number" value={deadline} onChange={(e) => setDeadline(e.target.value)} min="0" /> 時間前
          </label>
        </div>
        <div>
          <label>
            予約枠の最大受付数:
            <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} min="1" /> 人
          </label>
        </div>
        <button onClick={handleAddReservation}>予約枠を追加</button>

        <h3>設定された予約枠</h3>
        <ul className="reservation-list">
          {reservations.map((res, index) => (
            <li key={index}>
              {res.startDate} - {res.endDate} : {res.startTime} - {res.endTime} ({res.repeatWeekly ? "毎週繰り返し" : "繰り返さない"}) {res.deadline}時間前締切, 最大{res.capacity}人
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReservationConfig;
