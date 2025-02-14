import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import upload from '../assets/icons/upload.png';

const AttendeeDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: 'Please select an image.',
      }));
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ticket_avatar');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/drhyczqfj/image/upload',
        formData
      );

      const imageUrl = response.data.secure_url;
      setImage(imageUrl);
      localStorage.setItem('imageURL', imageUrl);
    } catch (error) {
      console.error('Upload Error:', error);
      setErrors((prevErrors) => ({
        ...prevErrors,
        image: 'Image upload failed. Try again.',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errorsObj = {};

    if (!name.trim()) errorsObj.name = 'Full name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorsObj.email = 'Valid email is required';
    }
    if (!image) {
      errorsObj.image = 'Profile image is required';
    }
    if (!specialRequest.trim()) {
      errorsObj.specialRequest = 'Special request cannot be empty';
    }

    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      return;
    }

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('specialRequest', specialRequest);
    localStorage.setItem('imageURL', image);

    navigate('/confirmation');
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen p-4 md:p-8">
        <div className="w-full">
          <Header />
        </div>
        <div className="border border-[#0E464F] rounded-3xl p-2 md:p-12 bg-[#041E22] text-white w-full max-w-4xl flex flex-col gap-4">
          <div className="py-2 flex items-center justify-between flex-wrap">
            <h1 className="jeju text-[22px] md:text-[32px]">
              Attendee Details
            </h1>
            <p className="roboto text-sm md:text-base">
              Step <span>2</span>/<span>3</span>
            </p>
          </div>
          <div className="h-1 w-full bg-[#0E464F] rounded">
            <div className="w-2/3 h-full bg-[#2194A9] rounded"></div>
          </div>

          <form
            className="bg-inherit md:bg-[#09252B] border border-transparent md:border-[#0E464F] p-1 md:p-6 rounded-3xl"
            onSubmit={handleSubmit}
          >
            <div className="mt-4 p-4 md:p-6 border border-[#0E464F] rounded-2xl bg-[#07252B] flex flex-col items-center justify-center">
              <p className="mb-8 md:mb-8 text-start roboto w-full">
                Upload Profile Photo
              </p>
              <label
                htmlFor="file-upload"
                className="cursor-pointer border border-dashed border-transparent md:border-[#2194A9] rounded-xl p-0 md:p-6 flex items-center justify-center w-fit md:w-full h-40 md:h-48 bg-inherit md:bg-[#052228] hover:bg-[#30555b]"
              >
                <div className="border-4 border-[#24A0B5] bg-[#0E464F] size-45 md:size-56 rounded-3xl overflow-hidden text-center flex justify-center items-center">
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      className="w-full h-full object-cover object-center rounded-xl"
                    />
                  ) : (
                    <div>
                      <span className="w-full flex justify-center items-center mb-2">
                        <img src={upload} alt="upload" />
                      </span>
                      <span className="text-white text-center text-xs md:text-sm">
                        Drag & drop or click to upload
                      </span>
                    </div>
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
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm text-center">{errors.image}</p>
            )}

            <div className="h-1 w-full bg-[#0E464F] my-6 md:my-8 rounded"></div>

            <div className="mt-4 flex flex-col gap-4">
              <div>
                <label className="block text-sm md:text-base roboto mb-1">
                  Enter your name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-[#0E464F] rounded-md text-white text-sm md:text-base"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-base roboto mb-1">
                  Enter your email *
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-[#0E464F] rounded-md text-white text-sm md:text-base"
                  placeholder="Johndoe@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm md:text-base roboto mb-1">
                  Special request?
                </label>
                <textarea
                  className="w-full p-2 border border-[#0E464F] rounded-md text-white h-20 md:h-24 text-sm md:text-base"
                  rows={3}
                  value={specialRequest}
                  placeholder="I would love to...."
                  onChange={(e) => {
                    setSpecialRequest(e.target.value);
                  }}
                />
                {errors.specialRequest && (
                  <p className="text-red-500 text-sm">
                    {errors.specialRequest}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 jeju mt-6">
              <NavLink
                to="/"
                className="px-4 py-2 border border-[#25A0B5] text-[#25A0B5] rounded-md w-full md:w-1/2 text-center"
              >
                Back
              </NavLink>
              <button
                type="submit"
                className="px-4 py-2 bg-[#25A0B5] rounded-md w-full md:w-1/2 text-center cursor-pointer"
              >
                Get My Free Ticket
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AttendeeDetails;
