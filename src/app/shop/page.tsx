import Navbar2 from '../../components/Navbar2';
import Navbar from '../../components/Navbar';
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import circles from '../../../public/ci_grid-big-round.png';
import list from '../../../public/bi_view-list.png';
import Image from 'next/image';
import Link from 'next/link';
import Productsafety from '../../components/Productsafety';

interface Data {
  id: number;
  name: string;
  price: number;
  image: string; // Change to string for dynamic image URLs
  width: number;
  height: number;
}

async function Shop() {
  let data: Data[] = [];

  try {
    const response = await fetch('https://ui-ux-hackathon-xi.vercel.app/api/products/', { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    data = await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    // Optionally return an error UI or placeholder data
    return (
      <div>
        <Navbar />
        <p>Failed to load products. Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <div className='relative'>
        <Navbar />
        <Navbar2 name1="Shop" name="Shop" />
      </div>

      <div className='shop-section-one bg-[#f4f4f4]'>
        <div className='shop-section-one-div-one'>
          <HiOutlineAdjustmentsHorizontal />
          <p>Filter</p>
          <Image width={21.33} height={16.33} src={circles} alt="" />
          <Image width={21} height={19.5} src={list} alt="" />
          <p>|</p>
          <p>Showing 1-16 of 32 results</p>
        </div>

        <div className='shop-section-one-div-two'>
          <label className='shop-section-one-div-two-input space-x-[17px]'>
            <p className='shop-section-one-div-two-input-p'>Show</p>
            <input className='shop-section-one-div-two-inputt w-[55] h-[55] text-center' type="text" placeholder='16' />
          </label>
          <label className='shop-section-one-div-two-input-two space-x-[17px]'>
            <p className='shop-section-one-div-two-input-p'>Sort by</p>
            <input className='shop-section-one-div-two-input-two-p' type="text" placeholder='Default' />
          </label>
        </div>
      </div>

      <div className='shop-section-two space-y-[15px] mx-auto'>
        {data.map((product) => (
          <div key={product.id} className='shop-section-two-item'>
            <Link href={`/products/${product.id}`}>
              <div className='shop-section-two-item-one bg-white'>
                <Image height={product.height} width={product.width} src={product.image} alt={product.name} />
              </div>
              <div className='shop-section-two-item-two space-y-3'>
                <p className='shop-section-two-item-two-p'>{product.name}</p>
                <p className='shop-section-two-item-two-pp font-medium'>${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Productsafety />
    </div>
  );
}

export default Shop;
