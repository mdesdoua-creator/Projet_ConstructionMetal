import { Hammer, Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialIcons = [
    { Icon: FacebookIcon, href: "#" },
    { Icon: TwitterIcon, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <Hammer className="text-[#f4b400]" size={32} />
            <span className="text-2xl font-black tracking-tighter">
              METAL<span className="text-[#f4b400]">DESIGN</span>
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed mb-8">
            Pioneering the future of metal construction with innovation, precision, and excellence.
          </p>
          <div className="flex gap-4">
            {socialIcons.map((item, i) => (
              <a key={i} href={item.href} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f4b400] hover:text-black transition-all">
                <item.Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8">Quick Links</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8">Services</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li>Structural Design</li>
            <li>Metal Fabrication</li>
            <li>Industrial Roofing</li>
            <li>Bridge Construction</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-gray-400">
            <li>123 Industrial Way, <br />Metal City, MC 54321</li>
            <li>+1 (555) 123-4567</li>
            <li>info@metaldesign.com</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} MetalDesign Construction. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
