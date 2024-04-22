import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import { globalConfig } from '@/theme/globalConfig';
import { Box } from '@mui/material';

export default function SlideHome({datas}){

    return(
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {datas && datas?.data?.map(item => 
                    <SwiperSlide key={item.id}>
                        <Box
                            sx={{
                                'img': {
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }
                            }}
                        >
                            <Image
                                src={globalConfig.img_url + item?.attributes?.image?.data?.attributes?.url}
                                width={item?.image?.data?.attributes?.width || 1920}
                                height={item?.image?.data?.attributes?.height || 600}
                                alt="DKH Group Slide"
                            />
                        </Box>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}