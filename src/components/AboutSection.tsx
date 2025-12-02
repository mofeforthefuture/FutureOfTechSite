import { motion } from 'motion/react';
import { Calendar, MapPin, Play } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            About the Conference
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Future of Tech is a conference uniting developers, innovators, and dreamers building tomorrow's world today. 
            Join us for an inspiring journey through the latest advancements in AI, full-stack development, and open-source collaboration.
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-blue-400">
              <Calendar className="h-5 w-5" />
              <span className="text-gray-300">March 15, 2026</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-2 text-violet-400">
              <MapPin className="h-5 w-5" />
              <span className="text-gray-300">San Francisco, CA</span>
            </div>
          </div>
        </motion.div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden group cursor-pointer"
        >
          <div 
            className="aspect-video w-full relative"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1761223976241-e9068813774b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHRlY2hub2xvZ3klMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2MjgwNjU2Mnww&ixlib=rb-4.1.0&q=80&w=1080)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-violet-600/10 group-hover:from-blue-600/20 group-hover:to-violet-600/20 transition-all duration-300"></div>
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full bg-linear-to-r from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/50"
              >
                <Play className="h-8 w-8 text-white ml-1" fill="white" />
              </motion.div>
            </div>
          </div>
          
          {/* Glassmorphic border */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
        </motion.div>
      </div>
    </section>
  );
}
