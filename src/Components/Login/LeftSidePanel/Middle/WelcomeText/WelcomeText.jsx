import React from 'react'

const WelcomeText = ({ type = "login" }) => {
    const isLogin = type === "login";
    return (
        <>
            <h1 className='font-serif font-normal text-white text-3xl '>
                {isLogin ? "Welcome Back!" : "Create Account"}
            </h1>
            <p className='font-normal text-[rgb(184,184,179)] text-sm leading-6'>
                {isLogin
                    ? "Sign in to continue managing your dashboard."
                    : "Join and start managing your dashboard efficiently."}
            </p>
        </>
    )
}

export default WelcomeText
