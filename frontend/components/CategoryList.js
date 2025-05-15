import Link from "next/link";
import Image from "next/image";


export default function CategoryList() {
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">Browse The Category</h2>
          <Link href="/categories">
            <span className="text-sm text-gray-600 hover:text-black flex items-center gap-1">
              See All Category →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link href={`/categories/${cat.slug}`} key={cat.slug}>
              <div
                className={`rounded-xl p-6 text-center cursor-pointer transition-colors duration-200 ${
                  cat.isActive
                    ? "bg-violet-600 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-100"
                }`}
              >
                <Image/>
                {/* <img
                  src={cat.icon}
                  alt={cat.title}
                  className="h-10 mx-auto mb-4"
                /> */}
                <h3 className="text-base font-medium">{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
