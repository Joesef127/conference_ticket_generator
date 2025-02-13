import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BarCode from '../assets/images/BarCode.png';
import { useState } from 'react';
import { useEffect } from 'react';

const TicketConfirmation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const [quantity, setQuantity] = useState('');
  const [ticketType, setTicketType] = useState('');

  useEffect (() => {
    setSpecialRequest(localStorage.getItem("specialRequest"))
    setName(localStorage.getItem("userName"))
    setEmail(localStorage.getItem("userEmail"))
    setProfilePhoto(localStorage.getItem("imageURL"))
    setQuantity(localStorage.getItem("ticketQuantity"))
    setTicketType(localStorage.getItem("ticketType"))
  })

  const navigate = useNavigate();


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Header />
      </div>
      <div className="border border-[#0E464F] rounded-3xl p-12 bg-[#041E22] text-white w-[55%] h-full flex justify-start flex-col gap-4">
        <div className="py-2">
          <div className="flex items-center justify-between">
            <h1 className="jeju text-[32px]">Ready</h1>
            <p className="roboto text-base">Step 3/3</p>
          </div>
          <div className="h-1 w-full bg-[#0E464F] rounded">
            <div className="w-full h-full bg-[#2194A9] rounded"></div>
          </div>
        </div>

        <div className="text-center my-6 alatsi flex flex-col gap-2.5">
          <h2 className="text-3xl font-bold">Your Ticket is Booked!</h2>
          <p className="text-base font-light roboto">
            Check your email for a copy or you can{' '}
            <span className="font-bold cursor-pointer">download</span>
          </p>
        </div>

        <div className="w-full flex flex-col items-center justify-center rouded-[-24px]">
          {/* Ticket Card */}
          <div className="bg-[#07252B] text-white p-5 rounded-2xl w-fit border border-[#0E464F] flex flex-col items-center">
          
            <div className="bg-[#153F47] border border-[#59F2FF] rounded-2xl p-4 flex flex-col gap-5">

              <div className='text-center flex flex-col gap-1'>
                <h2 className="text-4xl font-bold road-rage">Techember Fest &quot;25</h2>
                <p className="text-[10px] roboto">
                  📍 64 Ramat &apos;s Isal, Ikoyi, Lagos
                </p>
                <p className="text-[10px] roboto">📅 March 15, 2025 | 7:00 PM</p>
              </div>

              <div className='flex justify-center items-center'>
                <div className="border-4 border-[#24A0B5] bg-[#0E464F] size-36 rounded-3xl overflow-hidden text-center flex justify-center items-center">
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

              <div className='bg-[#08353C] p-1 border border-[#09414a] rounded-lg'>
                <div className="w-full grid grid-cols-2 text-sm border-b border-[#0E464F]">
                  <div className='p-1 flex flex-col gap-2 border-r border-[#0E464F]'>
                    <p className="font-light text-start w-1/2 roboto text-nowrap text-[10px] opacity-60">Enter your name</p>
                    <p className='text-wrap text-[12px]'>{name || '-'}</p>
                  </div>
                  <div className='p-1 flex flex-col gap-2'>
                    <p className="font-light text-start w-1/2 roboto text-nowrap text-[10px] opacity-60">Enter your email</p>
                    <p className='text-wrap text-[12px]'>{email || '-'}</p>
                  </div>
                </div>
                <div className="w-full grid grid-cols-2 text-sm border-b border-[#0E464F]">
                  <div className='p-1 flex flex-col gap-2 border-r border-[#0E464F]'>
                    <p className="font-light text-start w-1/2 roboto text-nowrap text-[10px] opacity-60">Ticket Type</p>
                    <p className='text-wrap text-[12px]'>{ticketType || '-'}</p>
                  </div>
                  <div className='p-1 flex flex-col gap-2'>
                    <p className="font-light text-start w-1/2 roboto text-[10px] opacity-60">Ticket(s)</p>
                    <p className='text-wrap text-[12px]'>{quantity || '1'}</p>
                  </div>
                </div>
                <div className="w-full text-sm px-3 py-2">
                  <p className="font-light text-start w-1/2 roboto text-[10px] opacity-60">Special Request</p>
                  <p className=' max-w-[224px] text-[12px]'>{specialRequest || 'Nil ? Or the users sad story they write in there gets this whole space, Max of three rows'}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#07252B] text-white px-6 py-4 rounded-2xl w-fit border border-[#0E464F] flex flex-col items-center">
            <div className="text-black flex items-center justify-center font-bold">
              <img src={BarCode} alt="bar code" />
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex justify-between items-center gap-6 jeju mt-6">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 border border-[#25A0B5] text-[#25A0B5] rounded-md w-1/2 cursor-pointer"
          >
            Book Another Ticket
          </button>
          <button className="px-4 py-2 bg-[#25A0B5] rounded-md w-1/2 cursor-pointer">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketConfirmation;
