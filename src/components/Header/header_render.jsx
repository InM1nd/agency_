import styles from './header.module.scss'

import BUTTON from '../../img/other/LOGO 2.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className={styles.header}>
			<div className={styles.header_logo_wrapper} > 
			<Link className={styles.header_logo_link} to="/agency_"> 
				{/* <img className={styles.header_logo} src={BUTTON} /> */}

			 	oilfaces
			</Link>
			</div>
			<div className={styles.header_ticker_wrap_2}>
			<div className={styles.header_ticker_wrap}>
			<div className={styles.header_ticker}>
				<div className={styles.header_ticker_item}> creative collective </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> challenge the status quo </div>
				<div className={styles.header_ticker_item}> / </div>
				<div className={styles.header_ticker_item}> creative collective</div>
			</div>
			</div>		
			</div>
		</div>
    )
}

export default Header 