// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import SliderCard from './SliderCard';

const cardsContent = [
    {
        image: "https://i.ibb.co.com/WzFzKHc/tutor-4.jpg",
        title: "The best choice I made for self-development in a long time.",
        userName: "Justyna",
        tutorName: "Ash",
        language: "English",
    },
    {
        image: "https://i.ibb.co.com/c6SK6Py/tutor-3.jpg",
        title: "Learning a new language has never been this fun and effective!",
        userName: "Sophia",
        tutorName: "Liam",
        language: "Spanish"
    },
    {
        image: "https://i.ibb.co.com/ZBtK5w0/tutor-2.jpg",
        title: "Thanks to my tutor, I now feel confident speaking French.",
        userName: "Michael",
        tutorName: "Claire",
        language: "French"
    },
    {
        image: "https://i.ibb.co.com/1vHb20R/tutor-1.jpg",
        title: "A truly personalized and rewarding learning experience.",
        userName: "Emma",
        tutorName: "Yuki",
        language: "Japanese"
    }
]

const Slider = () => {
    return (
        <div className='container mx-auto'>
            <Swiper navigation={true} modules={[Navigation]} className="" loop={true} slidesPerView={1}>
                {
                    cardsContent.map((content, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <SliderCard  content={content}></SliderCard>
                            </SwiperSlide>
                        );
                    })
                }

            </Swiper>
        </div>
    );
};

export default Slider;