
import LeftSidePanel from '../LeftSidePanel/LeftSidePanel'

const LoginPages = () => {
  return (
    <div className='bg-[#f5f4f0] min-h-screen w-full overflow-x-hidden'>
      <div className='flex flex-col lg:flex-row'>
        <LeftSidePanel />
        <main className='flex flex-1 w-full justify-center items-center px-4 py-8 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20'>
          <div className='bg-white max-w-[480px] rounded-2xl border border-[#dfded9] p-5 shadow-[0_12px_35px_rbga(0,0,0,0,0.86)] sm:p-7 md:p-8 lg:p-9'>
            <div className='mb-7 sm:mb-8'>
              <div>
                <h1 className='font-serif text-3xl font-normal text-[#20201f] sm:text-4xl'>Welcome Back</h1>
              </div>
              <div>
                <p className='text-sm text-[#777771] mt-2'>Login to your admin account</p>
              </div>
            </div>
            <form>
              <div className='mb-5'>
                <label className='mb-2 block text-sm font-semibold text-[#272725]'>Email Address</label>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 sm:left-4'>✉</span>
                  <input className='h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11' type="text" placeholder='admin@example.com' />
                </div>
                <label className='mb-2 block text-sm font-semibold text-[#272725]'>Password</label>
                <div className='relative'>
                  <span className='absolute left-3 top-1/2 -translate-y-1/2 sm:left-4'>🔒</span>
                  <input className='h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11' type="text" placeholder='Enter your password' />
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='flex items-center justify-center gap-2'>
                <input type="checkbox" id='rememberMe'className='size-4' />
                <label className='text-sm text-gray-700' htmlFor='rememberMe'>Remember Me</label>
                </div>
                <a className='text-sm text-blue-900 italic ' href="">Forgot Password?</a>
              </div>
              <div>
                <button>Login</button>
              </div>
            </form>
            <div>
              <div></div>
              <div>OR</div>
              <div></div>
            </div>
            <div>
              <span>Don't have an account? </span>
              <a href="">Create Account</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginPages
