import React from 'react';
import Header from './Header';

const MyPage = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  };

  const headerStyle = {
    borderBottom: '2px solid #4CAF50',
    paddingBottom: '10px',
    marginBottom: '20px'
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
    margin: '0 0 20px 0'
  };

  const listItemStyle = {
    padding: '5px 0',
    borderBottom: '1px solid #ddd'
  };

  return (
    <div>
      <Header />
      <div style={containerStyle}>
        <h2 style={headerStyle}>案内情報</h2>
        <p>患者や医療機関が薬局を選択する時に見る情報を設定します。</p>
        <p>電子処方箋：非対応</p>
        <h3>営業時間</h3>
        <ul style={listStyle}>
          <li>日曜日：09:00 - 17:00</li>
          <li>月曜日：09:00 - 19:30</li>
          <li>火曜日：09:00 - 19:30</li>
          <li>水曜日：09:00 - 19:30</li>
          <li>木曜日：09:00 - 19:30</li>
          <li>金曜日：09:00 - 19:30</li>
          <li style={listItemStyle}>土曜日：09:00 - 17:00</li>
        </ul>
        <h3>コメント</h3>
        <p>オンライン服薬指導・在宅医療にも対応している薬局です。</p>
        <p style={listItemStyle}>緊急時は365日24時間対応しておりますので、お問い合わせフォームもしくはお電話にてお問い合わせください。</p>

        <h3>薬局情報</h3>
        <p>店舗情報、口座の変更はカスタマーデスクにご連絡ください</p>
        <ul style={listStyle}>
          <li>薬局名	アクア薬局</li>
          <li>薬局名フリガナ	アクアヤッキョク</li>
          <li>郵便番号	567-0031</li>
          <li>所在地	大阪府 茨木市 春日1-4-10 グラン長久茨木103</li>
          <li>電話番号	072-657-9111</li>
          <li>FAX番号	072-657-9112</li>
          <li>ログイン用メールアドレス	info@aquapharmacy.co.jp</li>
          <li>店舗ログインURL	https://pharmacy.curon.co/login/aklksdaj</li>
          <li>法人名	株式会社GIFTED</li>
          <li>決済サービス申請状況	審査OK</li>
          <li style={listItemStyle}>銀行口座	三菱ＵＦＪ銀行　中央市場支店　普通　3026910　カブシキガイシャギフテッド</li>
        </ul>

        <h3>口座情報</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>金融機関名：三菱ＵＦＪ</li>
          {/* ... 他の口座情報も同様に追加 ... */}
        </ul>
      </div>
    </div>
  );
};

export default MyPage;
