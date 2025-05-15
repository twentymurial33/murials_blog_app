// import Image from "next/image";


export default function Hero() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hi, I’m Murial <br />
            <span className="text-indigo-600">Front End Dev</span>
          </h1>
          <p className="text-gray-600 mb-6">
            On this blog I share tips and tricks, frameworks, projects, tutorials, etc.
            Make sure you subscribe to get the latest updates.
          </p>
          <form className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 rounded-r-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="hidden md:block">
          {/* <Image
            src={heroImage}
            alt="Hero illustration"
            width={500}
            height={500}
            priority
          /> */}
        </div>
      </div>
    </section>
  );
}
