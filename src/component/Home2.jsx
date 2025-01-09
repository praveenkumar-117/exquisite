import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import { gsap, Power2 } from 'gsap';
import Navbar from './Navbar';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FaPeopleGroup } from "react-icons/fa6";
import { ImProfile } from "react-icons/im";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import Footer from './Footer';


const Home2 = () => {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const imgContainerRef = useRef(null);

  const handleMouseEnter = () => {
    setIsPlaying(true); videoRef.current.play();
  };
  const handleMouseLeave = () => {
    setIsPlaying(false); videoRef.current.pause();
  };
  const handleDivTouchStart = () => {
    document.getElementById('overlay').classList.add('touch-active');
  }
  const handleDivTouchEnd = () => {
    setTimeout(() => {
      document.getElementById('overlay').classList.remove('touch-active');
    }, 300);
  }


  useEffect(() => {
    // Initial position and size gsap.
    gsap.set("#topAnim", { right: '-25%', width: '20%', height: '4px' }) // Updated initial height to 2px
    // Animation sequence 
    gsap.set("#topIn h2", { opacity: 0, x: -600, })



    const tl1 = gsap.timeline()
      .to("#topAnim", { duration: 1, right: '40%', delay: 1, ease: Power2.easeInOut }) // Move to center 
      .to("#topAnim", { duration: 1, height: '100vh', ease: Power2.easeInOut }) // Expand height to full screen 
      .to("#topAnim", { duration: 1, width: '100vw', right: 0, ease: Power2.easeInOut })
      .to("#navAnim", { duration: 0.5, opacity: 1 })
      .to("#topIn", { duration: 0.5, opacity: 1, ease: Power2.easeInOut })
      .to("#topIn h2", { duration: 1, opacity: 1, x: 10, stagger: 0.8, ease: "power2.out" })

    const imgContainerWidth = imgContainerRef.current.scrollWidth;
    const visibleWidth = document.querySelector('.w-full').clientWidth;

    const imgTl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    imgTl.to(imgContainerRef.current, { x: -(imgContainerWidth - visibleWidth), duration: 20, ease:"linear" });

    const byocTl = gsap.timeline({ repeat: -1 });
    byocTl.to("#byoc", {
      x: "-140%", duration: 12, ease: "linear",
      onRepeat: () => gsap.set("#byoc", { x: "100%" })
    });



    return () => {
      tl1.kill();
      imgTl.kill();
      byocTl.kill();
    };


  }, []);

  return (
    <>



      <main className="relative w-full h-screen bg-black flex flex-col justify-center items-center overflow-hidden">

        <div id="topAnim" className="absolute bg-myGray animated-background2 z-10" >
          <div id="navAnim" className="opacity-0 w-full z-50"> <Navbar /> </div>

          <div id="topIn" className='opacity-0  text-black text-4xl md:text-6xl flex flex-col items-start px-20 justify-center h-full z-30'>
            <h2 className='flipv'>Let</h2>
            <h2 className='flipv'>The World</h2>
            <h2 className="flipv">Appreciate Your Work</h2>
          </div>
        </div>
      </main>

      <div className=' relative w-full h-fit animated-background2 z-0 overflow-hidden'>
        <div id="img-container" ref={imgContainerRef} className='flex py-10 z-10'>
          <img src="/1.jpg" alt="painter" style={{ width: '300px', height: '450px' }} className='mx-6 mt-16' />
          <img src="/2.jpg" alt="traveler" style={{ width: '300px', height: '450px' }} className='mx-10 mt-40' />
          <img src="/3.jpg" alt="craft" style={{ width: '500px', height: '300px' }} className='mt-32 mx-8' />
          <img src="/4.jpg" alt="photographer" style={{ width: '300px', height: '500px' }} className='mx-6 mt-12' />
          <img src="/5.jpg" alt="dancer" style={{ width: '400px', height: '400px' }} className='mx-8 mt-44' />
          <img src="/6.jpg" alt="singer" style={{ width: '350px', height: '400px' }} className='mx-6 mt-32' />
        </div>

        <div className=' absolute z-20 text-zinc-800 text-6xl md:text-8xl md:top-28 top-36 left-10 blend-mode'>
          Get Fueled
        </div>

        <div className=' absolute z-30 text-zinc-800 text-6xl md:text-8xl bottom-28 right-10 blend-mode'>
          By Your Fans
        </div>
      </div>


      <div className='animated-background2 flex-col'>

        <div id='abDiv' className='md:flex py-4 gap-4'>
          <img src="/ab.jpg" alt="" style={{ width: 'auto', height: '400px' }} md:style={{ width: '40%', height: '400px' }} className='rounded-md w-full pt-10 px-6' />
          <div className='md:px-24 px-12 py-16 flex-col items-center justify-center gap-8'>
            <h3 className='md:text-6xl text-4xl py-6'>"We create path to meet you with your admires."</h3>
            <p className=' text-xl md:text-2xl text-justify'>Exqusite provide platform where creators can turn their passion into a thriving community. Whether you're an artist, musician, writer, or any kind of creator, we're here to help you connect with your fans and get the support you deserve.</p>
          </div>
        </div>

        <div className='byoc relative w-full h-fit z-0 text-white overflow-hidden md:pt-16 py-8 rounded-t-2xl'>
          <div id="byoc" className='md:text-9xl text-6xl border-white text-nowrap'>
            Build Your Own Community Build Your Own Community
          </div>
        </div>


        <div className='animated-background2 flex flex-col '>
          <h3 className='text-center text-6xl py-6'>How it Works</h3>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper md:my-12 py-20"
          >
            <SwiperSlide>
              <div className='flex flex-col gap-2 items-center text-3xl px-6 pt-12'>
                <ImProfile className='text-6xl' />
                <h3>Create Your Page </h3>
                <p className='text-xl px-6 pt-'>Set up your profile, share your story, and let your creativity shine. </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='flex flex-col gap-2 items-center text-3xl px-6 pt-12'>
                <FaPeopleGroup className='text-6xl' />
                <h3>Engage with Fans</h3>
                <p className='text-xl px-6 pt-'>Connect with your supporters through exclusive content, updates, and more. </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className='flex flex-col gap-2 items-center text-3xl px-6 pt-12'>
                <FaMoneyBill1Wave className='text-6xl' />
                <h3>Receive Support</h3>
                <p className='text-xl px-6 pt-'>Fans can easily donate to help you continue doing what you love. </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className='vidContainer w-full md:h-screen relative'
          onTouchStart={handleDivTouchStart}
          onTouchEnd={handleDivTouchEnd}>

          <video id="video" ref={videoRef} src="/abc123.mp4" className={`w-full h-full object-cover ${isPlaying ? 'opacity-100' : 'opacity-0'}`} muted loop />
          <div id="overlay" className={`absolute top-0 left-0 w-full h-full ${isPlaying ? 'bg-opacity-0' : 'bg-opacity-50'} flex justify-center items-center transition-all duration-300`} >


            <button id="playButton" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="group border border-black relative m-1 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-transparent px-4 py-1 text-black font-semibold shadow-lg">
              <span className="absolute h-0 w-0 bg-black transition-all duration-300 ease-out group-hover:h-full group-hover:w-full"></span>
              <span className="relative group-hover:text-white ">Get Started</span>
            </button>

          </div>
        </div>

      </div>

      <Footer />

    </>


  )
}

export default Home2
