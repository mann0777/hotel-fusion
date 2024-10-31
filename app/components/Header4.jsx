'use client'
import Image from "next/image"

const Header4 = () => {
  return (
    <div className="flex my-14 justify-between items-center border-2 rounded-lg border-gray-300 px-5">
        <div className="flex items-center">
            <Image src={'/fire.png'} alt="fire" width={70} height={10} className="w=32 h-20 rounded-full mr-5"/>
            <div className="text-xl">
                <p className="font-bold">
                    Get access to exclusive deals
                </p>
                <p>
                    Only the best deals reach your inbox
                </p>
            </div>
        </div>
        <div className="flex">
            <input type="email" className="px-4 py-3 rounded-lg mr-5 w-80 h-15 outline-none border border-gray-300" placeholder="e.g. john@gmail.com"></input>
            <button type="submit" className="w-48 h-14 bg-red-500 text-xl rounded-lg text-white cursor-pointer">Notify</button>
        </div>
    </div>
  )
}

export default Header4