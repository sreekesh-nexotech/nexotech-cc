



const testimonials = [
  {
    text: "Nexotech absolutely nailed our vision. The platform is fast, intuitive, and our clients love it. Would 100% recommend them to any startup.",
    name: "Ankit Menon",
    role: "CEO, Birapt Marketing",
    rating: 4.5,
  },
  {
    text: " We needed a solid tech partner, and Nexotech delivered. The app is smooth, reliable, and packed with features our members use daily. ",
    name: "Rohit Kumar",
    role: "Founder, XYZ Fitness Club",
    rating: 5.0,
  },
  {
    text: " From day one, they were proactive and transparent. The site went live in just 7 days — exactly what we needed to launch confidently. ",
    name: "Vishal Sreedhar",
    role: "CTO, Autogen Bots",
    rating: 4.2,
  },
];

export default function Testimonial() {
  return (
    <div className="bg-[#0A1128] text-white py-12 px-6 md:px-12 mb-20">
      <h2 className=" text-center mb-10 border-y text-4xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.500/.2),transparent)1] md:text-5xl">Testimonials</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#0A1128] border border-gray-700 rounded-lg p-6 w-full max-w-sm"
          >
            <p className="text-sm mb-6">“{testimonial.text}”</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-full"></div>
              <div>
                <p className="text-[#3B82F6] font-normal">{testimonial.name}</p>
                <p className="text-sm text-[#3B82F6] opacity-50">{testimonial.role}</p>
              </div>
              <p className="ml-auto font-normal text-[#3B82F6]">{testimonial.rating}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}
