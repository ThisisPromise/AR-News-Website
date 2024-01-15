'use client'
import Image from 'next/image'
import logo from './assests/VR.jpg'
import Link from "next/link"



export default  function Home() {
  return (
    <main className="flex  flex-col  justify-between">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <section className='home'>
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
          <div className="container">      
             <div className='left'>
          <h1 className="logo">Virtual Lee</h1>
          <p> Be up to date in the world of virtual reality with Virtual<span>lee</span>.Your one-stop website for latest happenings in VR
          </p>
          <div className='disover'>
          <Link href='/discover' className='button'>Discover</Link>
          </div>
          </div>
          <div className='right'>
          <Image className='image'
      src={logo}
      alt="Picture of the author"
    />
          </div>
          </div>
 
        </section>

    </div>
    </main>
  )
}


