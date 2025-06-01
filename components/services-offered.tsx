import Link from "next/link";

export default function ServicesOffered() {
    return (
      <section id="services-offered" className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
              <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
                Services We Offer
              </h2>
              <p className="text-gray-400 mt-4">
                From websites to AI-powered solutions, we provide a range of
                services to help your business thrive in the digital world.
              </p>
            </div>
            {/* Grid of services */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">Websites</h3>
                <p className="text-gray-400">
                  We make clean, mobile-friendly websites that work well on all devices. Our websites help your business to connect with your audience. From portfolio to Ecommerce, we will help you to build a brand.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">Custom Softwares</h3>
                <p className="text-gray-400">
                  We build custom software that is easy to use and helps your business run better. It saves time and makes your work simpler. These softwares will be easily integrated into your current website and 3rd party tools.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">Mobile Applications</h3>
                <p className="text-gray-400">
                  We create apps for android and apple devices. These apps are tailored for your business needs, simple to use and help your customers connect with you easily. From design to development, we take care of everything.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">Whatsapp AI Chatbots</h3>
                <p className="text-gray-400">
                  We build smart AI chatbots for WhatsApp. They talk to your customers anytime, answer questions fast, and help grow your sales by acting as a sales agent or customer service. From AI model training to Chat bot API integration we deliver quality chatbots.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">
                  ERP, HR & Accounting Tools
                </h3>
                <p className="text-gray-400">
                  We make tools to help with managing your business, employees, and money. These tools keep everything organized and make your work easier. These tools are easily integrated into your existing website to provide a business eco system.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">
                  Algo Trading Setup
                </h3>
                <p className="text-gray-400">
                  We help traders to automate their trading system using custom code. These are exclusively made for each user based on their strategy for high frequency trading. (Note: We don't sell any strategy)
                </p>
              </article>
              
            </div>
            <div className="flex items-center justify-center mt-10">
                  <Link
                    className="btn group mb-4 w-full bg-gradient-to-t from-[#FFFFFFA3] to-[#fffffff5] bg-[length:100%_100%] bg-[bottom] text-[#1F2937] shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="/projects"
                  >
                    <span className="relative inline-flex items-center">
                      See our recent works{" "}
                      <span className="ml-1 tracking-normal text-[#1f29377d] transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
  