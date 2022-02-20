import React, { useState , useEffect, useRef} from 'react';
import './style.scss'

import BG from '@/asset/bg.jpg'
import { Applicatin } from '@/components/application'
import data from './data'
const datas = [data.slice(), data.slice(), data.slice(0,6)]
export const Desktop: React.FC = (props) => {

  const style = {
    backgroundImage: `url(${BG})`,
  }
  const [shake, setShake] = useState(false);
  const [apps, setApps] = useState(datas);
  const [x, setX] = useState(0);
  const [dur, setDur] = useState(0);
  const width = useRef(0)
  const storeX = useRef(0);
  const startTouchX = useRef(0);
  const page = useRef(0);

  const timer = useRef<NodeJS.Timeout>();
  const touchStart = (e: React.TouchEvent) => {
    timer.current = setTimeout(() => {
      setShake(true);
    }, 800)
    let touch = e.targetTouches[0]
    if (!touch) {
      return
    }
    startTouchX.current = touch.pageX
    storeX.current = x;
  }
  const touchMove = (e: React.TouchEvent) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    let touch = e.targetTouches[0]
    if (!touch) {
      return
    }
    const currentX = touch.pageX;
    const between = currentX - startTouchX.current;
    const newX = between + storeX.current
    setDur(0);
    if ( newX> 0) {
      setX(0)
    } else if (newX < - width.current * 2) {
      setX(-width.current * 2)
    }else {
      setX(between + storeX.current);
    }
  }
  const touchEnd = (e: React.TouchEvent) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    let touch = e.changedTouches[0]
    if(!touch) return
    const currentX = touch.pageX;
    const between = currentX - startTouchX.current;
    const threshold = 50;
    if (between > threshold &&  page.current> 0) {
      page.current--;
    } else if (between < -threshold && page.current < 2) {
      page.current++;
    }
    setDur(500);
    setX(-width.current * page.current);
  }
  const onClick = () => {
    if (shake) {
      setShake(false);
    }
  }
  const onDrag = () => {
    alert('drag')
  }
  useEffect(() => {
    width.current = document.getElementsByClassName('swiper-wrap')[0].clientWidth;
    console.log('client-width: ', width.current)
  },[])
  let swiperWrapStyle = {
    transform: 'translateX(' + x + 'px)',
    transitionDuration: dur+'ms'
  }
  return (
    <div className="desktop" style={style}>
      <div className="swiper-wrap"
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        onTouchMove={touchMove}
        onClick={onClick}
        onTouchCancel={touchEnd}
        onDrag={onDrag}
        style={swiperWrapStyle}
      >
        {apps.map((page, pageIndex) =>
          <div className='swiper-item' key={'page' + pageIndex}>
            {page.map((item, index) =>
              <Applicatin
                icon={item.icon}
                key={item.title}
                title={item.title}
                shake={shake}
                remove={() => { apps[pageIndex].splice(index, 1);setApps(apps)}}
              />
            )}
          </div>)}
      </div>
    </div>
  )
}