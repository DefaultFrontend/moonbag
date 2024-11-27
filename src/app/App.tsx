import React from 'react';
import styles from './styles.module.css';
import dexscreener from './assets/dexscreener.png';
import x from './assets/x.png';
import tg from './assets/tg.webp';

const App: React.FC = () => {
  return (
    <>
      <div className='flex items-center justify-center gap-[80px] bg-white py-[20px]'>
        <a
          href='https://dexscreener.com/solana/2au3kup1ch4ftscje7mekyyye4aaea2jl3uyad4kkyjx'
          target='_blank'
        >
          <img src={dexscreener} alt='Dexscreener' className='h-[80px] w-auto' />
        </a>

        <a href='https://t.me/+CoDH0ivQtHY0NjJh' target='_blank' className='w-[]'>
          <img src={tg} alt='Telegram' className='h-[80px] w-auto' />
        </a>

        <a
          href='https://x.com/moonbagmoon?s=21&t=sAVTz-Slah57gGcegV1_9Q'
          target='_blank'
          className='w-[]'
        >
          <img src={x} alt='x' className='h-[80px] w-[80px]' />
        </a>
      </div>
      <div className={styles.bg}></div>
    </>
  );
};

export default App;
