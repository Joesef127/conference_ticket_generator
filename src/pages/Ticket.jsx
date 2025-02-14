import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import BarCode from '../assets/images/BarCode.png';

const TicketConfirmation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [quantity, setQuantity] = useState('');
  const [ticketType, setTicketType] = useState('');

  useEffect(() => {
    setSpecialRequest(localStorage.getItem('specialRequest'));
    setName(localStorage.getItem('userName'));
    setEmail(localStorage.getItem('userEmail'));
    setProfilePhoto(localStorage.getItem('imageURL'));
    setQuantity(localStorage.getItem('ticketQuantity'));
    setTicketType(localStorage.getItem('ticketType'));
  }, []);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-4 md:p-8">
      <div className="w-full">
        <Header />
      </div>
      <div className="border border-[#0E464F] rounded-3xl p-2 md:p-12 bg-[#041E22] text-white w-full max-w-lg flex flex-col gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="jeju text-2xl md:text-3xl">Ready</h1>
            <p className="roboto text-sm md:text-base">Step 3/3</p>
          </div>
          <div className="h-1 w-full bg-[#0E464F] rounded">
            <div className="w-full h-full bg-[#2194A9] rounded"></div>
          </div>
        </div>

        <div className="text-center flex flex-col gap-2">
          <h2 className="text-xl md:text-3xl font-bold">
            Your Ticket is Booked!
          </h2>
          <p className="text-sm md:text-base font-light roboto">
            Check your email for a copy or{' '}
            <span className="font-bold cursor-pointer">download</span>
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="max-w-xs w-full flex flex-col items-center relative overflow-hidden">
            <div className="absolute rounded-full -top-2 -left-2 border-r border-[#59F2FF] rotate-45 bg-[#041E22] w-7 h-6"></div>
            <div className="absolute rounded-full -top-2 -right-2 border-b border-[#59F2FF] rotate-45 bg-[#041E22] w-7 h-6"></div>
            <div className="absolute rounded-full -bottom-2 -left-2 border-l border-[#59F2FF] rotate-90 bg-[#041E22] w-7 h-6"></div>
            <div className="absolute rounded-full -bottom-2 -right-2 border-l border-[#59F2FF] rotate-90 bg-[#041E22] w-7 h-6"></div>
            <div className="absolute rounded-full mb-[-10px] bottom-24 -left-2 border-r border-[#59F2FF] bg-[#041E22] w-7 h-6"></div>
            <div className="absolute rounded-full mb-[-10px] bottom-24 -right-2 border-l border-[#59F2FF] bg-[#041E22] w-7 h-6"></div>

            <div className="bg-[#07252B] text-white p-4 rounded-2xl w-full border border-[#59F2FF] flex flex-col items-center">
              <div className='border border-[#59F2FF] rounded-2xl overflow-hidden px-2 pb-2'>
                <div className="rounded-2xl p-2 flex flex-col justify-center items-center gap-4 text-center w-full">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-bold road-rage">
                      Techember Fest &apos;25
                    </h2>
                    <p className="text-xs roboto">
                      📍 64 Ramat’s Isal, Ikoyi, Lagos
                    </p>
                    <p className="text-xs roboto">
                      📅 March 15, 2025 | 7:00 PM
                    </p>
                  </div>

                  <div className="border-4 border-[#24A0B5] bg-[#0E464F] size-40 rounded-2xl overflow-hidden flex justify-center items-center mb-4">
                    {profilePhoto ? (
                      <img
                        src={profilePhoto}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm text-gray-400">No Photo</span>
                    )}
                  </div>
                </div>

                <div className="bg-[#08353C] p-2 border border-[#09414a] rounded-lg text-sm">
                  <div className="grid grid-cols-2 border-b border-[#0E464F]">
                    <div className="p-2 border-r border-[#0E464F]">
                      <p className="text-xs opacity-60">Enter your name</p>
                      <p className="text-sm">{name || 'N/A'}</p>
                    </div>
                    <div className="p-2">
                      <p className="text-xs opacity-60">Enter your email</p>
                      <p className="text-sm break-words">{email || 'N/A'}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 border-b border-[#0E464F]">
                    <div className="p-2 border-r border-[#0E464F]">
                      <p className="text-xs opacity-60">Ticket Type</p>
                      <p className="text-sm">{ticketType || 'Free'}</p>
                    </div>
                    <div className="p-2">
                      <p className="text-xs opacity-60">Ticket(s)</p>
                      <p className="text-sm">{quantity || '1'}</p>
                    </div>
                  </div>

                  <div className="p-2">
                    <p className="text-xs opacity-60">Special Request</p>
                    <p className="text-sm">{specialRequest || 'Nil'}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#07252B] text-white px-6 py-4 rounded-2xl w-full border border-[#59F2FF] flex items-center justify-center">
              <img src={BarCode} alt="Bar Code" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 jeju mt-4">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-3 border border-[#25A0B5] text-[#25A0B5] rounded-md w-full md:w-1/2 cursor-pointer"
          >
            Book Another Ticket
          </button>
          <button className="px-4 py-3 bg-[#25A0B5] rounded-md w-full md:w-1/2 cursor-pointer">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
