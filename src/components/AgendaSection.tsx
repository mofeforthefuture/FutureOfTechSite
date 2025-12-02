import { motion } from 'motion/react';
import { Clock, Coffee, Lightbulb, Users, Wrench } from 'lucide-react';

const schedule = [
  {
    time: '08:00 - 09:00',
    title: 'Registration & Breakfast',
    description: 'Check-in, networking, and morning refreshments',
    icon: Coffee,
    type: 'break',
  },
  {
    time: '09:00 - 10:30',
    title: 'Opening Keynote',
    description: 'The Future of AI: Opportunities and Challenges',
    icon: Lightbulb,
    type: 'keynote',
  },
  {
    time: '10:45 - 12:00',
    title: 'Panel Discussion',
    description: 'Building Full-Stack AI Applications at Scale',
    icon: Users,
    type: 'panel',
  },
  {
    time: '12:00 - 13:00',
    title: 'Lunch Break',
    description: 'Networking lunch with speakers and attendees',
    icon: Coffee,
    type: 'break',
  },
  {
    time: '13:00 - 15:00',
    title: 'Afternoon Workshops',
    description: 'Hands-on sessions on AI integration and open source tools',
    icon: Wrench,
    type: 'workshop',
  },
  {
    time: '15:15 - 16:30',
    title: 'Lightning Talks',
    description: 'Quick insights from community leaders and innovators',
    icon: Lightbulb,
    type: 'talks',
  },
  {
    time: '16:30 - 18:00',
    title: 'Evening Networking',
    description: 'Cocktails, conversations, and connections',
    icon: Users,
    type: 'networking',
  },
];

export function AgendaSection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 bg-linear-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Event Agenda
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A full day of inspiration, learning, and networking
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-500 via-violet-500 to-blue-500 transform md:-translate-x-1/2"></div>

          {/* Schedule items */}
          <div className="space-y-12">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} mb-4 md:mb-0`}>
                  <div className="inline-block p-6 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className="flex items-center gap-2 mb-2 text-blue-400">
                      <Clock className="h-4 w-4" />
                      <span>{item.time}</span>
                    </div>
                    <h3 className="mb-2 text-gray-100">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Icon in center */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/50 border-4 border-black z-10">
                  <item.icon className="h-5 w-5 text-white" />
                </div>

                {/* Spacer for the other half on desktop */}
                <div className="hidden md:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
