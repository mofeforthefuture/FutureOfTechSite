import { motion } from 'motion/react';
import { Linkedin, Twitter } from 'lucide-react';
import { Card } from './ui/card';

const speakers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief AI Scientist',
    company: 'TechVision Labs',
    image: 'https://images.unsplash.com/photo-1624555130882-dcfa8ecb17ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjB0ZWNoJTIwbGVhZGVyfGVufDF8fHx8MTc2Mjg3NjE4OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'VP of Engineering',
    company: 'CloudScale Inc',
    image: 'https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyNzk3MjYzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'Emily Watson',
    role: 'Open Source Advocate',
    company: 'DevCommunity',
    image: 'https://images.unsplash.com/photo-1629507208649-70919ca33793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Mjg1OTE4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    name: 'David Park',
    role: 'Full-Stack Architect',
    company: 'Neural Systems',
    image: 'https://images.unsplash.com/photo-1620216464663-29984da34a12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI3ODY0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function SpeakersSection() {
  return (
    <section className="py-24 px-6 bg-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Featured Speakers
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn from industry leaders and visionaries shaping the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group overflow-hidden">
                {/* Image container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                  
                  {/* Social links - appear on hover */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-blue-600/80 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="w-8 h-8 rounded-full bg-blue-600/80 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Speaker info */}
                <div className="p-6">
                  <h3 className="mb-1 text-gray-100">
                    {speaker.name}
                  </h3>
                  <p className="text-blue-400 mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-gray-500">
                    {speaker.company}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
