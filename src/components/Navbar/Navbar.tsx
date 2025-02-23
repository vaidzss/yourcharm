import { useState } from "react"
import { BiX } from "react-icons/bi"
import { MdMenu } from "react-icons/md"


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const ToggleMenu = () => {
        setIsOpen(!isOpen)
    }
  return (
    <nav className="bg-primary flex justify-around w-full text-secondary">
      <div className="font-playfair text-2xl p-4">
        <h2>YourCharm</h2>
      </div>
      <div className="text-center font-poppins text-md md:block hidden">
        <ul className="flex gap-10 py-5">
        <a href="#hero"> <li className="hover:font-semibold cursor-pointer">Home</li></a>
               <a href="#products"> <li className="hover:font-semibold cursor-pointer">Products</li></a>
               <a href="#about"> <li className="hover:font-semibold cursor-pointer">About</li></a>
               <a href="#contact"> <li className="hover:font-semibold cursor-pointer">Contact</li></a>
        </ul>
      </div>
      <div className="font-poppins text-md md:hidden block py-5">
        <button className="hover:cursor-pointer" onClick={ToggleMenu}>
            <MdMenu size={25}/>
        </button>

      </div>

      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-primary opacity-[.9] flex flex-col items-center justify-center z-50">
            <button className="absolute top-4 right-4 hover:cursor-pointer" onClick={ToggleMenu}>
                <BiX size={25}/>
            </button>
            <ul className="flex flex-col gap-10 font-poppins">
               <a href="#hero"> <li className="hover:font-semibold cursor-pointer">Home</li></a>
               <a href="#products"> <li className="hover:font-semibold cursor-pointer">Products</li></a>
               <a href="#about"> <li className="hover:font-semibold cursor-pointer">About</li></a>
               <a href="#contact"> <li className="hover:font-semibold cursor-pointer">Contact</li></a>
            </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
