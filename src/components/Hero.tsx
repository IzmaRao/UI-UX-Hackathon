import Image from 'next/image'
import sofa from '../../public/Rocket single seater 1.png'
import Navbar from './Navbar';
function Hero() {
  return (
    <div className='hero overflow-x-hidden bg-[#FBEBB5] '>
      <Navbar/>
       <div className='hero-section mx-auto  '>

       <div className='hero-section-one space-y-[35px]'>
            <h1 className='hero-section-one-h font-medium'>Rocket single seater</h1>
            <p className='hero-section-one-p  font-medium border-b-2 border-black'>Shop Now</p>
        </div>
        <div className='hero-section-two-img '>
            <Image width={853} height={1000} src={sofa} alt=''/>
        </div>

       </div>
    </div>
  )
}

export default Hero;