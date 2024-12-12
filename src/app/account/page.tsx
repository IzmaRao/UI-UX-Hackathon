import Navbar from '@/components/Navbar';
import Productsafety from '@/components/Productsafety'
import Navbar2 from '@/components/Navbar2';

function Account() {
  return (
    <div>
      <Navbar/>
      <Navbar2 name='Account' name1='My Account'/>
      <div className='forms'>

        <form className='login-form space-y-[36px]' action="">
          <h1 className='login-form-h font-semibold'>Log In</h1>

          <div>
            <p className='font-medium'>Username or email address</p>
            <input className='login-form-input-name' type="text" />
          </div>
          <div>
            <p className='font-medium'>Password</p>
            <input className='login-form-input-name' type="password" />
          </div>
          <div className='login-form-input-radio' >
            <input className='h-4 w-4' type="radio" />
            <p>Remember me</p>
          </div>
          <div className='login-form-btns '>
            <button className='login-form-btn-one rounded-[15px] border-[1px] border-black'>Log In</button>
            <button className="login-form-btn-one text-center">Lost Your Password?</button>
          </div>
        </form>



        <form className='login-form space-y-[36px]' action="">
          <h1 className='login-form-h font-semibold'>Register</h1>

          <div>
            <p className='font-medium'>Email address</p>
            <input className='login-form-input-name' type="text" />
          </div>
          <div className='login-form-p custom-tiny:w-[290px] custom-tiny:text-sm custom-mini:w-[290px] custom-mini:text-sm'>
            <p>A link to set a new password will be sent to your email address.</p>
            <br />
            <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy</b>.</p>
          </div>
            <button className='login-form-btn-one rounded-[15px] border-[1px] border-black'>Register</button>
        </form>

      </div>

      <Productsafety/>
    </div>
  )
}

export default Account;