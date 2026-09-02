import { useState } from 'react'
import LeftSidePanel from '../LeftSidePanel/LeftSidePanel'
import { Link } from 'react-router-dom'

const LoginPages = () => {
  const [showPassword, setShowPassword] = useState(false)
const [email, setEmail] = useState('')
const [password, setpassword] = useState('')
  const handleSubmit = (e) =>{
    e.preventDefault();
    setEmail('')
    setpassword('')
  }

  return (
    <div className='bg-[#f5f4f0] min-h-screen w-full overflow-x-hidden'>
      <div className='flex min-h-screen flex-col lg:flex-row'>
        <LeftSidePanel type = "login" />

        <main className='flex flex-1 w-full justify-center items-center px-4 py-8 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20'>
          <div className='bg-white w-full max-w-[480px] rounded-2xl border border-[#dfded9] p-5 shadow-[0_12px_35px_rbga(0,0,0,0,0.86)] sm:p-7 md:p-8 lg:p-9'>

            <div className='mb-7 sm:mb-8'>
              <div>
                <h1 className='font-serif text-3xl font-normal text-[#20201f] sm:text-4xl'>Welcome Back</h1>
              </div>
              <div>
                <p className='text-sm text-[#777771] mt-2'>Login to your admin account</p>
              </div>
            </div>

            <form onSubmit={(e) =>{handleSubmit(e)}}>

              <div className='mb-5'>
                <div>
                  <label className='mb-2 block text-sm font-semibold text-[#272725]'>Email Address</label>
                  <div className='relative'>
                    <span className='absolute left-3 top-1/2 -translate-y-1/2 sm:left-4'>✉</span>
                    <input
                    value={email}
                    onChange={(e)=>{
                      setEmail(e.target.value)
                    }}
                      className='h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11'
                      type="email"
                      placeholder='admin@example.com' />
                  </div>
                </div>

                <div>

                  <label className='mb-2 block text-sm font-semibold text-[#272725]'>Password</label>
                  <div className='relative'>
                    <span className='absolute left-3 top-1/2 -translate-y-1/2 sm:left-4'>🔒</span>
                    <input
                    value={password}
                    onChange={(e)=>{
                      setpassword(e.target.value)
                    }}
                      className='h-12 w-full rounded-lg border border-[#d6d5d0] bg-white px-10 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:px-11'
                      type={showPassword ? "text" : "password"}
                      placeholder='Enter your password'
                    />
                    <button
                      type='button'
                      onClick={() => setShowPassword(!showPassword)}
                      className='absolute right-3 top-1/2 -translate-y-1/2'
                    >
                      {showPassword ? "🙈" : "👁"}
                    </button>
                  </div>
                </div>

              </div>

              <div className='flex mb-6 flex-col gap-3 text-xs min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between sm:text-sm'>

                <div className='flex items-center cursor-pointer gap-2'>
                  <input type="checkbox" id='rememberMe' className='size-4 accent-[#4d8258]' />
                  <label className='text-sm text-gray-700' htmlFor='rememberMe'>Remember Me</label>
                </div>

                <button className='text-[#397044] text-left hover:underline min-[400px]:text-right'>Forgot Password?</button>

              </div>

              <button
                type="submit"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#4d8258] text-sm font-semibold text-white transition hover:bg-[#3f6e49] active:scale-[0.99] sm:h-[52px] sm:text-base"
              >
                <span>→</span>
                Login
              </button>
            </form>

            <div className='flex items-center gap-3 my-6'>
              <div className='h-px flex flex-1 bg-[#e2e1dc]'></div>
              <div className='text-xs text-[#999994]'>OR</div>
              <div className='h-px flex flex-1 bg-[#e2e1dc]'></div>
            </div>
            <div className='mt-7 text-center text-xs sm:text-sm'>
              <span className='text-[#666661]'>Don't have an account? </span>
              <Link to='/create-account' type='button' className='text-[#397044] ml-1 font-semibold hover:underline'>Create Account</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LoginPages
