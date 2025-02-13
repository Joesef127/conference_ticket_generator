import { Routes, Route } from "react-router-dom";
import SelectTicket from "./pages/SelectTicket";
import AttendeeDetails from "./pages/UserProfile";
import TicketConfirmation from "./pages/Ticket";

function App() {
  return (
      <div className="bg-[#02191D] w-full min-h-screen overflow-y-scroll pb-10">
          <Routes>
            <Route path="/" element={<SelectTicket />} />
            <Route path="/user-profile" element={<AttendeeDetails />} />
            <Route path="/confirmation" element={<TicketConfirmation />} />
          </Routes>
      </div>
  );
}

export default App;
