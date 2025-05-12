import { FaMedium, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-lightGrey2 text-sm text-grey mt-10 fixed bottom-0 left-0 right-0 w-full">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-4 md:grid-cols-5 gap-6">
        <div>
          <h2 className="text-xl font-bold text-blue">
            Murials Blog
          </h2>
          <div className="flex gap-3 mt-4 text-grey text-lg">
            <FaMedium />
            <FaLinkedin />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-darkGrey">CATEGORY</h3>
          {/* Get cATEGORY List from DB */}
          <ul className="space-y-1">
            <li>CSS</li>
            <li>Javascript</li>
            <li>Tailwind</li>
            <li>React JS</li>
            <li>Next JS</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-darkGrey text-base">GET IN TOUCH</h3>
          <ul className="space-y-1">
            <li>
              <Link href="https://twitter.com/twentymurial22"/> Twitter
              </li>
            <li>
              <Link href="713-962-0931"/> Phone
              </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-darkGrey text-base">FOLLOW US</h3>
          <ul className="space-y-1">
            <li>
              <Link href="https://www.medium.com/@twentymurial22"/>Medium
              </li>
            <li>
              <Link href="https://www.linkedin.com/in/twentymurial22/"/>LinkedIn
              </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-grey py-4 text-center text-xs text-grey">
        <p>© 2025 DigitalMurials. All rights reserved.</p>
        <p className="mt-1">Made With ❤️ United States</p>
      </div>
    </footer>
  );
}
