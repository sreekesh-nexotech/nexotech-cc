import { useEffect, useState } from 'react';
import Image from 'next/image';

type ProjectContentProps = {
  title: string;
  description: string;
  website: string;
  images: string[];
  cost: string;
  duration: string;
  technology: string;
};


export default function ProjectContent({
  title,
  description,
  website,
  images,
  cost,
  duration,
  technology,
}: ProjectContentProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src={images[currentIndex]}
                alt={`Project Image ${currentIndex + 1}`}
                width={600}
                height={400}
                className="transition duration-700 ease-in-out object-cover w-full h-auto rounded-2xl"
                priority
              />

              {/* Dots Inside Image */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-white scale-110' : 'bg-white/50'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <a href={website} className="text-sm text-gray-500 underline" target='new'>Visit Website</a>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
              <div className=" p-2 py-0 text-left border-r-2 ">
                <p className="text-xs text-gray-500 md:text-sm">Project Cost</p>
                <p className="font-medium text-base md:text-xl ">{cost}</p>
              </div>
              <div className="p-2 py-0 text-left border-r-2 ">
                <p className="text-xs text-gray-500 md:text-sm">Duration</p>
                <p className="font-medium text-base md:text-xl">{duration}</p>
              </div>
              <div className="p-2 py-0 text-left">
                <p className="text-xs text-gray-500 md:text-sm">Technology</p>
                <p className="font-medium text-base md:text-xl">{technology}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
