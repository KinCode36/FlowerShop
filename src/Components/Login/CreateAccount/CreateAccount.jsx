import React from 'react'
import LeftSidePanel from '../LeftSidePanel/LeftSidePanel'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const CreateAccount = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [confirmpass, setConfirmpass] = useState('')
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();
    setName('')
    setEmail('')
    setNumber('')
    setpassword('')
    setConfirmpass('')

  }
  return (
    <div className='bg-[#f5f4f0] min-h-screen w-full overflow-x-hidden'>
      <div className='flex min-h-screen flex-col lg:flex-row'>
        <LeftSidePanel type="signup" />

        <main className='flex flex-1 w-full justify-center items-center px-4 py-8 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20'>
          <div className='bg-white w-full max-w-[480px] rounded-2xl border border-[#dfded9] p-5 shadow-[0_12px_35px_rbga(0,0,0,0,0.86)] sm:p-7 md:p-8 lg:p-9'>

            <div className='mb-7 sm:mb-8'>
              <div>
                <h1 className='font-serif text-3xl font-normal text-[#20201f] sm:text-4xl'>Create Account </h1>
              </div>
              <div>
                <p className='text-sm text-[#777771] mt-2'>Fill in the details to get started</p>
              </div>
            </div>

            <form onSubmit={(e) => { handleSubmit(e) }}>

              <div className='mb-5'>
                <div>
{/*full Name */}
                  <div className="mb-3">
                    <label className="mb-2 block text-sm font-semibold text-[#272725]">
                      Full Name
                    </label>

                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 sm:left-4">
                        👤
                      </span>

                      <input
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                        className="h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11"
                        type="text"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </div>


                  {/* Email + Phone */}
                  <div className="flex flex-col gap-4 sm:flex-row">

                    {/* Email */}
                    <div className="w-full sm:flex-1">
                      <label className="mb-2 block text-sm font-semibold text-[#272725]">
                        Email Address
                      </label>

                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 sm:left-4">
                          ✉
                        </span>

                        <input
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value)
                          }}
                          className="h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11"
                          type="email"
                          placeholder="admin@example.com"
                          required
                        />
                      </div>
                    </div>


                    {/* Phone */}
                    <div className="w-full sm:flex-1">
                      <label className="mb-2 block text-sm font-semibold text-[#272725]">
                        Phone Number
                      </label>

                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 sm:left-4">
                          ☎
                        </span>

                        <input
                          value={number}
                          onChange={(e) => {
                            setNumber(e.target.value)
                          }}
                          className="h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11"
                          type="tel"
                          placeholder="Enter Phone number"
                          required
                        />
                      </div>
                    </div>

                  </div>

                  <div className="">

                    {/* Password */}
                    <div className="w-full sm:flex-1">
                      <label className="mb-2 block text-sm font-semibold text-[#272725]">
                        Password
                      </label>

                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 sm:left-4">
                          🔒
                        </span>

                        <input
                          value={password}
                          onChange={(e) => {
                            setpassword(e.target.value)
                          }}
                          className="h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-10 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11 sm:pr-11"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          required
                        />

                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2"
                        >
                          {showPassword ? "🙈" : "👁"}
                        </button>
                      </div>
                    </div>


                    {/* Confirm Password */}
                    <div className="w-full sm:flex-1">
                      <label className="mb-2 block text-sm font-semibold text-[#272725]">
                        Confirm Password
                      </label>

                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 sm:left-4">
                          🔒
                        </span>

                        <input
                          value={confirmpass}
                          onChange={(e) => {
                            setConfirmpass(e.target.value)
                          }}
                          className="h-12 w-full rounded-lg border border-[#d6d5d0] bg-white pl-10 pr-10 text-sm outline-none transition placeholder:text-[#aaa] focus:border-[#4d8258] focus:ring-4 focus:ring-[#4d8258]/10 sm:h-[50px] sm:pl-11 sm:pr-11"
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flex items-center cursor-pointer gap-2 my-4'>
                  <input type="checkbox" id='rememberMe' className='size-4 accent-[#4d8258]' />
                  <label className='text-xs text-gray-500' htmlFor='rememberMe' required>
                    I agree to the Terms & Conditions and Privacy Policy</label>
                </div>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#4d8258] text-sm font-semibold text-white transition hover:bg-[#3f6e49] active:scale-[0.99] sm:h-[52px] sm:text-base "
                >
                  👤
                  <span>+</span>
                  <span>Create Account</span>
                </button>
              </div>
            </form>

            <div className='flex items-center gap-3 my-6'>
              <div className='h-px flex flex-1 bg-[#e2e1dc]'></div>
              <div className='text-xs text-[#999994]'>OR</div>
              <div className='h-px flex flex-1 bg-[#e2e1dc]'></div>
            </div>
            <div className='mt-7 text-center text-sm sm:text-sm'>
              <span className='text-[#666661]'>Already have an account? </span>
              <Link to='/login' type='button' className='text-[#397044] ml-1 font-semibold hover:underline'>Login</Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default CreateAccount
