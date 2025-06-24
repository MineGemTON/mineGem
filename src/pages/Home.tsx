import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div style={container}>
      <div style={{ fontSize: 40, textAlign: 'center' }}>💎</div>
      <h2 style={{ textAlign: 'center', margin: '12px 0 16px 0' }}>MineGem</h2>
      <div style={{ textAlign: 'center', color: '#888', marginBottom: 24 }}>
        Зарабатывай токены проекта, играя на сервере Minecraft!
      </div>
      <button onClick={() => navigate('/profile')} style={btnStyle}>👤 Профиль</button>
      <button onClick={() => navigate('/frens')} style={btnStyle}>👥 Frens (Рефералы)</button>
      <button onClick={() => alert('Скоро!')} style={btnStyle}>⛏️ Майнинг</button>
    </div>
  );
};

const container: React.CSSProperties = {
  padding: 24,
  maxWidth: 400,
  margin: '32px auto',
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 2px 8px #0001',
};

const btnStyle: React.CSSProperties = {
  width: '100%',
  padding: 14,
  borderRadius: 8,
  background: '#0098ea',
  color: '#fff',
  border: 'none',
  fontWeight: 600,
  fontSize: 18,
  cursor: 'pointer',
  marginBottom: 12,
};

export default Home; 