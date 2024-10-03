import { useState } from 'react'
import ProfilePicture from '../../assets/003/profile-pic.webp'
import PhonePlaceholder from '../../assets/003/apple-iphone-14.png' 

enum Status {
    online= 'Online',
    offline= 'Offline',
    busy= 'Busy',
    focused= 'Focused'
}

const MobileNavigation = () => {
    const ACTIVE_STYLE = 'bg-[#F5F8FF] p-2 rounded-full text-[#7A80C8]'
    const INACTIVE_STYLE = 'bg-[transparent] p-2 rounded-full text-gray-300'
    const [mainNavActiveLink, setMainNavActiveLink] = useState<number>(1)
    const [status, setStatus] = useState<Status>(Status.online)
    const [modalState, setModalState] = useState<boolean>(false)

    const getStatusColor = (statusLibelle:string) => {
        if(statusLibelle == 'Online') {
            return 'bg-green-600'
        }
        if(statusLibelle == 'Offline') {
            return 'bg-gray-700'
        }
        if(statusLibelle == 'Busy') {
            return 'bg-orange-600'
        }
        if(statusLibelle == 'Focused') {
            return 'bg-violet-600'
        }
    }

    return (
        <div className="bg-[#E8EBF3] w-full h-full flex items-center justify-center relative">
            <div className='bg-white rounded-[40px]'>
            <img
                src={PhonePlaceholder} 
                alt="Placeholder" 
                className='w-[375px] absolute left-1/2 -translate-x-1/2'
            />
            <div className="card relative w-[335px] h-[670px] shadow-2xl rounded-[40px] px-6 pb-10 mt-[80px]">
                <div className="flex flex-row gap-4">
                    <div className='relative'>
                        <img 
                            src={ProfilePicture}
                            alt="Profile picture." 
                            width={64}
                            height={64}
                            className='rounded-2xl shadow-xl'
                        />
                        <div 
                            className={`${getStatusColor(status)} absolute w-4 h-4 rounded-full -bottom-1 -right-1 shadow-md cursor-pointer`}
                            onClick={() => {setModalState(true)}}
                        ></div>
                        {modalState && (
                        <div className='bg-white shadow-2xl border-[1px] pt-4 pb-6 px-4 mt-2 rounded-md absolute w-[250px]'>
                            <div className='grid grid-cols-2'>
                                <p className='font-bold'>Change status</p>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    strokeWidth={1.5} 
                                    stroke="currentColor" 
                                    className="size-5 place-self-end cursor-pointer"
                                    onClick={() => {setModalState(false)}}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <hr className='my-4'/>
                            <ul className='grid gap-2'>
                                <li 
                                    className='flex flex-row items-center gap-4 cursor-pointer'
                                    onClick={() => {setStatus(Status.online)}}
                                >
                                    <div className='bg-green-500 w-4 h-4 rounded-full shadow-md'></div>
                                    <p className=''>{Status.online}</p>
                                </li>
                                <li 
                                    className='flex flex-row items-center gap-4 cursor-pointer'
                                    onClick={() => {setStatus(Status.offline)}}
                                >
                                    <div className='bg-gray-700 w-4 h-4 rounded-full shadow-md'></div>
                                    <p className=''>{Status.offline}</p>
                                </li>
                                <li 
                                    className='flex flex-row items-center gap-4 cursor-pointer'
                                    onClick={() => {setStatus(Status.busy)}}
                                >
                                    <div className='bg-orange-500 w-4 h-4 rounded-full shadow-md'></div>
                                    <p className=''>{Status.busy}</p>
                                </li>
                                <li 
                                    className='flex flex-row items-center gap-4 cursor-pointer'
                                    onClick={() => {setStatus(Status.focused)}}
                                >
                                    <div className='bg-violet-500 w-4 h-4 rounded-full shadow-md'></div>
                                    <p className=''>{Status.focused}</p>
                                </li>
                            </ul>
                        </div>
                        )}
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className='font-bold'>Lisa Richardson</h1>
                        <p>Environmental meteorologist</p>
                    </div>
                </div>
                <hr className='my-6'/>
                <nav>
                    <ul className='grid gap-4'>
                        <li className='grid grid-cols-2 cursor-pointer'>
                            <div className='flex flex-row gap-4 items-center w-max'>
                                <div className='bg-[#E8EBF3] p-2 rounded-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor" 
                                    className="size-5"
                                    >
                                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                    </svg>
                                </div>
                                <a className='font-bold'>Personal Data</a>
                            </div>
                            <div className='w-fit place-self-end self-center'>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </li>
                        <li className='grid grid-cols-2 cursor-pointer'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='bg-[#E8EBF3] p-2 rounded-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                    </svg>
                                </div>
                                <a className='font-bold'>Messages</a>
                            </div>
                            <div className='w-fit place-self-end self-center'>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </li>
                        <li className='grid grid-cols-2 cursor-pointer'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='bg-[#E8EBF3] p-2 rounded-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <a className='font-bold'>Notifications</a>
                            </div>
                            <div className='w-fit place-self-end self-center'>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </li>
                        <li className='grid grid-cols-2 cursor-pointer'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='bg-[#E8EBF3] p-2 rounded-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <a className='font-bold'>Location</a>
                            </div>
                            <div className='w-fit place-self-end self-center'>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </li>
                        <li className='grid grid-cols-2 cursor-pointer'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='bg-[#E8EBF3] p-2 rounded-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                    </svg>
                                </div>
                                <a className='font-bold'>Community</a>
                            </div>
                            <div className='w-fit place-self-end self-center'>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                    <hr className='my-6'/>
                    <ul className='grid gap-4'>
                        <li className='grid grid-cols-2 cursor-pointer'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='bg-[#E8EBF3] p-2 rounded-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 24 24" 
                                    fill="currentColor" 
                                    className="size-5"
                                    >
                                        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                                    </svg>
                                </div>
                                <a className='font-bold'>FAQs</a>
                            </div>
                            <div className='w-fit place-self-end self-center'>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </li>
                        <li className='grid grid-cols-2 cursor-pointer'>
                            <div className='flex flex-row gap-4 items-center'>
                                <div className='bg-[#E8EBF3] p-2 rounded-md'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                        <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <a className='font-bold'>Settings</a>
                            </div>
                            <div className='w-fit place-self-end self-center'>
                                <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} 
                                stroke="currentColor" 
                                className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </nav>
                <nav className='absolute w-[calc(100%-3rem)] bottom-10'>
                    <ul className='flex flex-row justify-between'>
                        <li className='cursor-pointer' onClick={() => {
                            setMainNavActiveLink(1)
                        }}>
                            <div className={mainNavActiveLink == 1 ? ACTIVE_STYLE : INACTIVE_STYLE}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                            </div>
                        </li>
                        <li className='cursor-pointer' onClick={() => {
                            setMainNavActiveLink(2)
                        }}>
                            <div className={mainNavActiveLink == 2 ? ACTIVE_STYLE : INACTIVE_STYLE}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                                </svg>
                            </div>
                        </li>
                        <li className='cursor-pointer' onClick={() => {
                            setMainNavActiveLink(3)
                        }}>
                            <div className={mainNavActiveLink == 3 ? ACTIVE_STYLE : INACTIVE_STYLE}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                        </li>
                        <li className='cursor-pointer' onClick={() => {
                            setMainNavActiveLink(4)
                        }}>
                            <div className={mainNavActiveLink == 4 ? ACTIVE_STYLE : INACTIVE_STYLE}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        </div>
    )
}

export default MobileNavigation;