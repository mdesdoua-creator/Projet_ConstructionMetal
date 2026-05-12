import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Skyline Industrial Park",
    category: "Industrial",
    image: "/template img/cover.jpg",
  },
  {
    title: "Modern Bridge Design",
    category: "Infrastructure",
    image: "/template img/cover-1.jpg",
  },
  {
    title: "Urban Metal Pavilion",
    category: "Architectural",
    image: "/template img/Bamboo 1.png",
  },
];

const ProjectsPreview = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-[#f4b400] font-bold uppercase tracking-[4px] text-sm">Portfolio</span>
            <h2 className="text-5xl font-black mt-4">Featured Projects</h2>
          </div>
          <button className="flex items-center gap-2 font-bold text-lg hover:text-[#f4b400] transition-colors">
            View All Projects <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative h-[500px] rounded-[40px] overflow-hidden group cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10">
                <span className="text-[#f4b400] font-bold uppercase tracking-wider text-xs mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-3xl font-black">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
