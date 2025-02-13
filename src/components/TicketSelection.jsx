import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketSelection = () => {
  const navigate = useNavigate();

  const tickets = [
    {
      type: 'Free',
      price: 'Free',
      description: 'REGULAR ACCESS',
      availability: '20/52',
    },
    {
      type: 'VIP',
      price: '$150',
      description: 'VIP ACCESS',
      availability: '20/52',
    },
    {
      type: 'VVIP',
      price: '$150',
      description: 'VVIP ACCESS',
      availability: '20/52',
    },
  ];

  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-[#07252B] text-white p-6 rounded-2xl w-full border border-[#0E464F]">
      {/* Header */}
      <div className="text-center mb-4 rounded-3xl border border-[#0E464F] p-6">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[62px] leading-none font-bold road-rage">
            Techember Fest &quot;25
          </h1>
          <p className="text-base max-w-[340px] text-center">
            Join us for an unforgettable experience at [Event Name]! Secure your
            spot now.
          </p>
        </div>
        <p className="text-base flex items-center justify-center gap-3 mt-4 ">
          <span>📍 [Event Location]</span> ||{' '}
          <span>March 15, 2025 | 7:00 PM</span>
        </p>
      </div>

      <div className="h-1 w-full bg-[#0E464F] my-8 rounded"></div>

      {/* Ticket Selection */}
      <div className="mb-4">
        <h2 className="text-base mb-2 roboto">Select Ticket Type:</h2>
        <div className="grid grid-cols-3 gap-5 border border-[#0E464F] bg-[#052228] p-4 rounded-3xl">
          {tickets.map((ticket, index) => (
            <button
              key={index}
              onClick={() => {setSelectedTicket(ticket.type)
                localStorage.setItem('ticketType', ticket.type);
              }}
              className={`cursor-pointer text-start p-4 rounded-xl border border-[#0E464F] hover:bg-[#30555b] focus:bg-[#30555b] transition-all ${
                selectedTicket === ticket.type ? 'bg-[#12464E]' : 'bg-[#052c33]'
              }`}
            >
              <p className="text-2xl font-semibold">{ticket.price}</p>
              <p className="text-base font-normal">{ticket.description}</p>
              <p className="text-sm font-normal">{ticket.availability}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Ticket Quantity */}
      <div className="mb-8">
        <h2 className="text-base mb-2 roboto">Number of Tickets</h2>
        <select
          className="w-full p-2 border border-[#0E464F] rounded-md"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
            localStorage.setItem('ticketQuantity', e.target.value);
          }}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center gap-6 jeju">
        <button
          className="px-4 py-2 border border-[#25A0B5] text-[#25A0B5] rounded-md w-1/2 cursor-pointer"
          onClick={() => {
            console.log('clicked cancel');
            navigate('/');
          }}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-[#25A0B5] rounded-md w-1/2 cursor-pointer"
          onClick={() => {
            console.log('clicked next to go to update profile');
            navigate('/user-profile');
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
