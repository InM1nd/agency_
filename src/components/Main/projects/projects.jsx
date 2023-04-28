import styles from './projects.module.scss'
import PROJECT from '../../../img/other/PROJECT.png'
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
        <div className={styles.projects_content}>
            {/* <h1 className={styles.projects_title}>Featured</h1> */}
            {/* <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
            </div>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <h2 className={styles.projects_describ_title}>SKEPTIK
                <p className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</p>
                </h2>
              </div>
              <div className={styles.projects_describ_arrow_wrapper}>
                <a  href='/'><img className={styles.projects_describ_arrow} src={ARROW}/></a>
              </div>
            </div>
         */}

            <Swiper className={styles.swiper_projects}
                  modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode]}
                  spaceBetween={30}
                  slidesPerView={1}
                  freeMode={true}
                  breakpoints={{
                    0 :{
                      slidesPerView:1,
                      spaceBetween: 10,
                    },

                    550 :{
                      slidesPerView:1,
                      spaceBetween: 10,
                    },

                    768 :{
                      slidesPerView:1,
                      spaceBetween: 20,
                    },

                    1024 :{
                      slidesPerView:2,
                      spaceBetween: 50,
                    },
                  }}
                  onSlideChange={() => console.log('slide change')}
                  onSwiper={(swiper) => console.log(swiper)}
                >
                  <SwiperSlide>
                    <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
            </div>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <h2 className={styles.projects_describ_title}>SKEPTIK
                <p className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</p>
                </h2>
              </div>
            </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
            </div>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <h2 className={styles.projects_describ_title}>SKEPTIK
                <p className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</p>
                </h2>
              </div>
            </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
            </div>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <h2 className={styles.projects_describ_title}>SKEPTIK
                <p className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</p>
                </h2>
              </div>
            </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
            </div>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <h2 className={styles.projects_describ_title}>SKEPTIK
                <p className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</p>
                </h2>
              </div>
            </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
            </div>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <h2 className={styles.projects_describ_title}>SKEPTIK
                <p className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</p>
                </h2>
              </div>
            </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
                    <div className={styles.projects_wrapper}>
                    <div className={styles.projects_img_border}>
                <img className={styles.projects_img} src={PROJECT} alt='PROJECT'/>
            </div>
            <ul className={styles.projects_filter}>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>naming</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>strategy</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>communication</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>website</button></li>
                <li className={styles.projects_filter_button}><button className={styles.projects_filter_btn}>branding</button></li>
            </ul>
            <div className={styles.projects_describ}>
              <div className={styles.projects_describ_text}>
                <h2 className={styles.projects_describ_title}>SKEPTIK
                <p className={styles.projects_describ_info}>CREATING A PRACTICAL FITNESS PLATFORM</p>
                </h2>
              </div>
            </div>
            </div>
            </SwiperSlide>

            
             
              </Swiper>

        </div>
      </section>
      
    )
  }
  
  export default Projects