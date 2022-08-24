import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from 'next/image';
import noImage from './../../public/images/noimage.jpeg';

const SwiperView = ({data}) => {
    return (
            <Swiper
                spaceBetween={5}
                slidesPerView={4}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
            >
                {data?.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <Image
                                alt='slide'
                                width='350'
                                height='200'
                                src={item.image || noImage}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        )

}

export default SwiperView