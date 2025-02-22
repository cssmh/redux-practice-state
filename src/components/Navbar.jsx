const Navbar = () => {
  return (
    <nav className="shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#" className="text-xl font-bold">
          MyApp
        </a>
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="relative">
          <img
            className="h-10 w-10 rounded-full cursor-pointer border-2 border-gray-300"
            src="https://via.placeholder.com/40"
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
