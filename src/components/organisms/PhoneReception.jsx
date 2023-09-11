import React, { useState } from "react";
import Header from './Header';
import "../styles/PhoneReception.css";
import { useNavigate } from "react-router-dom";

const PhoneReception = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = () => {
    // ここでメール送信のロジックやAPI呼び出しを行う
    alert(`携帯電話番号 ${phoneNumber} にメールを送信します。`);
  };

  const backHome = () => {
    navigate("/home")
  };

  return (
    <div>
      <Header />
        <div className="phone-reception-container">
          <label htmlFor="phone-number">携帯電話番号:</label>
          <input
            type="tel"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="例: 090-1234-5678"
          />
          <button onClick={handleRegister} className="register-button">
            受付登録メール送信
          </button>
      </div>
      <button onClick={backHome}>戻る</button>
    </div>
  );
};

export default PhoneReception;
