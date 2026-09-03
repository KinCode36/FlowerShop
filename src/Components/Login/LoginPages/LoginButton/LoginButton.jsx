import React from 'react'

const LoginButton = () => {
    return (
        <button
            type="submit"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#4d8258] text-sm font-semibold text-white transition hover:bg-[#3f6e49] active:scale-[0.99] sm:h-[52px] sm:text-base"
        >
            <span>→</span>
            Login
        </button>
    )
}

export default LoginButton
