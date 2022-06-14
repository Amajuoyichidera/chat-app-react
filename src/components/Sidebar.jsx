import { data } from 'autoprefixer'
import { useState, useEffect} from 'react'
import { FaComments } from 'react-icons/fa'
import { BiChevronDown } from 'react-icons/bi'
import { HiBell } from 'react-icons/hi'
import { BsCheck2 } from 'react-icons/bs'

const getUser = async () => {
    const response = await fetch('https://randomuser.me/api')
    return response.json()
}

const Sidebar = () => {
    const [ userImg, setUserImg ] = useState (' ')
    const [ name, setName ] = useState ({})

    useEffect(() => {
        getUser().then(data => {
            let [user] = data.results
            setName(user.name)
            setUserImg(user.picture.medium)
        })
    }, [])


  return (
    <aside className="p-5 w-[300px] border-r border-gray-700">
        <header className='flex items-center justify-between'>
            <figure className='bg-[#242527] w-12 h-12 rounded-xl p-2 relative before:block before:w-1 before:h-4 
            before:bg-blue-500 before:absolute before:rounded-sm before:translate-x-[-8px] before:translate-y-2'>
                <img src={userImg} alt="" className='w-full h-full rounded-xl' />
            </figure>

            <button className='flex items-center gap-2 p-1'>
             <FaComments className='text-blue-500' size={24}/>
             <span className='font-bold'>All</span>
             <BiChevronDown className='text-gray-700' size={24} />
            </button>
        </header>

        <div className='requests bg-[#323337] my-5 rounded-xl'>
            <ul>
                <li className='p-4 flex gap-4'>
                    <figure className='bg-[#181919] w-10 h-10 rounded-2xl p-2'>
                        <img src={userImg} alt="" className='w-full rounded-xl' />
                    </figure>
                    <div className='details'>
                        <h2 className='text-2xl text-white'>{ name?.first }</h2>
                        <p className='flex gap-2 items-center'>
                            <HiBell className='text-orange-500' />
                            <span>219</span>
                            <span className='text-gray-500 text-sm'>new</span>
                        </p>
                    </div>
                    <BsCheck2 size={24} className="text-blue-500 m-auto" />
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar