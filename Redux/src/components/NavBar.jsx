import { FaCartPlus } from "react-icons/fa";
const NavBar = () => {
  return (
    <>
       <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold">My Store</div>
              <div className="flex items-center gap-4">
                {/* Other Navbar Items */}
                <a href="#" className="hover:text-green-400 transition duration-300">Home</a>
                <a href="#" className="hover:text-green-400 transition duration-300">Products</a>
                <a href="#" className="hover:text-green-400 transition duration-300">Contact</a>
      
                {/* Cart Icon */}
                <div className="relative">
                  <FaCartPlus className="text-white text-2xl cursor-pointer hover:text-green-400 transition duration-300" />
                </div>
              </div>
        </nav>
    </>
  )
}

export default NavBar
