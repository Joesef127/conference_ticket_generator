import ticket from '../assets/icons/ticket.png';
import ticz from '../assets/images/ticz.png';

const Header = () => {
  return (
    <div className="flex justify-center items-center py-4 md:py-6 jeju">
      <div className="border border-[#197686] rounded-2xl flex flex-wrap justify-between items-center p-3 w-full max-w-5xl">
        <div>
          <a href="#" className="flex items-center">
            <span>
              <img src={ticket} alt="logo" className="w-6 md:w-8" />
            </span>
            <span>
              <img src={ticz} alt="logo" className="w-12 md:w-20" />
            </span>
          </a>
        </div>

        <div className="hidden md:flex gap-6">
          <li className="list-none text-[#B3B3B3] hover:text-white transition duration-300 ease-in-out cursor-pointer">
            <a href="#">Events</a>
          </li>
          <li className="list-none text-[#B3B3B3] hover:text-white transition duration-300 ease-in-out cursor-pointer">
            <a href="#">My Tickets</a>
          </li>
          <li className="list-none text-[#B3B3B3] hover:text-white transition duration-300 ease-in-out cursor-pointer">
            <a href="#">About Project</a>
          </li>
        </div>

        <button className="bg-white rounded-lg px-3 py-2 md:px-4 md:py-3 hover:bg-[#25a0b5] hover:text-white transition duration-300 ease-in-out text-sm md:text-base">
          My Tickets <span>&#10230;</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
