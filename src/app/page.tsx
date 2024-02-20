'use client'

import styles from './page.module.css'
import Button from './components/button'
import styleButton from './components/button.module.css'
import { useState } from 'react';

export default function Home() {
  const [sayYes, setSayYes] = useState<boolean>(false);

  const handleNoButtonHover = (isHovered: any) => {
    // console.log(`O botão "Não" está ${isHovered ? 'hovered' : 'não hovered'}.`);
  };

  return (
    <main className={styles.main}>
      {sayYes ? (
      <div className={styles.secondDiv}>
        <div className={styles.envelopeWrapper}>
            <div id={styles.envelope} className={styles.open}>
                <div className={styles.flap}></div>
                <div className={styles.pocket}></div>
                <div className={styles.letter}>
                    <p className={`${styles.line1}`}>Leticia,</p>
                    <p className={`${styles.line2}`}>Nos vemos amanhã 😊</p>
                    <p className={`${styles.line3}`}>Atenciosamente,</p>
                    <p className={`${styles.line4}`}>Eu</p>
                </div>
            </div>
        </div>
      </div>
      ) : (
        <div className={styles.firstDiv}>
        <h1>Vamos sair amanhã?</h1>
        <div className={styles.buttonsBox}>
          <button className={styleButton.buttonRight} onClick={() => {
            setSayYes(true)
          }}>Sim</button>
          <Button label="Não" onHover={handleNoButtonHover}/>
        </div>
        <div>
        </div>
      </div>
      )}
    </main>
  )
}
