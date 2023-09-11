import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logout from './Logout';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#4CAF50', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <h1 style={{ fontSize: '16px', textAlign: 'left', flex: 1 }}>薬局管理者画面</h1>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span onClick={() => handleNavigation('/home')} style={{ fontSize: '16px', color: 'white', textDecoration: 'none', cursor: 'pointer' }}>ホーム</span>
        <span onClick={() => handleNavigation('/medication-instruction')} style={{ fontSize: '16px', color: 'white', textDecoration: 'none', cursor: 'pointer' }}>服薬指導</span>
        <button onClick={toggleMenu}>メニュー</button>
      </div>

      {menuOpen && (
        <div ref={menuRef} style={{ position: 'absolute', top: '75px', right: '10px', width: '150px', backgroundColor: '#f5f5f5', border: '1px solid #ccc' }}>
          <ul style={{ listStyleType: 'none' }}>
            <li onClick={() => handleNavigation('/mypage')}>マイページ</li>
            <li onClick={() => handleNavigation('/#')}>質問票編集</li>
          </ul>
          <Logout />
        </div>
      )}
    </div>
  );
};

export default Header;

