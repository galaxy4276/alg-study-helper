import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper';

import { Quote } from '@src/components/Quote/Quote';
import wiseSayingData from './wise-saying-data';


export const QuoteSwiper: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      effect="fade"
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      loop
      className="mb-10"
    >
      {
        wiseSayingData.map(wisdom => (
            <SwiperSlide>
              <Quote writer={wisdom[1]}>{wisdom[0]}</Quote>
            </SwiperSlide>
          )
        )
      }
    </Swiper>
  );
};
