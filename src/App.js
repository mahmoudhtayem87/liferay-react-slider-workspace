import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {request} from "./util/request";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export async function getSlides(url) {
  return request({
    method: 'get',
    url: `${url}?page=0`,
  });
}


function App({url,title,subtitle,image,action,actiontitle,height}) {

  const [slides,setSlides] = useState(null);

  useEffect(()=>{

    getSlides(url).then(result=>{

      setSlides(result.items);

    })

  },[])

  return (
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" navigation>
      {slides && slides.map(
          item=>
              <SwiperSlide>
                <div className="slideContainer" style={{backgroundImage:`url(${item[image].link.href})`, height:height}}>
                 <div className="caption-box">
                   <div className="slide-title">
                     {item[title]}
                   </div>
                   <div className="slide-sub-title">
                     {item[subtitle]}
                   </div>
                   <div className="call-to-action">
                     <a className="btn btn-primary" target="_blank" href={item[action]}>{actiontitle}</a>
                   </div>
                 </div>
                </div>
              </SwiperSlide>
      )}
      </Swiper>
  );
}

export default App;
