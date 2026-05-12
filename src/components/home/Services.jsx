import { motion } from "framer-motion";
import { Building2, Ruler, Factory, Truck } from "lucide-react";

const services = [
  {
    icon: <Building2 size={40} />,
    title: "Structural Engineering",
    desc: "Comprehensive structural design and analysis for complex metal frameworks.",
  },
  {
    icon: <Factory size={40} />,
    title: "Metal Fabrication",
    desc: "State-of-the-art fabrication facilities producing high-precision steel components.",
  },
  {
    icon: <Ruler size={40} />,
    title: "Custom Design",
    desc: "Tailor-made architectural solutions that push the boundaries of metal design.",
  },
  {
    icon: <Truck size={40} />,
    title: "Project Management",
    desc: "Full lifecycle support from initial concept to final onsite assembly.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#f4b400] font-bold uppercase tracking-[4px] text-sm">What We Do</span>
          <h2 className="text-5xl font-black mt-4">Our Premium Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[30px] shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="text-[#f4b400] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
