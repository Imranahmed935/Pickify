import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import pic1 from '../../assets/slider/pic5.avif'
import pic2 from '../../assets/slider/pic4.avif'
import pic3 from '../../assets/slider/pic6.avif'
import pic4 from '../../assets/slider/pic1.jpg'
const Banner = () => {
    return (
        <div className="w-full lg:h-[500px] px-2">
            <Swiper
                modules={[EffectFade, Navigation, Autoplay]}
                effect="fade"
                navigation
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="h-full"
            >
                <SwiperSlide>
                    <img
                        src={pic1}
                        alt="Slide 1"
                        className="w-full h-full  bg-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={pic2}
                        alt="Slide 2"
                        className="w-full h-full bg-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={pic3}
                        alt="Slide 3"
                        className="w-full h-full  bg-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={pic4}
                        alt="Slide 3"
                        className="w-full h-full bg-center"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
