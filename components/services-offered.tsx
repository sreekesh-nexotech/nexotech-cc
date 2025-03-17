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
                  We design modern, responsive websites tailored to your business.
                  Our websites help attract more customers and establish a strong
                  online presence.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">Softwares</h3>
                <p className="text-gray-400">
                  We build secure, scalable, and easy-to-use custom software to
                  fit your business needs. Simplify your processes and improve
                  efficiency.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">Applications</h3>
                <p className="text-gray-400">
                  We create mobile and desktop apps that are intuitive and
                  feature-rich, improving customer engagement and accessibility.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">AI Chatbots</h3>
                <p className="text-gray-400">
                  Develop AI-powered chatbots that provide 24/7 customer support,
                  handle multiple queries, and boost sales with instant
                  communication.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">
                  WhatsApp Automation
                </h3>
                <p className="text-gray-400">
                  Automate WhatsApp messages for greetings, responses, and
                  notifications using APIs. Save time and enhance customer
                  communication.
                </p>
              </article>
              <article>
                <h3 className="mb-2 text-lg font-medium text-blue-500">
                  Algo Trading Tools
                </h3>
                <p className="text-gray-400">
                  Create smart trading tools with advanced algorithms and real-time
                  data analysis to trade smarter, reduce risks, and increase
                  profitability.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
  