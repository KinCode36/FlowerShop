import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Terms from './Terms/Terms'
import CreateAccountButton from './CRButton/CreateAccountButton'
import { getUsers, saveUser } from '../../../../utils/localStrage'

const CRForm = () => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmpass, setConfirmpass] = useState('')
    const [number, setNumber] = useState('')
    const [name, setName] = useState('')


   const handleSubmit = (e) => {
  e.preventDefault()

  if (password !== confirmpass) {
    alert("Passwords do not match")
    return
  }

  const users = getUsers()

  const userAlreadyExists = users.some(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase()
  )

  if (userAlreadyExists) {
    alert("An account with this email already exists")
    return
  }

  const newUser = {
    id: Date.now(),
    name: name,
    email: email,
    phone: number,
    password: password,
  }

  saveUser(newUser)

  alert("Account created successfully")

  navigate("/login")
}

    return (
        <form onSubmit={handleSubmit}>

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

                <Terms />

                <CreateAccountButton />
            </div>
        </form>
    )
}

export default CRForm
