import { useState } from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col justify-center text-2xl bg-white">
      <div className="flex overflow-hidden relative flex-col px-11 pt-11 pb-20 w-full min-h-[832px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7ccd638b1077f0756df15da32ed3834dd6f3a25ccb5df97fe02e05ff50cf992f?apiKey=1094140146b54105aaf9ddd67ca73233&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ccd638b1077f0756df15da32ed3834dd6f3a25ccb5df97fe02e05ff50cf992f?apiKey=1094140146b54105aaf9ddd67ca73233&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ccd638b1077f0756df15da32ed3834dd6f3a25ccb5df97fe02e05ff50cf992f?apiKey=1094140146b54105aaf9ddd67ca73233&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ccd638b1077f0756df15da32ed3834dd6f3a25ccb5df97fe02e05ff50cf992f?apiKey=1094140146b54105aaf9ddd67ca73233&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ccd638b1077f0756df15da32ed3834dd6f3a25ccb5df97fe02e05ff50cf992f?apiKey=1094140146b54105aaf9ddd67ca73233&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ccd638b1077f0756df15da32ed3834dd6f3a25ccb5df97fe02e05ff50cf992f?apiKey=1094140146b54105aaf9ddd67ca73233&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ccd638b1077f0756df15da32ed3834dd6f3a25ccb5df97fe02e05ff50cf992f?apiKey=1094140146b54105aaf9ddd67ca73233&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7ccd638b1077f0756df15da32ed3834dd6f3a25ccb5df97fe02e05ff50cf992f?apiKey=1094140146b54105aaf9ddd67ca73233&"
          className="object-cover absolute inset-0 size-full"
          alt="Background"
        />
        {/* Sign Up Form */}
        <div className="flex relative flex-col items-start self-center py-9 pr-20 pl-8 mt-28 mb-16 max-w-full rounded-2xl border-orange-500 border-solid shadow-sm backdrop-blur-[3px] border-r-[72px] w-[663px] max-md:px-5 max-md:my-10">
          <div className="text-5xl font-bold text-orange-500 max-md:max-w-full max-md:text-4xl">
            SIGN UP
          </div>
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="justify-center items-start px-5 py-5 mt-16 max-w-full rounded-xl bg-neutral-800 text-orange-500 text-opacity-60 tracking-[3px] w-full max-md:w-[430px] max-md:pr-5">
              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white"
                required
              />
            </div>
            {/* Email Field */}
            <div className="justify-center items-start px-5 py-5 mt-8 max-w-full rounded-xl bg-neutral-800 text-orange-500 text-opacity-60 tracking-[3px] w-full max-md:w-[430px] max-md:pr-5">
              <input
                type="email"
                placeholder="Enter email id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white"
                required
              />
            </div>
            {/* Password Field */}
            <div className="justify-center items-start p-5 mt-8 max-w-full rounded-xl bg-neutral-800 text-orange-500 text-opacity-60 tracking-[3px] w-full max-md:w-[430px] max-md:pr-5">
              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent border-none outline-none text-white"
                required
              />
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="justify-center px-12 py-5 mt-9 ml-28 font-bold whitespace-nowrap bg-orange-500 rounded-xl text-zinc-800 tracking-[2px] max-md:px-5 max-md:ml-2.5 cursor-pointer"
            >
              Sign Up
            </button>
            {/* Error Message */}
            {errorMessage && <div className="text-red-500 mt-3">{errorMessage}</div>}
          </form>
          {/* Login Link */}
          <div className="mt-12 text-2xl text-white max-md:mt-10 max-md:max-w-full">
            Already have an account?<span className="font-bold"> <Link to="/login">Log In</Link></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
