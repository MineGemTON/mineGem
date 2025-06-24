import React, { useEffect, useState } from 'react';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';

const JETTON_MASTER = 'EQBynBO23ywHy_CgarY9NK9FTz0yDsG82PtcbSTQgGoXwiuA'; // jUSDT для примера
const JETTON_SYMBOL = 'GEM';
const JETTON_DECIMALS = 6;
const ELIGIBLE_AMOUNT = 1000;

const Profile: React.FC = () => {
  const username = 'Steve';
  const [jettonBalance, setJettonBalance] = useState<number | null>(null);
  const [eligibility, setEligibility] = useState<'eligible' | 'not-eligible' | null>(null);
  const wallet = useTonWallet();

  // Minecraft style colors
  const green = '#3cbb11';
  const red = '#b91c1c';
  const brown = '#7c4a03';
  const pixelBorder = `4px solid ${brown}`;

  useEffect(() => {
    const fetchJettonBalance = async (address: string) => {
      try {
        const resp = await fetch(`https://tonapi.io/v2/accounts/${address}/jettons`);
        const data = await resp.json();
        const jetton = data.balances.find((j: any) => j.jetton.master === JETTON_MASTER);
        const balance = jetton ? Number(jetton.balance) / 10 ** JETTON_DECIMALS : 0;
        setJettonBalance(balance);
        setEligibility(balance >= ELIGIBLE_AMOUNT ? 'eligible' : 'not-eligible');
      } catch (e) {
        setJettonBalance(null);
        setEligibility(null);
      }
    };
    if (wallet?.account?.address) {
      fetchJettonBalance(wallet.account.address);
    } else {
      setJettonBalance(null);
      setEligibility(null);
    }
  }, [wallet]);

  const status = eligibility === 'eligible'
    ? <span style={{ color: green, fontWeight: 700 }}>✅ You are <span style={{ fontFamily: 'Minecraft', letterSpacing: 1 }}>ELIGIBLE</span> <span role="img" aria-label="pickaxe">⛏️</span></span>
    : eligibility === 'not-eligible'
      ? <span style={{ color: red, fontWeight: 700 }}>❌ You are <span style={{ fontFamily: 'Minecraft', letterSpacing: 1 }}>NOT ELIGIBLE</span> <span role="img" aria-label="barrier">🚫</span></span>
      : null;

  return (
    <div style={{ ...container, border: pixelBorder, fontFamily: 'Minecraft, monospace', background: '#e3d7c1', position: 'relative' }}>
      <div style={{ fontSize: 48, textAlign: 'center', marginBottom: 8 }}>🧑‍🌾</div>
      <h2 style={{ textAlign: 'center', margin: '12px 0 4px 0', color: brown, textShadow: '1px 1px #fff' }}>@{username}</h2>
      <div style={{ textAlign: 'center', color: '#888', fontSize: 14, marginBottom: 12 }}>
        {wallet?.account?.address ? (
          <>
            TON: <span style={{ fontFamily: 'monospace' }}>{wallet.account.address}</span>
          </>
        ) : (
          <>TON: <span style={{ fontFamily: 'monospace' }}>—</span></>
        )}
      </div>
      <div style={{ textAlign: 'center', fontSize: 18, marginBottom: 8, color: green, textShadow: '1px 1px #fff' }}>
        💰 Баланс: <b>{jettonBalance !== null ? jettonBalance : '—'}</b> <span style={{ color: '#0098ea' }}>{JETTON_SYMBOL}</span>
      </div>
      <div style={{ textAlign: 'center', fontSize: 16, marginBottom: 16 }}>{status}</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
        <TonConnectButton />
      </div>
      <div style={{ textAlign: 'center', fontSize: 12, color: '#555', marginTop: 8 }}>
        <span style={{ background: '#fffbe6', padding: '2px 8px', borderRadius: 6, border: `2px solid ${brown}` }}>
          Для участия нужно минимум <b>{ELIGIBLE_AMOUNT} {JETTON_SYMBOL}</b>
        </span>
      </div>
    </div>
  );
};

const container: React.CSSProperties = {
  padding: 24,
  maxWidth: 400,
  margin: '32px auto',
  borderRadius: 16,
  boxShadow: '0 2px 8px #0001',
};

export default Profile; 