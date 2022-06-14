import React from 'react'
import Sidebar from '../components/Sidebar'

const ChatDashboard = () => {
  return (
    <div className='chat-dashboard h-screen bg-[#151618] text-gray-300 grid grid-cols-[auto_1fr]'>
        <Sidebar />
        <main></main>
    </div>
  )
}

export default ChatDashboard