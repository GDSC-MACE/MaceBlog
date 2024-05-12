import React, { useState } from "react";
import b1 from '../assets/images/b1.png';

function BlogImage({ image, aspectRatio, description }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const containerClasses = `
    flex w-full max-md:w-full relative overflow-hidden 
    border border-orange-500 border-8 border-l-[25px] border-t-[25px] border-r-[25px]  mb-4 px-4
  `;

  const imageContainerClasses = `
    bg-orange w-full h-full absolute top-0 left-0 right-0 bottom-0  overflow-hidden 
    transition-transform duration-500 ${isHovered ? 'transform translate-y-[-100%]' : 'transform translate-y-0'}
  `;

  const descriptionContainerClasses = `
    bg-white w-full h-full absolute top-0 left-0 right-0 bottom-0 z-10  opacity-0 
    transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}
  `;

  return (
    <div
      className={containerClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ aspectRatio: aspectRatio }}
    >
      <div className={imageContainerClasses}>
        <img
          loading="lazy"
          src={image}
          alt=""
          className="w-full h-full justify-center  object-cover"
        />
      </div>
      <div className={descriptionContainerClasses}>
        <p className="text-black p-4">{description}</p>
      </div>
    </div>
  );
}

function Blogs() {
  const images = [
    { image: b1, aspectRatio: "1.15", description: "Description of blog 1" },
    { image: b1, aspectRatio: "1.15", description: "Description of blog 2" },
    { image: b1, aspectRatio: "1.15", description: "Description of blog 3" },
    { image: b1, aspectRatio: "1.15", description: "Description of blog 4" },
  ];

  return (
    <div className="flex justify-center items-center px-5 py-5 md:px-16 shadow-sm backdrop-blur-[3px]">
      <div className="grid grid-cols-2 gap-6 w-full max-w-[928px]">
        {images.map((image, index) => (
          <div key={index}>
            <BlogImage
              image={image.image}
              aspectRatio={image.aspectRatio}
              description={image.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;