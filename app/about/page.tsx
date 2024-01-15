'use client'

import Link from "next/link"
import leftImage from '../assests/virtual-removebg-preview.png'
import stay from '../assests/usepic-removebg-preview.png'
import Image from 'next/image'

export default function Stream() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
    
          <div className='header'>
            <div className='h'>
              <h1 className='logo'>Virtual<span>lee</span></h1>
            </div>
              <div className='nav'>
              <Link href='/' className='link'>Home</Link>
              <Link href='/about' className='link'>About</Link>
                
                <Link href='/discover' className='link'>Latest news</Link>
              </div>
          </div>
          </div>

          <div className="about">
            <h1>About</h1>
            <div className="about__container">
              <div className="image__container">
              <Image src={leftImage} alt='image' />
              </div>
              <div className="about__text">
                <p>Welcome to Virtual<span>Lee</span>, your ultimate source for the latest news and updates on the captivating world of virtual reality (VR). 
                  Our platform is dedicated to keeping you informed about the groundbreaking advancements, immersive experiences, and emerging trends 
                  within the realm of VR. At  Virtual<span>Lee</span> , we understand the profound impact that virtual reality has on various industries, including gaming, entertainment, education, healthcare, and more. 
                  Our mission is to bridge the gap between technology enthusiasts and the transformative power of VR by delivering timely and engaging content.</p>
              </div>
            </div>

            <div className="about__container">
            
              <div className="about__text">
              <p>
        Stay Informed:
        We pride ourselves on delivering 
        up-to-the-minute news articles, expert analysis, and insightful interviews with industry leaders. 
        Whether you're a VR aficionado, a developer, or a curious newcomer, our website is designed to cater to all levels of interest. 
        We curate and cover a wide range of topics, including the latest VR hardware and software releases,
        updates on major VR platforms, game reviews, and previews, as well as coverage of VR events, conferences, and expos.</p>
              </div>
              <div className="image__container">
              <Image src={stay} alt='image' />
              </div>
            </div>

        
          </div>
      </main>
    )
  }