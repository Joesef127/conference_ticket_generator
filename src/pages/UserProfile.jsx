import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const AttendeeDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
      localStorage.setItem('imageURL', imageURL);
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!name) newErrors.name = 'Full name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Valid email is required';
    if (!image || !image.startsWith('http'))
      newErrors.image = 'Valid image URL is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', email);
      localStorage.setItem('specialRequest', specialRequest);
      localStorage.setItem('imageURL', image);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full">
        <Header />
      </div>
      <div className="border border-[#0E464F] rounded-3xl p-12 bg-[#041E22] text-white w-[55%] h-full flex justify-start flex-col gap-4">
        <div className="py-2 flex items-center justify-between">
          <h1 className="jeju text-[32px]">Attendee Details</h1>
          <p className="roboto text-base">
            Step <span>2</span>/<span>3</span>
          </p>
        </div>
        <div className="h-1 w-full bg-[#0E464F] rounded">
          <div className="w-2/3 h-full bg-[#2194A9] rounded"></div>
        </div>

        <form
          className="bg-[#09252B] border border-[#0E464F] p-6 rounded-3xl"
          onSubmit={handleSubmit}
        >
          {/* Profile Photo Upload */}
          <div className="mt-4 p-6 border border-[#0E464F] rounded-2xl bg-[#07252B]">
            <p className="mb-8">Upload Profile Photo</p>
            <label
              htmlFor="file-upload"
              className="cursor-pointer border border-dashed border-[#2194A9] rounded-xl p-6 flex items-center justify-center w-full h-48 bg-[#052228] hover:bg-[#30555b]"
            >
              <div className="border-4 border-[#24A0B5] bg-[#0E464F] size-56 rounded-3xl overflow-hidden text-center flex justify-center items-center">
                {image ? (
                  <img
                    src={image}
                    alt="Uploaded"
                    className="w-full h-full object-cover object-center rounded-xl"
                  />
                ) : (
                  <span className="text-[#2194A9]">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    />
                    Drag & drop or click to upload
                  </span>
                )}
              </div>
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />

            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="h-1 w-full bg-[#0E464F] my-8 rounded"></div>

          {/* Input Fields */}
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <label className="block text-base roboto mb-1">
                Enter your name
              </label>
              <input
                type="text"
                required
                className="w-full p-2 border border-[#0E464F] rounded-md text-white"
                placeholder="John Doe"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  localStorage.setItem('userName', name);
                }}
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-base roboto mb-1">
                Enter your email *
              </label>
              <input
                type="email"
                required
                className="w-full p-2 border border-[#0E464F] rounded-md text-white"
                placeholder="Johndoe@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  localStorage.setItem('userEmail', email);
                }}
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-base roboto mb-1">
                Special request?
              </label>
              <textarea
                className="w-full p-2 border border-[#0E464F] rounded-md text-white h-24"
                rows={3}
                value={specialRequest}
                placeholder="I would love to...."
                onChange={(e) => {
                  setSpecialRequest(e.target.value);
                  localStorage.setItem('userSpecialRequest', specialRequest);
                }}
              />

              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center gap-6 jeju mt-6">
            <button className="px-4 py-2 border border-[#25A0B5] text-[#25A0B5] rounded-md w-1/2 text-center">
              <NavLink to="/">Back</NavLink>
            </button>
            <button
              form="user-form"
              className="px-4 py-2 bg-[#25A0B5] rounded-md w-1/2 text-center"
            >
              <NavLink to="/confirmation">Get My Free Ticket</NavLink>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendeeDetails;
