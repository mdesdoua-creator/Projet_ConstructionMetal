import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const AboutPreview = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square bg-gray-100 rounded-[40px] overflow-hidden">
            {/* Placeholder for an image */}
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
               <span className="text-sm">About Image Placeholder</span>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 bg-[#f4b400] p-10 rounded-[30px] hidden md:block">
            <h4 className="text-4xl font-black">20+</h4>
            <p className="font-bold text-sm uppercase tracking-wider">Years of <br /> Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#f4b400] font-bold uppercase tracking-[4px] text-sm">Our Legacy</span>
          <h2 className="text-5xl font-black mt-4 mb-6 leading-tight">
            Engineering the <br /> 
            World of <span className="text-[#f4b400]">Steel</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Since our inception, we have been at the forefront of metal construction, 
            blending traditional craftsmanship with cutting-edge technology. Our 
            structures are built to last, designed to inspire, and engineered for 
            maximum efficiency.
          </p>

          <div className="grid gap-4">
            {[
              "Innovative Structural Design",
              "Precision Metal Fabrication",
              "Sustainable Building Solutions",
              "Turnkey Industrial Projects"
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#f4b400]" />
                <span className="font-bold text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-10 bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-[#f4b400] hover:text-black transition-all">
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
