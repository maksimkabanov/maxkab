import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Contact Me
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:maksimkabanov@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    maksimkabanov@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+34698990700"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +34 698 990 700
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Balmes 59, 08007 Barcelona, Spain
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Languages
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    English (Upper-Intermediate), Spanish (Upper-Intermediate),
                    Russian (Native)
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                My networks
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    LinkedIn
                  </h3>
                  <a
                    href="https://www.linkedin.com/in/maksim-kabanov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    https://www.linkedin.com/in/maksim-kabanov/
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
