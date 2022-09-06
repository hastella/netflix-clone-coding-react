import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import '../css/swiper-bundle.css';
import MovieCard from './MovieCard';
import RankCard from './RankCard';
import RankCard2 from './RankCard2';
import data from '../data/data.json';

function MovieSlider() {

  // const { awards, comedy, popular } = useSelector (
  //   (state) => state.data
  // );

  // useEffect(() => {
    
  // }
  // const [slideNumber, setSlideNumber] = useState(0);
  // const listRef = useRef();

  // const handleClick = (direction) => {
  //   let distance = listRef.current.getBoundingClientRect().x - 50;
  //   if (direction === "left" && slideNumber > 0) {
  //     setSlideNumber(slideNumber - 1);
  //     listRef.current.style.transform = `translateX(${1000 + distance}px)`;
  //   }
  //   if (direction === "right" && slideNumber < 5) {
  //     setSlideNumber(slideNumber + 1);
  //     listRef.current.style.transform = `translateX(${-1000 + distance}px)`;
  //   }
  // };

  // const navigationPrevRef = React.useRef(null)
  // const navigationNextRef = React.useRef(null)

  return (
    <div className = "swiper">
       <h1>지금 뜨는 콘텐츠</h1>
      <Swiper
        // ref={listRef}
        slidesPerView={5.4}
        spaceBetween={5}
        slidesPerGroup={5.4}
        // centeredSlides={true}
        // loop={true}
        // loopFillGroupWithBlank={true}
        navigation = {true}
        modules={[Navigation]}
        className="swiper-wrapper"
      >
        {data.popular.map((item) => (
        <SwiperSlide>
            <MovieCard item = {item}/>
        </SwiperSlide>
        ))}
          {/* <div ref={navigationPrevRef} className ="swiper-button-prev" onClick = {() => handleClick("left")}/>
          <div ref={navigationNextRef} className ="swiper-button-next" onClick = {() => handleClick("right")}/> */}
      </Swiper>
      <h1>어워드 수상! 감명을 주는 시리즈</h1>
      <Swiper
        slidesPerView={5.4}
        spaceBetween={5}
        slidesPerGroup={5.4}
        // centeredSlides={true}
        // loop={true}
        // loopFillGroupWithBlank={true}
        navigation = {true}
        modules={[Navigation]}
        className="swiper-wrapper"
      >
        {data.awards.map((item) => (
        <SwiperSlide>
            <MovieCard item = {item}/>
        </SwiperSlide>
        ))}
          {/* <div ref={navigationPrevRef} className ="swiper-button-prev"/>
          <div ref={navigationNextRef} className ="swiper-button-next"/> */}
      </Swiper>
      <h1>오늘 대한민국의 Top 10시리즈</h1>
      <Swiper
        slidesPerView={5.4}
        spaceBetween={5}
        slidesPerGroup={5.4}
        // centeredSlides={true}
        // loop={true}
        // loopFillGroupWithBlank={true}
        navigation = {true}
        modules={[Navigation]}
        // className="swiper-wrapper"
      >
        <SwiperSlide>
          <RankCard/>
        </SwiperSlide>
      </Swiper>
      <h1>코미디 시리즈</h1>
      <Swiper
        slidesPerView={5.4}
        spaceBetween={5}
        slidesPerGroup={5.4}
        // centeredSlides={true}
        // loop={true}
        // loopFillGroupWithBlank={true}
        navigation = {true}
        modules={[Navigation]}
        className="swiper-wrapper"
      >
        {data.comedy.map((item) => (
        <SwiperSlide>
            <MovieCard item = {item}/>
        </SwiperSlide>
        ))}
          {/* <div ref={navigationPrevRef} className ="swiper-button-prev"/>
          <div ref={navigationNextRef} className ="swiper-button-next"/> */}
      </Swiper>
      <h1>오늘 대한민국의 Top 10영화</h1>
      <Swiper
        slidesPerView={5.4}
        spaceBetween={5}
        slidesPerGroup={5.4}
        // centeredSlides={true}
        // loop={true}
        // loopFillGroupWithBlank={true}
        navigation = {true}
        modules={[Navigation]}
        // className="swiper-wrapper"
      >
        <SwiperSlide>
          <RankCard2/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default MovieSlider;

//   return (
//     <>
//     {/* <div className="containerClass"> */}
//       <h1>어워드 수상! 감명을 주는 시리즈</h1>
//       {/* <div className = "sliderClass"> */}
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//           <Carousel.Item>
//               {data.awards.map((item) => (
//               <MovieCard item = {item}/>
//               // <img src = {url.url} key = {url.id}/>
//             )
//             )}
//         </Carousel.Item>
//       </Carousel>
//       {/* </div>
//         <h1>몰아보기 추천 해외 시리즈</h1>
//         <MovieSlider />
//       <h1>코미디 시리즈</h1>
//       <div className = "sliderClass">
//         <Carousel 
//           responsive={responsive}
//           infinite={true}
//           centerMode={true}
//           className="itemClass"
//         >
//             {data.comedy.map((item) => (
//             <MovieCard item = {item}/>
//             <img src = {url.url} key = {url.id}/>
//           )
//           )} 
//         </Carousel>
//       </div>
//     </>

//   )
// }

// export default MovieSlider;