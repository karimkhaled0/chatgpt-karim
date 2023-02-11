'use client'
import { signIn } from "next-auth/react"
import Image from "next/image"

type Props = {}

const Login = (props: Props) => {
    return (
        <div className="bg-[#12a37d] h-screen flex flex-col items-center justify-center text-center">
            <Image
                src='/gpt.png'
                alt='logo'
                width={300}
                height={300}
            />
            <button onClick={() => signIn('google')} className="text-white font-bold md:text-3xl text-2xl animate-pulse">
                Sign In to use ChatGPT
            </button>
        </div>
    )
}

export default Login