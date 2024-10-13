import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  const ACTIVE_LINK_STLYE = 'bg-white rounded-md border-[1px] border-blue-200 font-medium p-2'
  const DEFAULT_STYLE = ''
  const [screenSize, setScreenSize] = useState(0)
  const [burgerState, setBurgerState] = useState(false)

  useEffect(() => {
    setScreenSize(screen.width)
  }, [screenSize, screen])

  const nav = (
    <nav>
      <ul className="flex flex-col gap-4 md:gap-0">
        <li className={localStorage.getItem('activeLink') == '1' ? ACTIVE_LINK_STLYE : DEFAULT_STYLE} onClick={() => localStorage.setItem('activeLink', '1')}>
          <a href={`/001-profile-card`}>Profile Card</a>
        </li>
        <li className={localStorage.getItem('activeLink') == '2' ? ACTIVE_LINK_STLYE : DEFAULT_STYLE} onClick={() => localStorage.setItem('activeLink', '2')}>
          <a href={`/002-add-to-cart`}>Add to bag</a>
        </li>
        <li className={localStorage.getItem('activeLink') == '3' ? ACTIVE_LINK_STLYE : DEFAULT_STYLE} onClick={() => localStorage.setItem('activeLink', '3')}>
          <a href={`/003-mobile-navigation`}>Mobile navigation</a>
        </li>
        <li className={localStorage.getItem('activeLink') == '4' ? ACTIVE_LINK_STLYE : DEFAULT_STYLE} onClick={() => localStorage.setItem('activeLink', '4')}>
          <a href={`/005-recipe`}>Recipe</a>
        </li>
        <li className={localStorage.getItem('activeLink') == '5' ? ACTIVE_LINK_STLYE : DEFAULT_STYLE} onClick={() => localStorage.setItem('activeLink', '5')}>
          <a href={`/006-image-carousel`}>Image Carousel</a>
        </li>
        <li className={localStorage.getItem('activeLink') == '6' ? ACTIVE_LINK_STLYE : DEFAULT_STYLE} onClick={() => localStorage.setItem('activeLink', '6')}>
          <a href={`/006-create-account`}>Create Account</a>
        </li>
      </ul>
    </nav>
  )

  if (screen.availWidth > 800) {
    return (
      <>
        <div id="sidebar">
          <h1><a href="https://app.bigdevsoon.me/challenges" target="blank">100 Days challenges</a></h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="qinput"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="qinput"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit" id="submit">New</button>
            </form>
          </div>
          {nav}
        </div>
        <div id="detail" className="w-full h-full overflow-y-auto">
          <Outlet />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={`p-4 top-0 left-0 mt-14 absolute w-2/3 h-screen bg-white shadow-xl shadow-gray-300 z-50 transition-transform ${burgerState ? '-translate-x-[0%]' : '-translate-x-[110%]'}`}>
          {nav}
        </div>
        <div className="flex flex-col w-screen">
          <div className="bg-gray-100 fixed w-screen h-14 border-b-[1px] p-4 grid grid-cols-2">
            {!burgerState && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                className="size-6 cursor-pointer"
                onClick={() => {
                  setBurgerState(!burgerState)
                }}
              >
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
              </svg>
            )}
            {burgerState && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
                className="size-6"
                onClick={() => {
                  setBurgerState(!burgerState)
                }}
              >
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            )}
            <h1 className="place-self-end font-bold"><a href="https://app.bigdevsoon.me/challenges" target="blank">100 Days challenges</a></h1>
          </div>
          <div id="detail" className="w-full h-full overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </>
    )
  }

}