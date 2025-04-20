import { basics, languages } from "../data/resume";

export const metadata = {
  title: "Contact | Maksim Kabanov",
  description: "Get in touch with Maksim Kabanov, Senior Frontend Developer",
};

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
                    href={`mailto:${basics?.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {basics?.email}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {basics?.location?.address}, {basics?.location?.postalCode}{" "}
                    {basics?.location?.city}, {basics?.location?.region}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {languages?.map((lang, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                      >
                        {lang.language} - {lang.fluency}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Social Networks
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href={basics?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
