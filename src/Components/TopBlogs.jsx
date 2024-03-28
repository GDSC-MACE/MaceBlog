import React, { useState, useEffect } from "react";
import e1 from '../assets/images/e1.png';
import e2 from '../assets/images/e2.jpeg';
import e3 from '../assets/images/e3.png';
import a1 from '../assets/images/a1.png';

function EventDetails({ title, description }) {
  return (
    <div className="absolute bottom-10 left-10 text-white max-md:text-sm max-w-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function ImageWithAltText({ src, alt, className }) {
  return <img loading="lazy" src={src} alt={alt} className={className} />;
}

function TopBlogs() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [e2, e1, e3];
  const blogs = [
    { title: "Blog 1", description: "Description for Blog 1." },
    { title: "Blog 2", description: "Description for Blog 2." },
    { title: "Blog 3", description: "Description for Blog 3." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 5000); // Change image every 5 seconds (5000 milliseconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[500px] max-md:px-5 max-md:pb-10 max-md:max-w-full max-md:text-4xl">
      <h2 className="absolute top-10 left-10 z-10 text-4xl font-semibold text-white max-md:text-xl">OUR TOP BLOGS</h2>
      <img
        loading="lazy"
        src={images[currentImage]}
        alt=""
        className="object-cover absolute inset-0 w-full h-full transition-opacity duration-500"
      />
      <div className="absolute bottom-10 right-10 flex items-center gap-2 p-2">
        <img
          src={a1}
          alt="Left Arrow"
          className="h-6 w-6 transform rotate-180 cursor-pointer"
          onClick={() => setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))}
        />
        {images.map((image, index) => (
          <ImageWithAltText
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`h-12 w-12 object-cover ${index === currentImage ? "opacity-100" : "opacity-50"}`}
          />
        ))}
        <img
          src={a1}
          alt="Right Arrow"
          className="h-6 w-6 transform cursor-pointer"
          onClick={() => setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))}
        />
      </div>
      <EventDetails title={blogs[currentImage].title} description={blogs[currentImage].description} />
    </section>
  );
}

export default TopBlogs;
