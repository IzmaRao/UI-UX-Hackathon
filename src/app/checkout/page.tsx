import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar2'
import React from 'react'
import Productsafety from '@/components/Productsafety'
function page() {
  return (
    <div>
      <Navbar/>
        <Navbar2 name="Checkout" name1='Checkout'/>

        <div className='checkout'>
          
          <div className='checkout-main'>
          <form className='billing-details space-y-[36px]' action="">
            <h3 className='billing-details-h font-semibold'>Billing details</h3>
          
          <div className='billing-details-names '>
            <div className='billing-details-name space-y-[22px]'>
              <p>First Name</p>
              <input className='billing-details-name-input border-[1px] border-[#9F9F9F] rounded-lg' type="text" />
            </div>
            <div className='billing-details-name space-y-[22px]'>
              <p>Last Name</p>
              <input className='billing-details-name-input border-[1px] border-[#9F9F9F] rounded-lg' type="text" />
            </div>
          </div>

          <div className='billing-details-div space-y-[22px] '>
            <p>Company Name (Optional)</p>
            <input className='billing-details-input border-[1px] border-[#9F9F9F] rounded-lg' type="text" />
          </div>
          <div className='billing-details-div space-y-[22px]'>
            <p>Country / Region</p>
            <select  className='billing-details-input border-[1px] border-[#9F9F9F] rounded-lg' name="" id="">
              <option value="">Sri Lanka</option>
              <option value="">Sri Lanka</option>
              <option value="">Sri Lanka</option>
              <option value="">Sri Lanka</option>
            </select>
            
          </div>
          <div className='billing-details-div space-y-[22px]'>
            <p>Street Address</p>
            <input className='billing-details-input border-[1px] border-[#9F9F9F] rounded-lg' type="text" />
          </div>
          <div className='billing-details-div space-y-[22px]'>
            <p>Town / City</p>
            <input className='billing-details-input border-[1px] border-[#9F9F9F] rounded-lg' type="text" />
          </div>
          <div className='billing-details-div space-y-[22px]'>
            <p>Province</p>
            <select className='billing-details-input border-[1px] border-[#9F9F9F] rounded-lg' name="" id="">
              <option value="">Western Province</option>
              <option value="">Eastern Province</option>
              <option value="">Southern Province</option>
              <option value="">Northen Province</option>
            </select>
          </div>
          <div className='billing-details-div space-y-[22px]'>
            <p>Zip Code</p>
            <input className='billing-details-input border-[1px] border-[#9F9F9F] rounded-lg' type="text" />
          </div>
          <div className='billing-details-div space-y-[22px]'>
            <p>Phone</p>
            <input className='billing-details-input border-[1px] border-[#9F9F9F] rounded-lg' type="text" />
          </div>
          <div className='billing-details-div space-y-[22px]'>
            <p>Email addresss</p>
            <input className='billing-details-input border-[1px] border-[#9F9F9F] rounded-lg' type="text" />
          </div>
          
          <div>
            <input placeholder='Additional Information' className='billing-details-input mt-4 border-[1px] border-[#9F9F9F] rounded-lg text-base ' type="text" />
          </div>
          </form>

          <div className='checkout-product'>
          <div className="checkout-product-pricing 2xl:space-y-[32px]   space-y-[22px]">
            <div className='checkout-product-pricing-product-total font-medium'>
              <h3>Product</h3>
              <h3>Subtotal</h3>
            </div>
            <div className='checkout-product-pricing-product'>
              <p className='text-[#9f9f9f]'>Asgaard sofa 1 X 1</p>
              <p className='font-light'>Rs. 250,000.00</p>
            </div>
            <div className='checkout-product-pricing-product'>
              <p>Subtotal</p>
              <p className='font-light'>Rs. 250,000.00</p>
            </div>
            <div className='checkout-product-pricing-product'>
              <p>Total</p>
              <p className='font-bold text-xl text-[#B88E2F]'>Rs. 250,000.00</p>
            </div>
          </div>

          <div className=' checkout-product-billing-methods-decription  2xl:space-y-[39px] space-y-[20px]'>
            <div className='flex gap-4 items-center pt-4'>
              <div className='w-[14px] h-[14px] rounded-full bg-black'></div>
              <p className='2xl:text-base text-sm'>Direct Bank Transfer</p>
            </div>
            <p className='checkout-product-billing-methods-decription-p  custom-mini:text-xs custom-mini:w-[290] font-light text-[#9f9f9f] 2xl:w-[528px] w-[400] text-sm custom-tiny:text-xs custom-tiny:w-[350] 2xl:text-base'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
            <div className='space-y-4 2xl:text-base text-sm custom-tiny:text-xs'>
            <div className='flex gap-4 items-center'>
            <div className='w-[14px] h-[14px] rounded-full border-[1px] border-gray-400'></div>
              <p className='font-medium text-[#9f9f9f]'>Direct Bank Transfer</p>
            </div>
            <div className='flex gap-4 items-center'>
            <div className='w-[14px] h-[14px] rounded-full border-[1px] border-gray-400'></div>
              <p className='font-medium text-[#9f9f9f]'>Cash On Delivery</p>
            </div>
            </div>
            <p className='checkout-product-billing-methods-decription-p 2xl:w-[529px] w-[400] 2xl:text-base text-sm font-light   custom-tiny:text-xs custom-tiny:w-[350] custom-mini:text-xs custom-mini:w-[290]'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-semibold'>privacy policy.</span></p>
            <div className='2xl:pl-28 pl-20 w-[509px]'>
            <button className=' mt-[39px] custom-tiny:mt-5 custom-mini:mt-5 checkout-product-billing-btn border-[1px] border-black rounded-[15px]'>Place Order</button>
            </div>
          </div>
          
          </div>


        </div>
          </div>

          <Productsafety/>
    </div>
  )
}

export default page;