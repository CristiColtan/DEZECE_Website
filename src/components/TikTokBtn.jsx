import React from 'react'

const TikTokBtn = () => {
    const handleClick = () => {
        window.location.href = 'https://www.tiktok.com';
    }

    return (
      <div className="flex justify-center items-center">
            <button onClick={handleClick} 
                className='px-3 py-2 rounded-full md:w-[270px] flex
                bg-yellow-500 text-white font-sans justify-center
                hover:bg-yellow-600/85 transition duration-200 items-center
                font-medium top-615 z-50 border-white border-4'>
                Ne găsești și pe TikTok!
            </button>
        </div>
    
  )
}

export default TikTokBtn