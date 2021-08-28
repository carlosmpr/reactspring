import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.css';
import styles from './styles.module.css'

function App() {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
    <div>
    <div className={styles.background} />

    <Parallax pages={10}>
      <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
        <p className={styles.scrollText} style={{fontSize:'4rem'}}>Carlos Polanco</p>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#ff6d6d' }} />
      <ParallaxLayer sticky={{ start: 0.5, end:0.65}} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <div className={`${styles.card} ${styles.sticky}`}>
          <p>Software Developer</p>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
        <p className={styles.scrollText} style={{fontSize:'4rem'}}>🎓4+ years of IT experience🎓</p>
      </ParallaxLayer>
   
    </Parallax>
  </div>
  );
}

export default App;
