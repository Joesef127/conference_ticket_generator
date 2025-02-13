import ticket from '../assets/icons/ticket.png';
import ticz from '../assets/images/ticz.png';

const Header = () => {
  return (
    <div className="flex justify-center items-center py-6 font-[--header-font]">
      <div className="border border-[#197686] rounded-2xl flex justify-between items-center p-3 w-[80%]">
        {/* logo dive */}
        <div>
          <a href="#" className="flex gap-1.5">
            <span>
              <img src={ticket} alt="logo" />
            </span>
            <span>
              <img src={ticz} alt="logo" />
            </span>
          </a>
        </div>

        {/* navbar */}
        <div className="flex gap-6">
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

        {/* call to action */}
        <button className="bg-white rounded-lg px-4 py-3 hover:bg-[#25a0b5] hover:text-white transition duration-300 ease-in-out">
          My Tickets <span>&#10230;</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
