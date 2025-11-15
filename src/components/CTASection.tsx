import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1762279389053-d5a30239ae45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd2F2ZSUyMGFic3RyYWN0fGVufDF8fHx8MTc2Mjg3NjE4N3ww&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
      </div>

      {/* Animated particles effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * 500,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * 500 - 250],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-6"
          >
            <Sparkles className="h-12 w-12 text-violet-400" />
          </motion.div>

          <h2 className="mb-6 bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Be Part of the Future
          </h2>

          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers, innovators, and tech leaders in shaping tomorrow's technology landscape. 
            Don't miss this opportunity to connect, learn, and grow.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 shadow-lg shadow-blue-500/50 group"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-400"
            >
              View Full Schedule
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            <div className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <p className="text-gray-400">Attendees</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                20+
              </div>
              <p className="text-gray-400">Speakers</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                8+
              </div>
              <p className="text-gray-400">Workshops</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
