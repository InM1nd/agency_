import styles from './projects.module.scss'
import PROJECT from '../../../img/other/PROJECT.png'
import Teple from '../../../img/other/123.jpg'
// import ARROW from '../../../img/other/ARROW.png'
import ARROW from '../../../img/other/9TR5GzG5c.gif'

import { Navigation, Pagination, Scrollbar, A11y,FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';



const Projects = () => {
    return (
      <section className={styles.projects}>
        
            <Swiper className={styles.swiper_projects}
                  modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
                  spaceBetween={30}
                  slidesPerView={1}
                  // freeMode={true}
                  direction={"horizontal"}
                  breakpoints={{

                    1024 :{
                      slidesPerView:2.05,
                      spaceBetween: 50,
                      direction:"horizontal",
                    },
                    768 :{
                      slidesPerView:1.1,
                      spaceBetween: 40,
                      direction: "horizontal",
                    },

                    550 :{
                      slidesPerView:1.1,
                      spaceBetween: 40,
                      direction: "horizontal",
                    },

                    500 :{
                      slidesPerView:1.1,
                      spaceBetween: 40,
                      direction: "horizontal",
                    },

                    0 :{
                      slidesPerView:1.1,
                      spaceBetween: 30,
                      // direction: "vertical",
                    },
                    
  
                  }}
                  
                >
                  
              <SwiperSlide>
                  <div className={styles.projects_wrapper}>
                    {/* <div className={styles.projects_wrapper_img}> */}
                    <div className={styles.projects_img_border}>
                      <img className={styles.projects_img} src={Teple} alt='PROJECT'/>
                    </div>
                    {/* </div> */}
            <div className={styles.projects_filter}>
                <a className={styles.projects_filter_button}>branding</a>
                <a className={styles.projects_filter_button}>product dev</a>
                <a className={styles.projects_filter_button}>communication</a>
                <a className={styles.projects_filter_button}>strategy</a> 
                <a className={styles.projects_filter_button}>custom solution</a>         
            </div >
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <div  className={styles.projects_describ_title}>SKEPTIK
                <div  className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</div >
                </div >
              </div>
            </div>
            </div>

            </SwiperSlide>

            <SwiperSlide>
                  <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                      <img className={styles.projects_img} src={Teple} alt='PROJECT'/>
                  </div>
            <div className={styles.projects_filter}>
            <a className={styles.projects_filter_button}>branding</a>
                <a className={styles.projects_filter_button}>product dev</a>
                <a className={styles.projects_filter_button}>communication</a>
                <a className={styles.projects_filter_button}>strategy</a> 
                <a className={styles.projects_filter_button}>custom solution</a>        
            </div >
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <div  className={styles.projects_describ_title}>OILFACES </div >
                <div  className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</div >
              </div>
            </div>
            </div>

            </SwiperSlide>

            <SwiperSlide>
                  <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={Teple} alt='PROJECT'/>
                  </div>
            <div className={styles.projects_filter}>
            <a className={styles.projects_filter_button}>branding</a>
                <a className={styles.projects_filter_button}>product dev</a>
                <a className={styles.projects_filter_button}>communication</a>
                <a className={styles.projects_filter_button}>strategy</a> 
                <a className={styles.projects_filter_button}>custom solution</a>         
            </div >
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <div  className={styles.projects_describ_title}>SKEPTIK
                <div  className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</div >
                </div >
              </div>
            </div>
            </div>

            </SwiperSlide>

            <SwiperSlide>
                  <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={Teple} alt='PROJECT'/>
                  </div>
            <div className={styles.projects_filter}>
            <a className={styles.projects_filter_button}>branding</a>
                <a className={styles.projects_filter_button}>product dev</a>
                <a className={styles.projects_filter_button}>communication</a>
                <a className={styles.projects_filter_button}>strategy</a> 
                <a className={styles.projects_filter_button}>custom solution</a>         
            </div >
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <div  className={styles.projects_describ_title}>SKEPTIK
                <div  className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</div >
                </div >
              </div>
            </div>
            </div>

            </SwiperSlide>
             
              </Swiper>

            

        
      </section>
      
    )
  }
  
  export default Projects