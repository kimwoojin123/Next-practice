'use client';
import styles from './page.module.css'
import { useState} from 'react';


export default function Home() {
  const [section, setSection] = useState('');

  const nameClick = (targetSection) => {
    setSection(targetSection);
    window.location.hash = `#${targetSection}`;
  };

  return (
    <main className={styles.main}>
      <div className={styles.head}>
        <ul>
        <li onClick={() => nameClick('kim')}>김우진</li>
          <li onClick={() => nameClick('bang')}>방승희</li>
          <li onClick={() => nameClick('jung')}>정영식</li>
          <li onClick={() => nameClick('choi')}>최성민</li>
        </ul>
      </div>
      <div className={styles.board}>
        <div id="kim" style={{ display: section === 'kim' ? 'block' : 'none' }}>김우진 섹션</div>
        <div id="bang" style={{ display: section === 'bang' ? 'block' : 'none' }}>방승희 섹션</div>
        <div id="jung" style={{ display: section === 'jung' ? 'block' : 'none' }}>정영식 섹션</div>
        <div id="choi" style={{ display: section === 'choi' ? 'block' : 'none' }}>최성민 섹션</div>
      </div>
    </main>
  )
}
