import styles from "./services.module.scss"; 

const Services = () => {
    return (
        <section className={styles.services}>
            <div className={styles.services_wrapper}>
            {/* <h1 className={styles.services_title}>
            services
            </h1> */}
             <ul className={styles.services_list}>
                <li className={styles.services_card}> 
                  <div className={styles.services_card_content}>
                    <h3 className={styles.services_card_title}>digital</h3>
                    <div className={styles.services_card_text_wrapper}>
                    <li className={styles.services_card_text}>website</li >
                    <li  className={styles.services_card_text}>application</li>
                    </div>
                  </div>
                </li>
                <li className={styles.services_card}> 
                  <div className={styles.services_card_content}>
                    <h3 className={styles.services_card_title}>creative</h3>
                    <div className={styles.services_card_text_wrapper}>
                    <li className={styles.services_card_text}>brand identity</li>
                    <li className={styles.services_card_text}>production</li>
                    <li className={styles.services_card_text}>design system</li>
                    </div>
                  </div>
                </li>
                <li className={styles.services_card}> 
                  <div className={styles.services_card_content}>
                    <h3 className={styles.services_card_title}>business</h3>
                    <div className={styles.services_card_text_wrapper}>
                    <li className={styles.services_card_text}>product development</li>
                    <li className={styles.services_card_text}>strategy</li>
                    <li className={styles.services_card_text}>business recomendation</li>
                    <li className={styles.services_card_text}>custom solutions</li>
                    </div>
                  </div>
                </li>
             </ul>
		    </div>
        </section>
    )
}

export default Services 