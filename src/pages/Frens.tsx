import React from 'react';

const Frens: React.FC = () => {
  const refLink = 'https://t.me/MineGemBot?start=ref123456'; // Заглушка

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Мой реферальный код в MineGem',
        text: 'Присоединяйся к MineGem и зарабатывай токены в Minecraft!',
        url: refLink,
      });
    } else {
      navigator.clipboard.writeText(refLink);
      alert('Ссылка скопирована!');
    }
  };

  return (
    <div style={container}>
      <div style={{ fontSize: 40, textAlign: 'center' }}>👥</div>
      <h2 style={{ textAlign: 'center', margin: '12px 0 8px 0' }}>Frens (Рефералы)</h2>
      <div style={{ textAlign: 'center', fontSize: 16, marginBottom: 16 }}>
        Приглашай друзей и зарабатывай больше токенов!
      </div>
      <div style={{ textAlign: 'center', fontSize: 14, marginBottom: 16 }}>
        <b>Твоя ссылка:</b><br/>
        <span style={{ fontFamily: 'monospace', background: '#f5f5f5', padding: '4px 8px', borderRadius: 6 }}>{refLink}</span>
      </div>
      <button onClick={handleShare} style={btnStyle}>
        📤 Поделиться
      </button>
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
  padding: 12,
  borderRadius: 8,
  background: '#0098ea',
  color: '#fff',
  border: 'none',
  fontWeight: 600,
  fontSize: 16,
  cursor: 'pointer',
};

export default Frens; 