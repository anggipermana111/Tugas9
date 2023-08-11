import React from 'react'
import Main from './components/Main'
import Header from './components/Header'
import Footer from './components/Footer'
import Koperasi from '../public/koperasi.png'
import Movie from '../public/movie.png'
import Inventory from '../public/inventory.png'
import Tiket from '../public/tiket.png'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import { useRef } from 'react'

export const ThemeContext = createContext({});

const App = () => {
  const [theme, setTheme] = useState("dark");
  const projectRef = useRef(null);
  useEffect(()=>{
    console.log("Berhasil mengubah tema menjadi",theme=='dark'?"Gelap":"Terang");
  },[theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, projectRef }}>
      <div className={`body ${theme} flex flex-col h-screen`}>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  )
}

export default App