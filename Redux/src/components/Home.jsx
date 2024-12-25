import pic from '../assets/herry.jpg';
import { FaCartPlus } from "react-icons/fa";

const Home = () => {
  return (
    <>

      {/* Main Content */}
      <div className="p-6 max-w-xl mx-auto bg-white rounded-lg shadow-md mt-6">
        {/* Image Section */}
        <div className="img-container min-h-10 flex justify-center items-center mb-4">
          <img src={pic} alt="A descriptive alt text for the image" className="w-full h-auto max-w-md rounded-lg shadow-lg" />
        </div>

        {/* Details Section */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Price: <span className="text-green-500">Rs. 500</span>
          </h2>
          <button className="bg-green-500 text-white px-6 py-2 mt-4 rounded-lg shadow hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2">
            <FaCartPlus className="text-white text-lg" />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
