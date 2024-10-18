import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={
                    'https://api.adorable.io/avatars/50/abott@adorable.png'
                } alt="Chat Bubble" />
            </div>

        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>Hi, How are you?</div>
        <div className={'chat-footer opacity-50 text-xs flex gap-1 items-center text-white'}>12:31</div>
    </div>
  )
}

export default Message