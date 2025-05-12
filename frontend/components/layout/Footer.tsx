
export default function Footer() {
  return (
    <footer className="bg-lightGrey2 text-sm text-grey mt-10 fixed bottom-0 left-0 right-0 w-full">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-4 md:grid-cols-5 gap-6">
        <div>
          <h2 className="text-xl font-bold text-blue">
            Murials Blog
          </h2>
          <div className="flex gap-3 mt-4 text-grey text-lg">
            <img src="/images/Medium Monogram.png" alt="Medium" width={24} height={24} />
            <img src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-darkGrey">CATEGORY</h3>
          {/* TODO: Get cATEGORY List from DB */}
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
          <a
        href="https://twitter.com/twentymurial22"
        target="_blank"
        rel="noopener noreferrer"
        >
        Twitter
       </a>
        </li>
            <li>
              <a href="tel:713-962-0931" rel="noopener noreferrer">Phone</a>
              </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-darkGrey text-base">FOLLOW US</h3>
          <ul className="space-y-1">
            <li>
              <a href="https://www.facebook.com/twentymurial22"
              target='_blank' rel='noopener noreferrer'>Medium</a>
              </li>
             <li>
              <a href="https://www.linkedin.com/in/twentymurial22/"
              target='_blank' rel='noopener noreferrer'>LinkedIn</a>
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
