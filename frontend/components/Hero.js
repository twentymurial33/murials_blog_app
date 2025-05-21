import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
      style={{
        backgroundColor: "var(--color-lightGrey2)",
        color: "var(--color-black)",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 color-blue
      md:grid-cols-2 gap-12 items-center">
        <div>
          <h1
            className="mb-4 leading-tight "
            style={{
              fontSize: "clamp(2rem, 5vw, var(--font-size-4xl))",
              fontFamily: "var(--font-plus-jakarta)",
              fontWeight: "bold",
              color: "var(--color-black)",
            }}
          >
            Hi, I’m Murial <br />
            <span style={{ color: "var(--color-blue)" }}>Front End Dev</span>
          </h1>

          <p
            className="mb-6 max-w-xl lightGrey"
            style={{
              color: "var(--color-grey)",
              fontSize: "var(--font-size-md)",
              fontFamily: "var(--font-plus-jakarta)",
              lineHeight: "1.6",
            }}
          >
            On this blog I share tips and tricks, frameworks, projects, tutorials, etc.
            Make sure you subscribe to get the latest updates.
          </p>
          <form
  className="flex w-full max-w-full flex-col sm:flex-row"
  aria-label="Email subscription form"
  style={{
    width: "609px",
    height: "67px",
    maxWidth: "100%",
  }}
>
  <label htmlFor="email" className="sr-only">Email address</label>
  <input
    id="email"
    type="email"
    placeholder="Enter your email here..."
    className="flex-1 px-4 py-3 border sm:rounded-l-md sm:rounded-r-none rounded-md mb-4 sm:mb-0 focus:outline-none focus:ring-2 transition bg-white"
    style={{
      borderColor: "var(--color-grey)",
      fontFamily: "var(--font-plus-jakarta)",
      fontSize: "var(--font-size-md)",
      height: "67px",
    }}
  />
  <button
    type="submit"
    className="px-6 rounded-md sm:rounded-l-none sm:rounded-r-md transition transform .bg-blue hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 active:bg-blue-800 text-white font-medium text-sm bg-blue"
    // onMouseDown={(e) => e.currentTarget.classList.add("scale-95")}
    // onMouseUp={(e) => e.currentTarget.classList.remove("scale-95")}
    // onMouseLeave={(e) => e.currentTarget.classList.remove("scale-95")}
  >
    Subscribe
  </button>
</form>
        </div>
        <div className="flex-shrink-0 sm:ml-6 mt-12 sm:mt-0">
          <Image
            src="/images/Group.png"
            alt="Hero illustration"
            width={434}
            height={363}
            priority
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
