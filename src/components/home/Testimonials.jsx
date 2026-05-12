import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    role: "CEO, TechPark",
    text: "The precision and quality of work delivered by MetalDesign surpassed our expectations. Their 3D visualization made the planning phase seamless.",
  },
  {
    name: "Sarah Williams",
    role: "Architect, Urban Vision",
    text: "Working with them was a game-changer for our structural designs. They bring a level of innovation that is rare in the industry.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#f4b400] font-bold uppercase tracking-[4px] text-sm">Feedback</span>
          <h2 className="text-5xl font-black mt-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[40px] shadow-sm flex flex-col gap-6"
            >
              <Quote className="text-[#f4b400]" size={40} />
              <p className="text-xl italic text-gray-700 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-black text-xl">{t.name}</h4>
                <p className="text-[#f4b400] font-bold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
