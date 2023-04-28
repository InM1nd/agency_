import styles from './team.module.scss'
import TEAM from '../../../img/other/TEAM.png'

// import SANYA from '../../../img/other/SANYA.jpg'
// import KIRUHA from '../../../img/other/KIRUHA.png'
// import DEN from '../../../img/other/DEN.jpg'

const Team = () => {
    return ( 
        <section className={styles.team}>
            <div className={styles.team_section}>
                {/* <h1 className={styles.team_title}>
                    Core team
                </h1> */}
                {/* <ul className={styles.team_list}>
                    <li className={styles.team_card}>
                    <div className={styles.team_card_fill}>
                        <div className={styles.team_card_img}>
                        <img className={styles.team_card_img} src={SANYA}/> 
                        </div>
                        <div className={styles.team_card_fill_text}>
                            <h2 className={styles.team_card_name}>ALEX</h2>
                            <p className={styles.team_card_text}>WEB DEVELOPER</p>
                            <p className={styles.team_card_text}>CREATIVE CODER</p>
                        </div>
                    </div>
                    </li>
                    <li className={styles.team_card}>
                    <div className={styles.team_card_fill}>
                        <div className={styles.team_card_img}>
                        <img className={styles.team_card_img} src={DEN} /> 
                        </div>
                        <div className={styles.team_card_fill_text}>
                            <h2 className={styles.team_card_name}>DANIEL</h2>
                            <p className={styles.team_card_text}>COMMUNICATION</p>
                            <p className={styles.team_card_text}>PROJECT MANAGER</p>
                        </div>
                    </div>
                    </li>
                    <li className={styles.team_card}>
                    <div className={styles.team_card_fill}>
                        <div className={styles.team_card_pic}>
                        <img className={styles.team_card_img} src={KIRUHA} /> 
                        </div>
                        <div className={styles.team_card_fill_text}>
                            <h2 className={styles.team_card_name}>KYRYLO</h2>
                            <p className={styles.team_card_text}>STRATEGY</p>
                            <p className={styles.team_card_text}>DESIGN</p>
                        </div>
                    </div>
                    </li>
                </ul> */}

                <div className={styles.team_text}>
                    <div className={styles.team_text_paragraph}>Blue is perfect. It’s the most popular and the most relaxing colour. Blue is also the base of the color spectrum. No blue — no color: all other colors may be 
                    created only by mixing blue, red and green. Web is pure blue: from the first site by CERN till now. Why not to create another beatiful site?
                    </div>
                    <div className={styles.team_text_paragraph}> No blue — no color: all other colors may be created only by mixing blue, red and green. Web is pure blue: from the
                    first site by CERN till now. Why not to create another beatiful site?
                    </div>
                </div>
                <div className={styles.team_photo_wrapper}>
                    <img className={styles.team_photo} src={TEAM} />
                </div>
            </div>
        </section>
        )
    }
    
    export default Team