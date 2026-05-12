import { motion } from "framer-motion";

const ContactBanner = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-black rounded-[50px] p-12 md:p-24 text-center text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f4b400]/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>

        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight relative z-10">
          Ready to Start Your <br />
          <span className="text-[#f4b400]">Next Project?</span>
        </h2>
        <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto relative z-10">
          Connect with our engineering experts today and let's build something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
          <button className="bg-[#f4b400] text-black px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all">
            Get a Quote
          </button>
          <button className="border-2 border-white text-white px-12 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-black transition-all">
            Contact Us
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactBanner;
