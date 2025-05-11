import { FaMedium, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-700 mt-10 fixed bottom-0 left-0 right-0 w-full">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-5 gap-6">
        <div>
          <h2 className="text-xl font-bold text-blue-900">
            Murial<span className="text-purple-600">.blog</span>
          </h2>
         
          <div className="flex gap-3 mt-4 text-gray-600 text-lg">
            <FaMedium />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">CATEGORY</h3>
          <ul className="space-y-1">
            <li>CSS</li>
            <li>Javascript</li>
            <li>Tailwind</li>
            <li>React JS</li>
            <li>Next JS</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">ABOUT ME</h3>
          <ul className="space-y-1">
            <li>About Me</li>
            <li>Projects</li>
            <li>Achievement</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">GET IN TOUCH</h3>
          <ul className="space-y-1">
            
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">FOLLOW US</h3>
          <ul className="space-y-1">
            <li>Medium</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 py-4 text-center text-xs text-gray-500">
        <p>© 2025 DigitalMurials. All rights reserved.</p>
        <p className="mt-1">Made With ❤️ United States</p>
      </div>
    </footer>
  );
}