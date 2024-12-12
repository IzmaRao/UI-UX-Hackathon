import Navbar from '@/components/Navbar';
import Productsafety from '@/components/Productsafety'
import Navbar2 from '@/components/Navbar2';
import Image from 'next/image';
import sofa from '../../../public/Asgaard sofa 4.png';
import { RiDeleteBin7Fill } from "react-icons/ri";
import Link from 'next/link';
function Cart() {
  return (
    <div>
    <Navbar/>
    <Navbar2 name='Cart' name1='Cart'/>

    <div className='cart'>
      <div className='cart-productdetails space-y-[40px]'>

        <div className="cart-productdetails-header font-medium bg-[#FFF9E5]">
          <div className='cart-productdetails-header-pricing'>
          <p>Product</p>
          <p>Price</p>
          </div>
          <div className='cart-productdetails-header-magnitude'>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>

        <div className='cart-product'>
          <div className='cart-product-img bg-[#FBEBB5] rounded-lg'>
          <Image src={sofa} alt='sofa'/>
          </div>
          <p>Asgaard Sofa</p>
          <p>Rs. 250,000.00</p>
          <div className='border-[1px] rounded-md py-1 text-center h-8 w-8 border-black'>1</div>
          <p>Rs. 250,000.00</p>
          <div>
            <RiDeleteBin7Fill size={21} color='#FBEBB5'/>
          </div>
        </div>

      </div>

      <div className='cart-total bg-[#FFF9E5] font-medium space-y-[61px] custom-md:space-y-[30px] custom-sm:space-y-[30px] custom-xs:space-y-[30px] custom-xxs:space-y-[32px] custom-tiny:space-y-[31px] custom-mini:space-y-[21px]'>
        <h3 className='cart-total-h'>Cart Totals</h3>
        <div className='space-y-[48px] custom-md:space-y-[30px] custom-sm:space-y-[30px] custom-xs:space-y-[30px] custom-xxs:space-y-[32px] custom-tiny:space-y-[31px] custom-mini:space-y-[21px]'>
        <div className='space-y-[31px]  custom-md:space-y-[30px] custom-sm:space-y-[20px] custom-xs:space-y-[20px] custom-xxs:space-y-[22px] custom-tiny:space-y-[21px] custom-mini:space-y-[21px]'>
        <div className='cart-total-subtotal '>
          <p>Subtotal</p>
          <p className='text-[#9F9F9F]'>Rs 250,000.00</p>
        </div>
        <div className='cart-total-subtotal '>
          <p>Total</p>
          <p className='text-[#B88E2F]'>Rs 250,000.00</p>
        </div>
        </div>
        <button className='cart-total-btn'><Link href="../checkout">Check Out</Link></button>
        </div>
      </div>
    </div>
    <Productsafety/>
    </div>
  )
}

export default Cart;