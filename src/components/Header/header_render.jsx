import styles from './header.module.scss'

import BUTTON from '../../img/other/BUTTON.png'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <div className={styles.header}>
			<Link to="/agency_" className={styles.header_logo}> 
				oilfaces
			</Link>
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