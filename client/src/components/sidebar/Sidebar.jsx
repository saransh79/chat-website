import React from 'react'
import SearchInput from './SearchInput'
import Conversation from './Conversation'
import { BiLogOutCircle } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';
import useGetConversations from '../../hooks/useGetConversations';

const Sidebar = () => {
    const { logout } = useLogout();
    const { loading, conversations } = useGetConversations();

    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput />

            <div className='divider px-3'></div>

            <div className='py-2 flex flex-col overflow-auto'>
                {
                    conversations.map((conversation, ind)=>(
                        <Conversation key={conversation._id}
                        conversation= {conversation}
                        lastInd = {ind === conversations.length -1}
                        />
                    ))
                    }
                    {
                        loading ? <span className='loading loading-spinner'></span>: null
                    }
            </div>

            <div className='mt-auto pt-2'>
                <BiLogOutCircle className='w-6 h-6 text-white cursor-pointer'
                    onClick={logout}
                />
            </div>
        </div>
    )
}

export default Sidebar