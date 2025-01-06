'use client'
import Image from "next/image"

const Header4 = () => {
  return (
    <div className="flex flex-col md:flex-row my-8 md:my-14 justify-between items-center border-2 rounded-lg border-gray-300 p-4 md:p-5 space-y-4 md:space-y-0">
        <div className="flex items-center">
            <Image src={'/fire.png'} alt="fire" width={70} height={70} className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-3 md:mr-5"/>
            <div className="text-base md:text-xl">
                <p className="font-bold">
                    Get access to exclusive deals
                </p>
                <p className="text-sm md:text-base">
                    Only the best deals reach your inbox
                </p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full md:w-auto space-y-3 sm:space-y-0 sm:space-x-3">
            <input 
                type="email" 
                className="px-4 py-3 rounded-lg w-full sm:w-64 md:w-80 h-12 md:h-14 outline-none border border-gray-300" 
                placeholder="e.g. john@gmail.com"
            />
            <button 
                type="submit" 
                className="w-full sm:w-auto px-6 h-12 md:h-14 bg-red-500 text-lg md:text-xl rounded-lg text-white cursor-pointer hover:bg-red-600 transition-colors duration-300"
            >
                Notify
            </button>
        </div>
    </div>
  )
}

export default Header4
