'use client'
import { DocumentData } from "firebase/firestore"
import { useEffect, useRef } from "react"

type Props = {
    message: DocumentData
}

const Message = ({ message }: Props) => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (divRef.current) {
            // will be type HTMLDivElement NOT HTMLDivElement | null
            divRef.current.scrollIntoView({
                behavior: "smooth",
            });
        }

    }, [divRef])

    const isChatGPT = message.user.name === 'ChatGPT'

    return (
        <div ref={divRef} className={`py-5 text-white ${isChatGPT && 'bg-[#434654]'}`}>
            <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
                <img src={message.user.avatar} alt="message avatar" className="h-8 w-8 rounded-full" />
                <p className="pt-1 text-sm">{message.text}</p>
            </div>
        </div>
    )
}

export default Message