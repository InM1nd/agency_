import React, { useRef, useEffect } from 'react';

import LOGO from '../../../img/other/MAIN_PIC.jpg'
import ROFL from '../../../img/other/555.jpg'
import styles from './head.module.scss'


const Head = () => {
  return (
    <section className={styles.main}>
      <div className={styles.main_services}>
      <picture className={styles.main_logo_img}>
        <source media="(max-width: 550px)" srcset={ROFL} />
        <img className={styles.main_logo_img} src={LOGO}/>
      </picture>
      </div>
    </section>
  );
};

export default Head;