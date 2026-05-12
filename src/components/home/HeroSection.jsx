import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, MeshWobbleMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

function Scene3D() {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh rotation={[0.4, 0.2, 0]}>
        <boxGeometry args={[2.5, 2.5, 2.5]} />
        <MeshWobbleMaterial color="#f4b400" factor={0.2} speed={1} />
      </mesh>
      
      {/* Small orbiting cubes to make it more dynamic */}
      <mesh position={[3, 1, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#111" />
      </mesh>
      <mesh position={[-2, -2, 1]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#666" />
      </mesh>
    </Float>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#f8f8f8] flex items-center pt-20 overflow-hidden px-6 lg:px-10">
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f4b400]/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-[#f4b400] rounded-full animate-pulse"></span>
            <span className="text-[#f4b400] text-sm uppercase tracking-[3px] font-black">
              Leader in Metal Construction
            </span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] text-[#111] mb-8">
            STEELING <br />
            THE <span className="text-[#f4b400]">FUTURE</span>
          </h1>

          <p className="text-gray-500 mt-6 text-xl leading-relaxed max-w-xl">
            Pioneering industrial architecture with high-precision metal structures 
            that redefine modern urban landscapes.
          </p>

          <div className="flex flex-wrap gap-5 mt-12">
            <button className="bg-black text-white px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-all shadow-xl flex items-center gap-3">
              Our Projects <ArrowRight size={20} />
            </button>

            <button className="bg-white text-black px-10 py-5 rounded-2xl font-black text-lg hover:bg-gray-100 transition-all flex items-center gap-3">
              <div className="w-10 h-10 bg-[#f4b400] rounded-full flex items-center justify-center text-white">
                <Play size={18} fill="white" />
              </div>
              Watch Video
            </button>
          </div>

          {/* STATS */}
          <div className="flex gap-12 mt-20 border-t border-gray-200 pt-12">
            <div>
              <h2 className="text-5xl font-black text-[#111]">15+</h2>
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mt-2">Years Exp.</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-[#111]">250+</h2>
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mt-2">Projects</p>
            </div>

            <div>
              <h2 className="text-5xl font-black text-[#111]">12k</h2>
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mt-2">Tons Steel</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-[600px] lg:h-[800px]"
        >
          {/* Background Decorative Elements */}
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#f4b400]/10 rounded-full blur-[120px]"></div>
          
          {/* 3D CANVAS */}
          <div className="w-full h-full relative z-10">
            <Canvas camera={{ position: [0, 0, 8] }}>
              <ambientLight intensity={1} />
              <pointLight position={[10, 10, 10]} intensity={2} />
              <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />

              <Environment preset="city" />

              <Scene3D />

              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={1}
              />
            </Canvas>
          </div>

          {/* Floating Performance Card */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-10 bg-white shadow-2xl rounded-[30px] p-8 z-20 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <ArrowRight className="-rotate-45" size={24} />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Efficiency</p>
                <h4 className="text-2xl font-black">+45%</h4>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 -right-10 bg-black text-white shadow-2xl rounded-[30px] p-8 z-20 hidden md:block"
          >
            <h4 className="font-black text-xl mb-1">Precision Build</h4>
            <p className="text-gray-500 text-sm">Industrial Standard 4.0</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
