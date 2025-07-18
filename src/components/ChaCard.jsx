import React from 'react'

const ChaCard = ({ image, mainText, subText }) => {
  return (
    <div
      className='flex flex-col items-center justify-center p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-xl w-full max-w-md'
    >
      <img src={image} alt="Cha" className='w-full h-48 object-cover rounded-lg mb-4 shadow-md' />
      <h2 className='text-lg font-semibold text-white mb-2 text-center'>{mainText}</h2>
      <p className='text-sm text-zinc-50 font-medium'>{subText}</p>
    </div>
  )
}

export default ChaCard
