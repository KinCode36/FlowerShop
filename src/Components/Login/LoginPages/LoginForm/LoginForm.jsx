import { useState } from 'react'
import { Link } from 'react-router-dom'
import Remember from './Remember/Remember'
import LoginButton from '../LoginButton/LoginButton'
import ForgotButton from './ForgotButton/ForgotButton'
const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('')
    setpassword('')
  }

  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>

      <div className='mb-5'>
        {/* Email */}
        <div>
          <label className='mb-2 block text-sm font-semibold text-[#272725]'>Email Address</label>
          <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 sm:left-4'>✉</span>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className='h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11'
              type="email"
              placeholder='admin@example.com' />
          </div>
        </div>

        {/* Password */}
        <div>
          <label className='mb-2 block text-sm font-semibold text-[#272725]'>Password</label>
          <div className='relative'>
            <span className='absolute left-3 top-1/2 -translate-y-1/2 sm:left-4'>🔒</span>
            <input
              value={password}
              onChange={(e) => {
                setpassword(e.target.value)
              }}
              className='h-12 w-full rounded-lg border border-[#d6d5d0] bg-white px-10 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:px-11'
              type={showPassword ? "text" : "password"}
              placeholder='Enter your password'
            />
            {/* PassWord Hide and show button */}
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
        <Remember />
        <ForgotButton />
      </div>

      <LoginButton />
    </form>
  )
}

export default LoginForm
