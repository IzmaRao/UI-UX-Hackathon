import Navbar2 from '../../components/Navbar2'
import Navbar from '../../components/Navbar'
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import circles from '../../../public/ci_grid-big-round.png';
import list from '../../../public/bi_view-list.png'
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Productsafety from '../../components/Productsafety'

interface Data{
  id: number,
  name: string,
  price: number,
  image: StaticImageData,
  width: number,
  height: number
}

async function Shop() {
  const response = await fetch('https://ui-ux-hackathon-xi.vercel.app/api/products/', { cache: "no-store"});
  const data: Data[] = await response.json();
  console.log("params ==>", data)
  return (
    <div>
      <div className='relative'>
      <Navbar/>
      <Navbar2 name1="Shop" name="Shop"/>
      </div>

      <div className='shop-section-one  bg-[#f4f4f4] '>
        <div className='shop-section-one-div-one '>
          <HiOutlineAdjustmentsHorizontal/>
          <p>Filter</p>
          <Image width={21.33} height={16.33} src={circles} alt=""/>
          <Image width={21} height={19.5} src={list} alt=""/>
          <p>|</p>
          <p>Showing 1-16 of 32 results</p>
        </div>

        <div className='shop-section-one-div-two '>
          <label className='shop-section-one-div-two-input space-x-[17px]'>
            <p className='shop-section-one-div-two-input-p'>Show</p>
            <input className='shop-section-one-div-two-inputt w-[55] h-[55] text-center' type="text" placeholder='16' />
          </label>
          <label className='shop-section-one-div-two-input-two  space-x-[17px]'>
            <p className='shop-section-one-div-two-input-p'>Short by</p>
            <input className='shop-section-one-div-two-input-two-p' type="text" placeholder='Default' />
          </label>
        </div>

      </div>

      
      

      <div className='shop-section-two  space-y-[15px] mx-auto '>

            {data.map((product) => (
                <div key={product.id} className='shop-section-two-item  ' >
                <Link href={`./products/${product.id}`}>
                    <div className='shop-section-two-item-one  bg-white '>
                        <Image height={product.height} width={product.width} src={product.image} alt="img"/>
                    </div>
                    <div className='shop-section-two-item-two space-y-3'>
                        <p className='shop-section-two-item-two-p '>{product.name}</p>
                        <p className='shop-section-two-item-two-pp font-medium '>{product.price}</p>
                    </div>
                </Link>
                </div>
            ))}

        </div>
        
        <div className='shop-section-three space-x-[38px] font-light'>
          <div className='shop-section-three-one rounded-[10px] bg-[#FBEBB5] '><p>1</p></div>

          <div className='shop-section-three-one rounded-[10px] bg-[#FFF9E5] '><p>2</p></div>

          <div className='shop-section-three-one rounded-[10px] bg-[#FFF9E5] '><p>3</p></div>

          <div className='shop-section-three-next rounded-[10px] bg-[#FFF9E5]'><p>Next</p></div>
        </div>




      <Productsafety/>

    </div>
  )
}

export default Shop;
