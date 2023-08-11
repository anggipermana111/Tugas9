import React from 'react'
import ThemeButton from './Theme'

const Header = () => {
    return (
        <header className={`header`}>
            <h1 className="h1">My<span className='text-red-600'>Movies</span></h1>
            <nav className='flex justify-between md:gap-10 items-center'>
                <ul className='ul'>
                    <li>Home</li>
                    <li>Now Playing</li>
                    <li>Popular</li>
                    <li>Top Rating</li>
                    <li>Upcoming</li>
                </ul>
                <div className='flex justify-end gap-5 items-center font-bold absolute top-3 right-4 md:static'>
                    <ThemeButton />
                </div>
            </nav>
        </header>
    )
}

export default Header