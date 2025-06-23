import React from 'react'

const ChaGolpo = ({ image, heading, story }) => {
  return (
    <div
      className='flex flex-col items-center justify-center bg-gradient-to-r from-zinc-300 via-slate-800 to-black min-h-screen p-6 md:p-12 text-white rounded-lg shadow-inner'
    >
      <div
        className='flex flex-col w-full max-w-7xl justify-between items-center gap-12 shadow-xl p-6 md:p-12 bg-white/10 backdrop-blur-lg rounded-lg'
      >
        <img src={image} alt="Cha Story" className='rounded-xl' />
        <div className='flex flex-col items-start justify-center gap-2'>
          <h1 className='w-full text-xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>{heading}</h1>
          <p className='text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-br from-zinc-100 via-slate-200 to-white'>{story}</p>
        </div>
      </div>
    </div>
  )
}

export default ChaGolpo
