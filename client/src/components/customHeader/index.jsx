import React from 'react';
import { 
    ChatBubbleLeftRightIcon, 
    PhoneIcon,
    MagnifyingGlassIcon,
    EllipsisVerticalIcon,
} from "@heroicons/react/24/solid"; 

 

const CustomHeader = ({ chat }) => {
    
    return (
        <div className='chat-header'>
            <div className='flexbetween'>
                <ChatBubbleLeftRightIcon className='icon-chat' />
                <div className="flex">
                    <h3 className='header-title'>{chat.title}</h3>
                    {chat.description !== "⬅️ ⬅️ ⬅️" ? (<p className='header-subtitle'>{chat.description}</p>) : (<p className='header-subtitle'>no chat selected</p>)}
                </div>
            </div>
            <div className='flexbetween'>
                <MagnifyingGlassIcon className='header-icons' />
                <PhoneIcon className='header-icons' />
                <EllipsisVerticalIcon className='header-icons' />
            </div>
        </div>
    )
}

export default CustomHeader