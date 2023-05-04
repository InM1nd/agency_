import styles from './talk.module.scss'
import TALK from '../../../img/other/TALK.png'

const Talk = () => {
    return ( 
        <section className={styles.talk}>
            <div className={styles.talk_btn}>
                {/* <a href='/'><p className={styles.talk_btn_text}>Talk to us</p></a> */}
                <img className={styles.talk_img} src={TALK}/>
            </div>
          <div className={styles.talk_links}>
            <ul className={styles.talk_address_list}>
            <li className={styles.talk_address_link}><a className={styles.talk_address_link_link}href='/'>instagram</a></li>
            <li className={styles.talk_address_link}><a className={styles.talk_address_link_link} href='/'>behance</a></li>
            <li className={styles.talk_address_link}><a className={styles.talk_address_link_link}href='https://www.linkedin.com/company/oilfaces/'>linkedin</a></li>
        </ul>
        <address className={styles.talk_address}>
        {/* <p className={styles.footer_address_title}>contact</p> */}
        <ul className={styles.talk_address_list}>  
            <li className={styles.talk_address_link}><a className={styles.talk_address_link_link} href="mailto:hi@oilfaces.com">hello@oilfaces.com</a></li>
            <li className={styles.talk_address_link}><a className={styles.talk_address_link_link} href="tel:+31 999 999 ">+31 999 999</a></li>
        </ul>
        </address>
        </div>
        </section>
    )
}

export default Talk