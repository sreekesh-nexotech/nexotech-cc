import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";


type ContactFormProps = {
  heading: string;
  description: string;
  showEmail?: boolean;
  showImage?:boolean;
  nameId:string;
  phoneId:string;
};

export default function ContactForm({
  heading,
  description,
  showEmail = false,
  showImage = false,
  nameId,
  phoneId,
}: ContactFormProps) {
  return (
    <section>
  
        <div
          className="relative overflow-hidden bg-[#111827] text-[#E5E7EB] px-8 py-16 rounded-2xl max-w-4xl mx-4 md:mx-auto flex flex-col md:flex-row justify-between items-start md:items-center shadow-xl md:gap-5"
          data-aos="zoom-y-out"
        >
          {/* Stripes illustration */}
          {showImage && (<div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>)}
        {/* Left Text Section */}
        <div className="mb-6 md:mb-0 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">{heading}</h2>
          <p className="text-lg text-gray-300 md:max-w-[400px]">{description}</p>
        </div>

        {/* Form Section */}
        <form className="md:w-1/2 w-full flex flex-col gap-4">
          <div>
            <label htmlFor={nameId} className="block text-sm mb-1 text-white opacity-50">
              Name
            </label>
            <input
              type="text"
              id={nameId}
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
            />
          </div>

         
          <div>
            <label htmlFor={phoneId} className="block text-sm mb-1 text-white opacity-50">
              Mobile number
            </label>
            <input
              type="tel"
              id={phoneId}
              placeholder="+91 1234-567890"
              className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
            />
          </div>

           {showEmail && (
            <div>
              <label htmlFor="email" className="block text-sm mb-1 text-white opacity-50">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-md bg-white text-black placeholder-gray-400"
              />
            </div>
          )}


          <button
            type="submit"
            className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
          >
            Get Free Consultation {" "}
            <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
              -&gt;
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}
