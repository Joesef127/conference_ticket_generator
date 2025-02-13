import Header from "../components/Header";
import TicketSelection from "../components/TicketSelection";

const SelectTicket = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
      <Header />
      </div>
    <div className="border border-[#0E464F] rounded-3xl p-12 bg-[#041E22] text-white w-[55%] h-full flex justify-start flex-col gap-4">
      <div className="py-2">
        <div className="flex items-center justify-between">
          <h1 className="jeju text-[32px]">Ticket Selection</h1>
          <p className="roboto text-base">
            Step <span>1</span>/<span>3</span>
          </p>
        </div>
        <div className="h-1 w-full bg-[#0E464F] rounded">
          <div className="w-1/3 h-full bg-[#2194A9] rounded"></div>
        </div>
      </div>
      <div className="py-2">
        <TicketSelection />
      </div>
    </div>
    </div>
  );
}

export default SelectTicket;