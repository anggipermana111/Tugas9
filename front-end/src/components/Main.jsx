import Gambar from '../../public/banner.jpg'
import { useContext } from 'react'
import Footer from './Footer';
import { ThemeContext } from '../App';
import { useEffect } from 'react';
import { useState } from 'react';

const Main = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch("http://localhost:5000/getmovie").then(res=>res.json()).then(x=>{
      setData(x)
    })
  },[])
  console.log(data);
  const { theme, projectRef } = useContext(ThemeContext);
  return (
    <main className='py-3 px-5 md:px-14 lg:px-16 flex flex-col gap-10 h-full overflow-y-auto'>
      <section>
        {/* Image */}
        <div className='rounded-2xl overflow-hidden'>
          <img src={Gambar} alt="" />
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:gap-8'>
        <h1 ref={projectRef} className='title'>Now <span className='text-red-600'>Playing</span></h1>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10'>
          {
            data.map((datum) => {
              return (
                <figure key={datum.movie_id} className={`project-${theme} p-3 md:p-5 lg:p-7 border rounded-2xl flex flex-col gap-5`} title={datum.description}>
                  <img src={datum.poster_url} alt={datum.title} className='rounded w-full aspect-auto' />
                  <figcaption className='p-2 flex flex-col gap-1'>
                    <h1 className='font-bold text-xl text-center'>{datum.title}</h1>
                  </figcaption>
                </figure>
              )
            })
          }
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:gap-8'>
        <h1 ref={projectRef} className='title'>Popular <span className='text-red-600'>Movie</span></h1>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10'>
          {
            data.map((datum) => {
              return (
                <figure key={datum.movie_id} className={`project-${theme} p-3 md:p-5 lg:p-7 border rounded-2xl flex flex-col gap-5`} title={datum.description}>
                  <img src={datum.poster_url} alt={datum.title} className='rounded w-full aspect-auto' />
                  <figcaption className='p-2 flex flex-col gap-1'>
                    <h1 className='font-bold text-xl text-center'>{datum.title}</h1>
                    {/* <p className='text-justify'>
                      {datum.description}
                    </p> */}
                  </figcaption>
                </figure>
              )
            })
          }
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:gap-8'>
        <h1 ref={projectRef} className='title'>Top <span className='text-red-600'>Rating</span></h1>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10'>
          {
            data.map((datum) => {
              return (
                <figure key={datum.movie_id} className={`project-${theme} p-3 md:p-5 lg:p-7 border rounded-2xl flex flex-col gap-5`} title={datum.description}>
                  <img src={datum.poster_url} alt={datum.title} className='rounded w-full aspect-auto' />
                  <figcaption className='p-2 flex flex-col gap-1'>
                    <h1 className='font-bold text-xl text-center'>{datum.title}</h1>
                    {/* <p className='text-justify'>
                      {datum.description}
                    </p> */}
                  </figcaption>
                </figure>
              )
            })
          }
        </div>
      </section>
      <section className='flex flex-col gap-5 lg:gap-8'>
        <h1 ref={projectRef} className='title'>Upcoming <span className='text-red-600'>Movie</span></h1>
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10'>
          {
            data.map((datum) => {
              return (
                <figure key={datum.movie_id} className={`project-${theme} p-3 md:p-5 lg:p-7 border rounded-2xl flex flex-col gap-5`} title={datum.description}>
                  <img src={datum.poster_url} alt={datum.title} className='rounded w-full aspect-auto' />
                  <figcaption className='p-2 flex flex-col gap-1'>
                    <h1 className='font-bold text-xl text-center'>{datum.title}</h1>
                    {/* <p className='text-justify'>
                      {datum.description}
                    </p> */}
                  </figcaption>
                </figure>
              )
            })
          }
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Main