import { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please fill in all required fields.');
    } else {
      setErrorMessage('');
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Add logic to send the message or perform other actions here
    }
  };

  return (
    <div className="flex flex-col justify-center text-2xl bg-black bg-opacity-5">
      {/* Background image and back to home link */}
      <div className="flex overflow-hidden relative flex-col px-5 py-5 w-full min-h-screen md:px-10 md:py-10 lg:px-20 lg:py-20">
        {/* Contact form */}
        <div className="flex flex-col items-center w-full max-w-screen-lg mx-auto bg-neutral-800 bg-opacity-90 rounded-xl shadow-lg">
          <div className="text-4xl font-bold text-orange-500 my-8 lg:text-5xl">
            CONTACT US
          </div>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            {/* Name input */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-white">
                Name<span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 text-white bg-transparent border border-orange-500 rounded-lg focus:outline-none focus:border-orange-700"
                required
              />
            </div>
            {/* Email input */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-white">
                Email<span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 text-white bg-transparent border border-orange-500 rounded-lg focus:outline-none focus:border-orange-700"
                required
              />
            </div>
            {/* Message input */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-white">
                Message<span className="text-orange-500">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 text-white bg-transparent border border-orange-500 rounded-lg focus:outline-none focus:border-orange-700 resize-none"
                required
              />
            </div>
            {/* Error message */}
            {errorMessage && (
              <div className="text-red-500 mb-4">{errorMessage}</div>
            )}
            {/* Clickable button */}
            <button
              type="submit"
              className="w-full px-4 py-3 text-lg font-bold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
            >
              SEND MESSAGE
            </button>
          </form>
          {/* Signup link */}
          <div className="text-white my-8">
            Don’t have an account? <span className="font-bold text-orange-500">Sign Up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
