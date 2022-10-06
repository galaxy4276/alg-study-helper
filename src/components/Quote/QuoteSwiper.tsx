import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import { Quote } from '@src/components/Quote/Quote';


const Dot = <div className="w-[5px] h-[5px] rounded-full bg-amber-300"></div>;

export const QuoteSwiper: React.FC = () => {
  return (
    <Swiper
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      loop
    >
      <SwiperSlide>
        <Quote writer="Maxime Lagacé">
          Life is a mountain. Your goal is to find your path, not to reach the top.
        </Quote>
      </SwiperSlide>
      <SwiperSlide>
        <Quote writer="Washington Irving">
          Great minds have purposes, others have wishes.
        </Quote>
      </SwiperSlide>
    </Swiper>
  );
}