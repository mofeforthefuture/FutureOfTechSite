import { motion } from 'motion/react';
import { Brain, Code2, GitBranch, Rocket } from 'lucide-react';
import { Card } from './ui/card';

const themes = [
  {
    icon: Brain,
    title: 'Artificial Intelligence',
    description: 'Explore the latest breakthroughs in machine learning, neural networks, and AI-powered solutions shaping our future.',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'blue',
  },
  {
    icon: Code2,
    title: 'Full-Stack AI Applications',
    description: 'Discover how to build end-to-end intelligent applications that seamlessly integrate AI across the entire stack.',
    color: 'from-violet-500 to-purple-500',
    glowColor: 'violet',
  },
  {
    icon: GitBranch,
    title: 'Open Source',
    description: 'Celebrate the power of community-driven innovation and learn how open collaboration accelerates technological progress.',
    color: 'from-pink-500 to-rose-500',
    glowColor: 'pink',
  },
  {
    icon: Rocket,
    title: 'The Way Forward',
    description: 'Chart the course for tomorrow with insights on emerging trends, ethical AI, and sustainable tech innovation.',
    color: 'from-indigo-500 to-blue-500',
    glowColor: 'indigo',
  },
];

export function ThemesSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-black to-gray-950 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Conference Themes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Four pillars driving the future of technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative h-full bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:border-gray-700 transition-all duration-300 group overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${theme.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <theme.icon className="h-6 w-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-gray-100">
                    {theme.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 flex-grow">
                    {theme.description}
                  </p>

                  {/* Decorative line */}
                  <div className={`h-1 w-0 bg-gradient-to-r ${theme.color} group-hover:w-full transition-all duration-500 mt-4 rounded-full`}></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
