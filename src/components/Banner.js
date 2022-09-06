import React from 'react'

const Banner = () => {
  return (
    <div>
        <section>
            <div>
                <img className="hero static-image image-layer" src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaxC367XRGbQ7s_MYfqISXHhtLf4verEGdpEsbqDvBYcKj5emgPTEMKtu42Xl_K-8RzBe4xvS788gH9L0Dat_Lt6XPoj8gKQaIC4.webp?r=9b9" alt=""/>           
                <div className="hero_background_left_gradient"></div>
                <div className="hero_background_gradient"></div>
            </div>
            <div className="hero_left">
                <img alt="서울대작전" className="hero_left_logo" src="https://occ-0-4796-993.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQwKOcIyZC8OoPZ9h-zxCuxBm8aA54mtaAo3PhX3hBM_hYlOlumE287lYS3lIQ4ab8l6yeSPA04hZzeGjeG2VuTd6lyhu0ddZNiCB2VL59dhWNnbwbQq17vxQCxbmExIC9IPO8v6O2hVJdYLnPdRe0hFOHuEIkPLD1liEu58yNi4aKDeT17dDg.webp?r=219" title="서울대작전"/>
                <div className="hero_left_bottom">
                    <div className="hero_left_text">
                        <h1>오늘 영화 순위 1위</h1>
                            <p>1988년 서울올림픽을 앞두고, 드라이버와 정비 전문가 등이 모인 팀이 특수</p>
                            <p>위장 작전에 투입된다. 작전의 목표는 대규모 돈세탁 조직의 실체를 밝히고</p>
                            <p>와해하는 것.</p>
                    </div>
                    <div className="hero_left_buttons d-flex align-items-center">
                        <button className="play_button">
                            <div className = "play">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg>
                                <span>재생</span>
                            </div>
                        </button>
                        <span>
                            <button className="info_button">
                                <div>
                                    <svg className="info_icon Hawkins-Icon Hawkins-Icon-Standard" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                                    </svg> 
                                    <span>상세 정보</span>
                                </div>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="hero_right">
                <div className="maturity_graphic">
                    <svg className="maturity_graphic_icon svg-icon svg-icon-maturity-rating-977" id="maturity-rating-977" viewBox="0 0 100 100"><path id="Fill---Orange" fill="#CD6D34" d="M88.727 100H11.27C5.05 100 0 94.952 0 88.727V11.273C0 5.047 5.05 0 11.27 0h77.457C94.952 0 100 5.047 100 11.273v77.454C100 94.952 94.952 100 88.727 100"></path><path id="15" fill="#FFFFFE" d="M36.876 15.482v68.651H21.509v-49.51h-5.484l7.097-19.141h13.754zm45.46 0V28.87H57.175v10.063h24.08c.845 0 1.533.687 1.533 1.534v42.13c0 .845-.688 1.532-1.534 1.532H43.616a1.533 1.533 0 01-1.533-1.533V62.202H57v8.988h10.874V52.052h-25.79v-36.57h40.254z"></path></svg>            
                </div>
            </div>
        </section>
    </div>
  )
}

export default Banner;