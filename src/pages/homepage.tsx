import "../Css/header.css";

function HomePage() {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4 bg-[#1B1B1B] text-white  rounded-lg max-w-6xl mx-auto">
        {/* Left Side - Navigation Links */}
        <ul className="flex space-x-6">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">Case Studies</li>
          <li className="hover:text-gray-400 cursor-pointer">Testimonials</li>
          <li className="hover:text-gray-400 cursor-pointer">Recent Work</li>
          <li className="hover:text-gray-400 cursor-pointer">Get In Touch</li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4">
          <i className="fab fa-linkedin text-xl cursor-pointer hover:text-gray-400"></i>
          <i className="fab fa-github text-xl cursor-pointer hover:text-gray-400"></i>
        </div>
      </nav>

      <div className="header-content flex items-center justify-between px-8 py-4 mx-auto my-4 max-w-6xl  text-white ">
        {/* Left Section - Text */}
        <span className="w-1/2">
          <h1 className="text-3xl font-bold">Hello, I'm Yagit Gadhok</h1>
          <p className="text-lg mt-2">
            I'm a Frontend Developer with a passion for creating beautiful and
            user-friendly interfaces.
          </p>
        </span>

        {/* Right Section - Image */}
        <span className="w-1/2 flex justify-end pt-10">
          <img
            src="https://avatars.githubusercontent.com/u/56169582?v=4"
            alt="Yagit Gadhok"
            className="w-80 h-80 rounded-full object-cover"
          />
        </span>
      </div>

      <div className="mt-16 p-10 rounded-lg ">
        <h2 className="text-3xl font-semibold mb-6 text-center">Worked with</h2>
        <ul className="flex flex-wrap justify-center gap-8">
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg"
              alt="TCS Logo"
              className="w-40 h-20 rounded-sm border-2 border-gray-300 shadow-md"
            />
          </li>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a2/DRDO_Seal.png"
              alt="DRDO Logo"
              className="w-40 h-20 rounded-sm border-2 border-gray-300 shadow-md"
            />
          </li>
          <li>
            <img
              src="https://cdn.brandfetch.io/idpJPAzMcl/theme/light/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1696101043602"
              alt="Sopra Steria Logo"
              className="w-40 h-20 rounded-sm border-2 border-gray-300 shadow-md"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default HomePage;
