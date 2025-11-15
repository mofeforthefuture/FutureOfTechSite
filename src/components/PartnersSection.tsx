import { motion } from 'motion/react';

// Mock partner logos - in a real app, these would be actual company logos
const partners = [
  { name: 'TechCorp', color: 'from-blue-500 to-cyan-500' },
  { name: 'AI Labs', color: 'from-violet-500 to-purple-500' },
  { name: 'DevHub', color: 'from-pink-500 to-rose-500' },
  { name: 'CloudNext', color: 'from-indigo-500 to-blue-500' },
  { name: 'OpenTech', color: 'from-green-500 to-emerald-500' },
  { name: 'NeuralNet', color: 'from-orange-500 to-amber-500' },
];

export function PartnersSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Our Partners
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proud to collaborate with leading organizations in tech innovation
          </p>
        </motion.div>

        {/* Partners grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300 flex items-center justify-center p-6 relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                
                {/* Logo placeholder - styled text */}
                <div className="relative z-10 text-center">
                  <div className={`bg-gradient-to-r ${partner.color} bg-clip-text text-transparent`}>
                    {partner.name}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Become a partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Interested in partnering with us?
          </p>
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
          >
            Get in touch
            <svg
              className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
