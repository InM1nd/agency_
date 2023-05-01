import styles from './footer.module.scss'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className={styles.footer}>
        <div className={styles.footer_info}>    
            <ul className={styles.footer_menu}>
                <li className={styles.footer_menu_link}><Link className={styles.footer_menu_link_text} to="/agency_/services">Services</Link></li>
                <li className={styles.footer_menu_link}><Link className={styles.footer_menu_link_text}  to="/agency_/projects">Our work</Link></li>
                <li className={styles.footer_menu_link}><Link className={styles.footer_menu_link_text} to="/agency_/about">About us</Link></li>
                <li className={styles.footer_menu_link}><Link className={styles.footer_menu_link_text} to="/agency_/greet">Say hi</Link></li>
            </ul>

        </div>
        </div>
    )
}

export default Footer 