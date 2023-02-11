'use client'

import { collection, orderBy, query } from "firebase/firestore"
import { useSession, signOut } from "next-auth/react"
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from "../firebase"
import ChatRow from "./ChatRow"
import ModalSelection from "./ModalSelection"
import NewChat from "./NewChat"

type Props = {}

const SideBar = (props: Props) => {

    const { data: session } = useSession()

    const [chats, loading, error] = useCollection(
        session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'desc'))
    );


    return (
        <div className="p-2 flex flex-col h-screen select-none">
            <div className="flex-1">
                <div>
                    {/* New chat */}
                    <NewChat />
                    <div className="hidden sm:inline">
                        {/* Modal selection */}
                        <ModalSelection />
                    </div>

                    {/* Chats */}
                    <div className="flex flex-col space-y-2 my-2">
                        {loading && (
                            <div className="animate-pulse text-center text-white">
                                <p>Loading Chats...</p>
                            </div>
                        )}

                        {chats?.docs.map((chat) => (
                            <ChatRow key={chat.id} id={chat.id} />
                        ))}
                    </div>
                </div>
            </div>

            {
                session && (
                    <img
                        onClick={() => signOut()}
                        className="rounded-full h-12 w-12 cursor-pointer mx-auto mb-2 hover:opacity-50"
                        src={session.user?.image!}
                        alt='profile picture'
                    />
                )
            }
        </div>
    )
}

export default SideBar