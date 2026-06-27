import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About Us */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">About Us</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Music School is a premier institution dedicated to teaching the art and science of music.
            We nurture talent from the ground up, fostering a vibrant community of musicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Courses", "Contact"].map((label) => (
              <li key={label}>
                <Link
                  href={label === "Home" ? "/" : `/${label.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-2 text-sm">
            {["Facebook", "Twitter", "Instagram"].map((platform) => (
              <Link
                key={platform}
                href="/"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
              >
                {platform}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Contact Us</h3>
          <address className="not-italic text-sm text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
            <p>Punjab, Lahore, Pakistan</p>
            <p>
              Email:{" "}
              <a href="mailto:musicschool@gmail.com" className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                musicschool@gmail.com
              </a>
            </p>
            <p>Phone: +92 123 456 7890</p>
          </address>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-white/[0.1] py-5 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Music School. All rights reserved.
      </div>
    </footer>
  );
}

